import { StructuredData } from "@/components/structured-data";
import { HomePage } from "@/components/home-page";

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <StructuredData />
      <HomePage />
    </>
  );
}
