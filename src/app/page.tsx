import { Footer } from "@/components/Footer";
import { SectionCastracao } from "@/components/SectionCastracao";
import { SectionDenuncie } from "@/components/SectionDenuncie";
import { SectionHero } from "@/components/SectionHero";
import { SectionServices } from "@/components/SectionServices";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
      <SectionCastracao />
      <SectionDenuncie />
      <Footer />
    </>
  );
}
