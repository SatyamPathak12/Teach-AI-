import ScrollUp from "@/components/Common/ScrollUp";
import RevealOnScroll from "@/components/Common/RevealOnScroll";
import Hero from "@/components/TeachAI/Hero";
import Problem from "@/components/TeachAI/Problem";
import Solution from "@/components/TeachAI/Solution";
import Process from "@/components/TeachAI/Process";
import Projects from "@/components/TeachAI/Projects";
import Outcomes from "@/components/TeachAI/Outcomes";
import Audience from "@/components/TeachAI/Audience";
import CTA from "@/components/TeachAI/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teach AI - Making Engineering Students Industry-Ready",
  description: "We partner with engineering colleges to train undergraduate students in modern AI technologies.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <RevealOnScroll><Hero /></RevealOnScroll>
      <RevealOnScroll><Problem /></RevealOnScroll>
      <RevealOnScroll><Solution /></RevealOnScroll>
      <RevealOnScroll><Process /></RevealOnScroll>
      <RevealOnScroll><Projects /></RevealOnScroll>
      <RevealOnScroll><Outcomes /></RevealOnScroll>
      <RevealOnScroll><Audience /></RevealOnScroll>
      <RevealOnScroll><CTA /></RevealOnScroll>
    </>
  );
}
