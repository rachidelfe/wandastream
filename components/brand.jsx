import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

const logoSrc = "/assets/img/iptv-france-wandastream-iptv-logo.svg";

export function Brand({ href = "/", priority = false, className = "brand" }) {
  return (
    <Link className={className} href={href} aria-label={`Accueil ${siteConfig.name}`}>
      <Image
        className="brand-logo"
        src={logoSrc}
        alt={siteConfig.name}
        width={220}
        height={40}
        priority={priority}
      />
    </Link>
  );
}

export function FooterBrand({ href = "/" }) {
  return <Brand href={href} className="footer-brand" />;
}
