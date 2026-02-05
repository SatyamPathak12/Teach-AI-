import { Metadata } from "next";
import RevealOnScroll from "@/components/Common/RevealOnScroll";
import PartnerHero from "@/components/TeachAI/Partners/PartnerHero";
import PartnershipBenefits from "@/components/TeachAI/Partners/PartnershipBenefits";
import PartnershipModel from "@/components/TeachAI/Partners/PartnershipModel";
import CurriculumDelivery from "@/components/TeachAI/Partners/CurriculumDelivery";
import PlacementsNetwork from "@/components/TeachAI/Partners/PlacementsNetwork";
import ImplementationTimeline from "@/components/TeachAI/Partners/ImplementationTimeline";
import PartnersCTA from "@/components/TeachAI/Partners/PartnersCTA";
import GlobalBackground from "@/components/Common/GlobalBackground";

export const metadata: Metadata = {
  title: "For Colleges & Partners | Teach AI",
  description: "Partner with Teach AI to build industry-ready graduates. We work with engineering colleges as a knowledge and training partner to improve placement outcomes and deliver modern AI education.",
  keywords: "college partnership, AI education, placement support, engineering colleges, industry training, curriculum partner",
};

export default function CollegesPartnersPage() {
  return (
    <>
      <GlobalBackground />
      <RevealOnScroll><PartnerHero /></RevealOnScroll>
      <RevealOnScroll><PartnershipBenefits /></RevealOnScroll>
      <RevealOnScroll><PartnershipModel /></RevealOnScroll>
      <RevealOnScroll><CurriculumDelivery /></RevealOnScroll>
      <RevealOnScroll><PlacementsNetwork /></RevealOnScroll>
      <RevealOnScroll><ImplementationTimeline /></RevealOnScroll>
      <RevealOnScroll><PartnersCTA /></RevealOnScroll>
    </>
  );
}
