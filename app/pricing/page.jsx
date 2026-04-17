import { redirect } from "next/navigation";

export const metadata = {
  title: "Tarifs abonnement IPTV France | WandaStream",
  description:
    "Comparez les offres WandaStream de 1 mois, 3 mois, 6 mois ou annuel pour regarder chaînes françaises, sport, films et séries."
};

export default function PricingPage() {
  redirect("/#pricing");
}
