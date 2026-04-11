import { GuidePage } from "@/components/guide-page";
import { getGuideMetadata, guides } from "@/lib/guides";

export async function generateMetadata() {
  return getGuideMetadata("fix-iptv-buffering");
}

export default function FixBufferingPage() {
  return <GuidePage guide={guides["fix-iptv-buffering"]} slug="fix-iptv-buffering" />;
}
