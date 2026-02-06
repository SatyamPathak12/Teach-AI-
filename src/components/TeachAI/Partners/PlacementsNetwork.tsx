import SectionTitle from "../../Common/SectionTitle";
import ThreeDCard from "../ThreeDCard";
import CursorBorderSection from "../CursorBorderSection";

const partnerTypes = [
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rocket body */}
        <path d="M32 4C32 4 24 12 24 28V36L20 44L24 48V52L32 60L40 52V48L44 44L40 36V28C40 12 32 4 32 4Z" fill="url(#rocketGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Rocket window */}
        <circle cx="32" cy="24" r="6" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="2"/>
        <circle cx="32" cy="24" r="3" fill="#60A5FA"/>
        {/* Flames */}
        <path d="M28 52L32 64L36 52" fill="url(#flameGradient)"/>
        <path d="M30 52L32 58L34 52" fill="#FCD34D"/>
        {/* Left fin */}
        <path d="M24 36L16 44L20 48L24 44V36Z" fill="url(#finGradient)" stroke="#60A5FA" strokeWidth="1"/>
        {/* Right fin */}
        <path d="M40 36L48 44L44 48L40 44V36Z" fill="url(#finGradient)" stroke="#60A5FA" strokeWidth="1"/>
        <defs>
          <linearGradient id="rocketGradient" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0E7FF"/>
            <stop offset="1" stopColor="#A5B4FC"/>
          </linearGradient>
          <linearGradient id="flameGradient" x1="32" y1="52" x2="32" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97316"/>
            <stop offset="1" stopColor="#EF4444"/>
          </linearGradient>
          <linearGradient id="finGradient" x1="20" y1="36" x2="20" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F87171"/>
            <stop offset="1" stopColor="#DC2626"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Startups",
    description: "Fast-growing tech startups looking for AI talent"
  },
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Building base */}
        <rect x="12" y="56" width="40" height="4" fill="#1E3A5F" rx="1"/>
        {/* Main building */}
        <rect x="16" y="16" width="32" height="40" fill="url(#buildingGradient)" stroke="#60A5FA" strokeWidth="2" rx="2"/>
        {/* Windows grid */}
        {[0, 1, 2, 3, 4].map((row) => (
          [0, 1, 2].map((col) => (
            <rect key={`${row}-${col}`} x={20 + col * 10} y={20 + row * 7} width="6" height="5" fill="#0EA5E9" rx="1" opacity="0.9"/>
          ))
        ))}
        {/* Roof */}
        <rect x="24" y="8" width="16" height="8" fill="url(#roofGradient)" stroke="#60A5FA" strokeWidth="2" rx="1"/>
        {/* Antenna */}
        <rect x="31" y="2" width="2" height="6" fill="#60A5FA"/>
        <circle cx="32" cy="2" r="2" fill="#F87171"/>
        <defs>
          <linearGradient id="buildingGradient" x1="32" y1="16" x2="32" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3A5F"/>
            <stop offset="1" stopColor="#0F172A"/>
          </linearGradient>
          <linearGradient id="roofGradient" x1="32" y1="8" x2="32" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334155"/>
            <stop offset="1" stopColor="#1E293B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Tech Companies",
    description: "Established technology firms with AI initiatives"
  },
  {
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Robot head */}
        <rect x="12" y="16" width="40" height="32" rx="8" fill="url(#robotGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Antenna */}
        <rect x="30" y="6" width="4" height="10" fill="#60A5FA"/>
        <circle cx="32" cy="6" r="4" fill="#0EA5E9" stroke="#60A5FA" strokeWidth="2"/>
        {/* Eyes */}
        <rect x="18" y="24" width="12" height="10" rx="3" fill="#0F172A" stroke="#60A5FA" strokeWidth="2"/>
        <rect x="34" y="24" width="12" height="10" rx="3" fill="#0F172A" stroke="#60A5FA" strokeWidth="2"/>
        {/* Glowing pupils */}
        <circle cx="24" cy="29" r="3" fill="#0EA5E9">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="40" cy="29" r="3" fill="#0EA5E9">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
        {/* Mouth/speaker */}
        <rect x="24" y="38" width="16" height="4" rx="2" fill="#0F172A" stroke="#60A5FA" strokeWidth="1"/>
        <line x1="28" y1="38" x2="28" y2="42" stroke="#60A5FA" strokeWidth="1"/>
        <line x1="32" y1="38" x2="32" y2="42" stroke="#60A5FA" strokeWidth="1"/>
        <line x1="36" y1="38" x2="36" y2="42" stroke="#60A5FA" strokeWidth="1"/>
        {/* Ears/side panels */}
        <rect x="6" y="26" width="6" height="12" rx="2" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="1"/>
        <rect x="52" y="26" width="6" height="12" rx="2" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="1"/>
        {/* Neck */}
        <rect x="26" y="48" width="12" height="8" fill="#334155" stroke="#60A5FA" strokeWidth="1"/>
        {/* Neck details */}
        <line x1="26" y1="52" x2="38" y2="52" stroke="#60A5FA" strokeWidth="1"/>
        <defs>
          <linearGradient id="robotGradient" x1="32" y1="16" x2="32" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334155"/>
            <stop offset="1" stopColor="#1E293B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "AI-Driven Enterprises",
    description: "Companies building AI-first products and services"
  }
];

const supportServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Resume & Portfolio Preparation",
    description: "Professional resume building and portfolio showcasing"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    title: "Interview Readiness",
    description: "Mock interviews, technical prep, and soft skills training"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Project Demos for Recruiters",
    description: "Showcase student projects to hiring partners"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Hiring Drives with Partner Companies",
    description: "Direct placement opportunities through our network"
  }
];

const PlacementsNetwork = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      {/* Background - removed gradient for transparency */}
      
      <div className="container">
        <SectionTitle
          title="Placements & Industry Network"
          paragraph="From Classroom to Company"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-transparent">
        {/* Partner Types */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            We Work With
          </h3>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {partnerTypes.map((partner, index) => (
                <ThreeDCard key={index} className="w-full min-h-[240px] rounded-2xl bg-[#12142a]/70 backdrop-blur-sm p-8 text-center shadow-md duration-300 hover:shadow-lg border border-white/10">
                  <div className="mb-4 flex h-24 w-24 mx-auto items-center justify-center">
                    {partner.icon}
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-white">
                    {partner.title}
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-gray-400">
                    {partner.description}
                  </p>
                </ThreeDCard>
              ))}
            </div>
          </div>
        </div>

        {/* Support Services */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Support Includes
          </h3>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {supportServices.map((service, index) => (
                <ThreeDCard key={index} className="w-full min-h-[180px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/10 p-3 text-primary">
                    {service.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">
                    {service.title}
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </ThreeDCard>
              ))}
            </div>
          </div>
        </div>
        </CursorBorderSection>
      </div>
    </section>
  );
};

export default PlacementsNetwork;
