import SectionTitle from "../../Common/SectionTitle";
import ThreeDCard from "../ThreeDCard";
import CursorBorderSection from "../CursorBorderSection";

const curriculumContent = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Core AI & ML foundations",
    description: "Strong fundamentals in machine learning, deep learning, and AI principles"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Modern AI stacks",
    description: "LLMs, cloud platforms, MLOps, and production-grade AI tools"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Project-based learning",
    description: "Build real applications, not just complete assignments"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Industry case studies",
    description: "Learn from real-world AI implementations and business scenarios"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Continuous assessments",
    description: "Regular evaluations to track progress and ensure mastery"
  }
];

const deliveryFormat = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Camera body */}
        <rect x="4" y="12" width="28" height="24" rx="4" fill="url(#cameraGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Lens */}
        <circle cx="18" cy="24" r="8" fill="#0F172A" stroke="#60A5FA" strokeWidth="2"/>
        <circle cx="18" cy="24" r="4" fill="#0EA5E9"/>
        {/* Record light */}
        <circle cx="28" cy="16" r="2" fill="#EF4444">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        {/* Film reel side */}
        <circle cx="40" cy="18" r="6" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="2"/>
        <circle cx="40" cy="18" r="2" fill="#60A5FA"/>
        <circle cx="40" cy="32" r="6" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="2"/>
        <circle cx="40" cy="32" r="2" fill="#60A5FA"/>
        <defs>
          <linearGradient id="cameraGradient" x1="18" y1="12" x2="18" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334155"/>
            <stop offset="1" stopColor="#1E293B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Live instructor-led sessions",
    description: "Interactive classes with industry experts"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Laptop base */}
        <rect x="4" y="38" width="40" height="4" rx="2" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="1"/>
        {/* Screen frame */}
        <rect x="8" y="10" width="32" height="28" rx="2" fill="url(#laptopGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Screen */}
        <rect x="12" y="14" width="24" height="18" rx="1" fill="#0F172A"/>
        {/* Code lines on screen */}
        <rect x="14" y="17" width="12" height="2" rx="1" fill="#0EA5E9"/>
        <rect x="14" y="21" width="18" height="2" rx="1" fill="#60A5FA" opacity="0.7"/>
        <rect x="14" y="25" width="8" height="2" rx="1" fill="#0EA5E9"/>
        <rect x="24" y="25" width="6" height="2" rx="1" fill="#34D399"/>
        {/* Keyboard touchpad */}
        <rect x="20" y="34" width="8" height="2" rx="1" fill="#475569"/>
        <defs>
          <linearGradient id="laptopGradient" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334155"/>
            <stop offset="1" stopColor="#1E293B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Hands-on labs",
    description: "Practical coding exercises and experiments"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Mentor head */}
        <circle cx="18" cy="14" r="8" fill="url(#mentorGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Mentor body */}
        <path d="M6 42C6 34 11 28 18 28C25 28 30 34 30 42" fill="url(#mentorBodyGradient)" stroke="#60A5FA" strokeWidth="2"/>
        {/* Student head (smaller) */}
        <circle cx="36" cy="20" r="5" fill="url(#studentGradient)" stroke="#60A5FA" strokeWidth="1.5"/>
        {/* Student body */}
        <path d="M28 42C28 36 31 32 36 32C41 32 44 36 44 42" fill="url(#studentBodyGradient)" stroke="#60A5FA" strokeWidth="1.5"/>
        {/* Speech/teaching indicator */}
        <path d="M26 10L30 8L30 12L26 10Z" fill="#0EA5E9"/>
        <rect x="30" y="6" width="8" height="8" rx="2" fill="#0F172A" stroke="#0EA5E9" strokeWidth="1"/>
        <rect x="32" y="9" width="4" height="1" rx="0.5" fill="#0EA5E9"/>
        <rect x="32" y="11" width="3" height="1" rx="0.5" fill="#0EA5E9"/>
        <defs>
          <linearGradient id="mentorGradient" x1="18" y1="6" x2="18" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B"/>
            <stop offset="1" stopColor="#D97706"/>
          </linearGradient>
          <linearGradient id="mentorBodyGradient" x1="18" y1="28" x2="18" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6"/>
            <stop offset="1" stopColor="#1D4ED8"/>
          </linearGradient>
          <linearGradient id="studentGradient" x1="36" y1="15" x2="36" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA"/>
            <stop offset="1" stopColor="#7C3AED"/>
          </linearGradient>
          <linearGradient id="studentBodyGradient" x1="36" y1="32" x2="36" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981"/>
            <stop offset="1" stopColor="#059669"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Mentorship & reviews",
    description: "One-on-one guidance and code reviews"
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Trophy cup */}
        <path d="M14 8H34V18C34 26 30 32 24 32C18 32 14 26 14 18V8Z" fill="url(#trophyGradient)" stroke="#F59E0B" strokeWidth="2"/>
        {/* Trophy handles */}
        <path d="M14 12H8C8 12 6 12 6 16C6 20 10 22 14 20" stroke="#F59E0B" strokeWidth="2" fill="none"/>
        <path d="M34 12H40C40 12 42 12 42 16C42 20 38 22 34 20" stroke="#F59E0B" strokeWidth="2" fill="none"/>
        {/* Trophy base */}
        <rect x="18" y="32" width="12" height="4" fill="#F59E0B"/>
        <rect x="16" y="36" width="16" height="4" rx="1" fill="#D97706" stroke="#F59E0B" strokeWidth="1"/>
        <rect x="14" y="40" width="20" height="4" rx="1" fill="#B45309" stroke="#F59E0B" strokeWidth="1"/>
        {/* Star on trophy */}
        <path d="M24 12L25.5 17H30L26.5 20L28 25L24 22L20 25L21.5 20L18 17H22.5L24 12Z" fill="#FDE047"/>
        {/* Shine effect */}
        <path d="M17 10L18 14" stroke="#FDE047" strokeWidth="1" opacity="0.6"/>
        <defs>
          <linearGradient id="trophyGradient" x1="24" y1="8" x2="24" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCD34D"/>
            <stop offset="1" stopColor="#F59E0B"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Capstone projects",
    description: "End-to-end AI system development"
  }
];

const CurriculumDelivery = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28 bg-transparent">
      <div className="container">
        <SectionTitle
          title="Curriculum & Delivery"
          paragraph="Designed for Industry, Delivered for Students"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-transparent">
        {/* Curriculum Content */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Our Curriculum Includes
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curriculumContent.map((item, index) => (
              <ThreeDCard key={index} className="w-full min-h-[220px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/10 p-3 text-primary">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </ThreeDCard>
            ))}
          </div>
        </div>

        {/* Delivery Format */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Delivery Format
          </h3>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {deliveryFormat.map((item, index) => (
                <ThreeDCard key={index} className="w-full min-h-[120px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-4xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium leading-relaxed text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
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

export default CurriculumDelivery;
