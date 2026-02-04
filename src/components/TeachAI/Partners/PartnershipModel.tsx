"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../../Common/SectionTitle";
import CursorBorderSection from "../CursorBorderSection";

const teachAIProvides = [
  {
    icon: "📚",
    text: "AI curriculum designer"
  },
  {
    icon: "🎓",
    text: "Training & delivery partner"
  },
  {
    icon: "🚀",
    text: "Industry project facilitator"
  },
  {
    icon: "💼",
    text: "Placement enabler"
  }
];

const collegesRetain = [
  {
    icon: "🎖️",
    text: "Degree ownership"
  },
  {
    icon: "⚖️",
    text: "Academic control"
  },
  {
    icon: "🤝",
    text: "Student relationships"
  }
];

const ScrollingCards = ({ items }: { items: typeof teachAIProvides }) => {
  const [visibleIndices, setVisibleIndices] = useState([0, 1]);
  const [nextIndex, setNextIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        // Update indices after animation
        setVisibleIndices(prev => {
          const newBottom = prev[1];
          const newTop = (prev[1] + 1) % items.length;
          return [newBottom, newTop];
        });
        setNextIndex(prev => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 1000); // Match animation duration
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);



  const bottomItem = items[visibleIndices[0]];
  const topItem = items[visibleIndices[1]];
  const incomingItem = items[nextIndex];



  return (
    <div className="relative h-[360px] overflow-hidden">
      {/* Bottom card - slides up and disappears */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out ${
          isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
          <div 
            className="group flex items-center gap-6 rounded-2xl border-2 bg-[#0b0c1e] p-6 h-[160px] transition-all duration-200"
          >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-4xl transition-all duration-300 group-hover:scale-110">
            {bottomItem.icon}
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-white leading-relaxed transition-colors duration-300 group-hover:text-primary">
              {bottomItem.text}
            </p>
          </div>
        </div>
      </div>

      {/* Top card - moves down to bottom position */}
      <div
        className={`absolute left-0 right-0 transition-all duration-1000 ease-in-out ${
          isAnimating ? "bottom-0" : "top-0"
        }`}
      >
        <div 
          className="group flex items-center gap-6 rounded-2xl border-2 bg-[#0b0c1e] p-6 h-[160px] transition-all duration-200"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-4xl transition-all duration-300 group-hover:scale-110">
            {topItem.icon}
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-white leading-relaxed transition-colors duration-300 group-hover:text-primary">
              {topItem.text}
            </p>
          </div>
        </div>
      </div>

      {/* Incoming card - slides up from below to top position */}
      <div
        className={`absolute left-0 right-0 transition-all duration-1000 ease-in-out ${
          isAnimating ? "top-0 opacity-100" : "top-full opacity-0"
        }`}
      >
        <div 
          className="group flex items-center gap-6 rounded-2xl border-2 bg-[#0b0c1e] p-6 h-[160px] transition-all duration-200"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-4xl transition-all duration-300 group-hover:scale-110">
            {incomingItem.icon}
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold text-white leading-relaxed transition-colors duration-300 group-hover:text-primary">
              {incomingItem.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnershipModel = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle
          title="Partnership Model"
          paragraph="Knowledge Partner, Not Degree Provider"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-white dark:bg-[#0b0c1e]">
        <div className="mx-auto max-w-6xl space-y-20">
          {/* Teach AI Provides Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left: Heading */}
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-primary mb-4">
                Teach AI acts as
              </h3>
              <p className="text-lg text-body-color dark:text-body-color-dark">
                We provide comprehensive support to enhance your institution's capabilities
              </p>
            </div>

            {/* Right: Scrolling Cards */}
            <div>
              <ScrollingCards items={teachAIProvides} />
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-light dark:bg-bg-color-dark px-6 text-sm font-semibold text-primary">
                Partnership Balance
              </span>
            </div>
          </div>

          {/* Colleges Retain Section */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Left: Heading */}
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold text-primary mb-4">
                Colleges retain
              </h3>
              <p className="text-lg text-body-color dark:text-body-color-dark">
                You maintain full control over your core academic functions
              </p>
            </div>

            {/* Right: Scrolling Cards */}
            <div>
              <ScrollingCards items={collegesRetain} />
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-20 text-center">
          <p className="text-2xl font-bold text-black dark:text-white">
            We don't replace your system.{" "}
            <span className="text-primary">We upgrade it.</span>
          </p>
        </div>
        </CursorBorderSection>
      </div>
    </section>
  );
};

export default PartnershipModel;
