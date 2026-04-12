const memoryStores = globalThis.__vantastreamEdgeRateLimitMemory ?? new Map();

globalThis.__vantastreamEdgeRateLimitMemory = memoryStores;

export async function checkEdgeRateLimit({ bucket, id, limit, windowMs }) {
  const now = Date.now();
  const key = `${bucket}:${id}`;
  const existing = memoryStores.get(key) ?? [];
  const validHits = existing.filter((timestamp) => now - timestamp < windowMs);

  if (validHits.length >= limit) {
    return {
      success: false,
      remaining: 0,
      reset: validHits[0] + windowMs
    };
  }

  validHits.push(now);
  memoryStores.set(key, validHits);

  return {
    success: true,
    remaining: Math.max(0, limit - validHits.length),
    reset: now + windowMs
  };
}

export function getEdgeClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "anonymous";
}
