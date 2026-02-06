"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../../Common/SectionTitle";
import CursorBorderSection from "../CursorBorderSection";

const teachAIProvides = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Book */}
        <path d="M8 8H24V40H8C6 40 4 38 4 36V12C4 10 6 8 8 8Z" fill="url(#bookGradient1)" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M24 8H40C42 8 44 10 44 12V36C44 38 42 40 40 40H24V8Z" fill="url(#bookGradient2)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Book spine */}
        <line x1="24" y1="8" x2="24" y2="40" stroke="#60A5FA" strokeWidth="2"/>
        {/* Page lines */}
        <line x1="10" y1="16" x2="20" y2="16" stroke="#60A5FA" strokeWidth="1" opacity="0.6"/>
        <line x1="10" y1="22" x2="18" y2="22" stroke="#60A5FA" strokeWidth="1" opacity="0.6"/>
        <line x1="10" y1="28" x2="20" y2="28" stroke="#60A5FA" strokeWidth="1" opacity="0.6"/>
        <line x1="28" y1="16" x2="38" y2="16" stroke="#60A5FA" strokeWidth="1" opacity="0.6"/>
        <line x1="28" y1="22" x2="36" y2="22" stroke="#60A5FA" strokeWidth="1" opacity="0.6"/>
        <line x1="28" y1="28" x2="38" y2="28" stroke="#60A5FA" strokeWidth="1" opacity="0.6"/>
        <defs>
          <linearGradient id="bookGradient1" x1="14" y1="8" x2="14" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6"/>
            <stop offset="1" stopColor="#1D4ED8"/>
          </linearGradient>
          <linearGradient id="bookGradient2" x1="34" y1="8" x2="34" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB"/>
            <stop offset="1" stopColor="#1E40AF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "AI curriculum designer"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Graduation cap top */}
        <path d="M24 6L4 16L24 26L44 16L24 6Z" fill="url(#capGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Cap button */}
        <circle cx="24" cy="16" r="3" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1"/>
        {/* Tassel */}
        <path d="M24 16V28" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M24 28C24 28 20 32 20 36C20 38 22 40 24 40" stroke="#F59E0B" strokeWidth="2"/>
        <circle cx="24" cy="40" r="2" fill="#FCD34D"/>
        {/* Board sides */}
        <path d="M12 20V32C12 32 18 38 24 38C30 38 36 32 36 32V20" stroke="#60A5FA" strokeWidth="2" fill="none"/>
        <defs>
          <linearGradient id="capGradient" x1="24" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A5F"/>
            <stop offset="1" stopColor="#0F172A"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Training & delivery partner"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket body */}
        <path d="M24 4C24 4 18 10 18 22V28L14 34L18 38V42L24 48L30 42V38L34 34L30 28V22C30 10 24 4 24 4Z" fill="url(#rocketGrad)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Window */}
        <circle cx="24" cy="18" r="4" fill="#0F172A" stroke="#60A5FA" strokeWidth="2"/>
        <circle cx="24" cy="18" r="2" fill="#0EA5E9"/>
        {/* Flames */}
        <path d="M21 42L24 52L27 42" fill="url(#flameGrad)"/>
        {/* Left fin */}
        <path d="M18 28L12 34L14 38L18 34V28Z" fill="#EF4444" stroke="#60A5FA" strokeWidth="1"/>
        {/* Right fin */}
        <path d="M30 28L36 34L34 38L30 34V28Z" fill="#EF4444" stroke="#60A5FA" strokeWidth="1"/>
        <defs>
          <linearGradient id="rocketGrad" x1="24" y1="4" x2="24" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0E7FF"/>
            <stop offset="1" stopColor="#A5B4FC"/>
          </linearGradient>
          <linearGradient id="flameGrad" x1="24" y1="42" x2="24" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316"/>
            <stop offset="1" stopColor="#EF4444"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Industry project facilitator"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Briefcase body */}
        <rect x="4" y="16" width="40" height="26" rx="4" fill="url(#briefcaseGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Handle */}
        <path d="M16 16V12C16 10 18 8 20 8H28C30 8 32 10 32 12V16" stroke="#60A5FA" strokeWidth="2" fill="none"/>
        {/* Center clasp */}
        <rect x="20" y="24" width="8" height="6" rx="1" fill="#0EA5E9" stroke="#60A5FA" strokeWidth="1"/>
        {/* Belt */}
        <line x1="4" y1="30" x2="20" y2="30" stroke="#60A5FA" strokeWidth="2"/>
        <line x1="28" y1="30" x2="44" y2="30" stroke="#60A5FA" strokeWidth="2"/>
        <defs>
          <linearGradient id="briefcaseGradient" x1="24" y1="16" x2="24" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#78350F"/>
            <stop offset="1" stopColor="#451A03"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Placement enabler"
  }
];

const collegesRetain = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Medal ribbon */}
        <path d="M18 28L12 44L18 40L24 44V28" fill="#3B82F6"/>
        <path d="M30 28L36 44L30 40L24 44V28" fill="#1D4ED8"/>
        {/* Medal circle */}
        <circle cx="24" cy="20" r="14" fill="url(#medalGradient)" stroke="#F59E0B" strokeWidth="2"/>
        {/* Star */}
        <path d="M24 10L26 16H32L27 20L29 26L24 22L19 26L21 20L16 16H22L24 10Z" fill="#FDE047"/>
        <defs>
          <linearGradient id="medalGradient" x1="24" y1="6" x2="24" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD34D"/>
            <stop offset="1" stopColor="#F59E0B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Degree ownership"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Scale base */}
        <rect x="20" y="38" width="8" height="4" fill="#60A5FA"/>
        <rect x="16" y="42" width="16" height="2" rx="1" fill="#3B82F6"/>
        {/* Central pillar */}
        <rect x="22" y="12" width="4" height="26" fill="url(#scaleGradient)"/>
        {/* Balance beam */}
        <rect x="4" y="10" width="40" height="4" rx="2" fill="#60A5FA"/>
        {/* Left pan */}
        <path d="M8 14V20" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M4 20C4 20 4 24 12 24C20 24 20 20 20 20H4Z" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="1"/>
        {/* Right pan */}
        <path d="M40 14V20" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M28 20C28 20 28 24 36 24C44 24 44 20 44 20H28Z" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="1"/>
        {/* Top ornament */}
        <circle cx="24" cy="8" r="4" fill="#0EA5E9" stroke="#60A5FA" strokeWidth="1"/>
        <defs>
          <linearGradient id="scaleGradient" x1="24" y1="12" x2="24" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#3B82F6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    text: "Academic control"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Handshake */}
        <path d="M8 24C8 24 12 20 18 20C20 20 22 22 24 22C26 22 28 20 30 20C36 20 40 24 40 24" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
        {/* Left hand */}
        <path d="M4 28L8 24L12 28L8 32L4 28Z" fill="url(#hand1Gradient)" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M4 28L18 28V32H4V28Z" fill="url(#hand1Gradient)" stroke="#60A5FA" strokeWidth="1"/>
        {/* Right hand */}
        <path d="M44 28L40 24L36 28L40 32L44 28Z" fill="url(#hand2Gradient)" stroke="#60A5FA" strokeWidth="2"/>
        <path d="M44 28H30V32H44V28Z" fill="url(#hand2Gradient)" stroke="#60A5FA" strokeWidth="1"/>
        {/* Heart above handshake */}
        <path d="M24 12C24 12 20 8 16 10C12 12 14 18 24 22C34 18 36 12 32 10C28 8 24 12 24 12Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1"/>
        <defs>
          <linearGradient id="hand1Gradient" x1="11" y1="24" x2="11" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B"/>
            <stop offset="1" stopColor="#D97706"/>
          </linearGradient>
          <linearGradient id="hand2Gradient" x1="37" y1="24" x2="37" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B"/>
            <stop offset="1" stopColor="#D97706"/>
          </linearGradient>
        </defs>
      </svg>
    ),
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
    <div className="relative h-[220px] overflow-hidden">
      {/* Bottom card - slides up and disappears */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out ${
          isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
          <div 
            className="group flex items-center gap-4 rounded-2xl bg-transparent p-4 h-[100px] transition-all duration-300 hover:bg-[#12142a]/70 hover:backdrop-blur-sm"
          >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
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
          className="group flex items-center gap-4 rounded-2xl bg-transparent p-4 h-[100px] transition-all duration-300 hover:bg-[#0b0c1e] hover:backdrop-blur-sm"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
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
          className="group flex items-center gap-4 rounded-2xl bg-transparent p-4 h-[100px] transition-all duration-300 hover:bg-[#0b0c1e] hover:backdrop-blur-sm"
        >
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
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
    <section className="relative z-20 py-16 md:py-20 lg:py-28 bg-transparent">
      <div className="container">
        <SectionTitle
          title="Partnership Model"
          paragraph="Knowledge Partner, Not Degree Provider"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-transparent">
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
              <span className="bg-transparent px-6 text-sm font-semibold text-primary">
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
