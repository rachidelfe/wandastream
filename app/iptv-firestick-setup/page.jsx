import { GuidePage } from "@/components/guide-page";
import { getGuideMetadata, guides } from "@/lib/guides";

export async function generateMetadata() {
  return getGuideMetadata("iptv-firestick-setup");
}

export default function FirestickSetupPage() {
  return <GuidePage guide={guides["iptv-firestick-setup"]} slug="iptv-firestick-setup" />;
}
