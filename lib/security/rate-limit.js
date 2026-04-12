import "server-only";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const memoryStores = globalThis.__vantastreamRateLimitMemory ?? new Map();
const limiterCache = globalThis.__vantastreamLimiters ?? new Map();

globalThis.__vantastreamRateLimitMemory = memoryStores;
globalThis.__vantastreamLimiters = limiterCache;

function getRedisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  if (!globalThis.__vantastreamRedis) {
    globalThis.__vantastreamRedis = new Redis({ url, token });
  }

  return globalThis.__vantastreamRedis;
}

function createMemoryLimiter(bucket, limit, windowMs) {
  return {
    async limit(id) {
      const now = Date.now();
      const key = `${bucket}:${id}`;
      const existing = memoryStores.get(key) ?? [];
      const validHits = existing.filter((timestamp) => now - timestamp < windowMs);

      if (validHits.length >= limit) {
        const reset = validHits[0] + windowMs;
        memoryStores.set(key, validHits);

        return {
          success: false,
          limit,
          remaining: 0,
          reset,
          pending: Promise.resolve()
        };
      }

      validHits.push(now);
      memoryStores.set(key, validHits);

      return {
        success: true,
        limit,
        remaining: Math.max(0, limit - validHits.length),
        reset: now + windowMs,
        pending: Promise.resolve()
      };
    }
  };
}

function getLimiter({ bucket, limit, windowMs }) {
  const cacheKey = `${bucket}:${limit}:${windowMs}`;

  if (limiterCache.has(cacheKey)) {
    return limiterCache.get(cacheKey);
  }

  const redis = getRedisClient();
  const limiter = redis
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(limit, `${Math.ceil(windowMs / 1000)} s`),
        analytics: false,
        prefix: `vantastream:${bucket}`
      })
    : createMemoryLimiter(bucket, limit, windowMs);

  limiterCache.set(cacheKey, limiter);

  return limiter;
}

export async function checkRateLimit({ bucket, id, limit, windowMs }) {
  const limiter = getLimiter({ bucket, limit, windowMs });
  return limiter.limit(id);
}

export function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "anonymous";
}
