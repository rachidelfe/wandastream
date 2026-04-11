import { GuidePage } from "@/components/guide-page";
import { getGuideMetadata, guides } from "@/lib/guides";

export async function generateMetadata() {
  return getGuideMetadata("best-vpn-for-iptv");
}

export default function BestVpnPage() {
  return <GuidePage guide={guides["best-vpn-for-iptv"]} slug="best-vpn-for-iptv" />;
}
