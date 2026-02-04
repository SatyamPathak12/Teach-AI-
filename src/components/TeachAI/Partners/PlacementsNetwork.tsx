import SectionTitle from "../../Common/SectionTitle";
import ThreeDCard from "../ThreeDCard";
import CursorBorderSection from "../CursorBorderSection";
import Image from "next/image";


const partnerTypes = [
  {
    icon: "/images/teach-ai/icons/startup-rocket.png",
    title: "Startups",
    description: "Fast-growing tech startups looking for AI talent"
  },
  {
    icon: "/images/teach-ai/icons/tech-company.png",
    title: "Tech Companies",
    description: "Established technology firms with AI initiatives"
  },
  {
    icon: "/images/teach-ai/icons/ai-robot.png",
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
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 -z-10" />
      
      <div className="container">
        <SectionTitle
          title="Placements & Industry Network"
          paragraph="From Classroom to Company"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-gray-light dark:bg-bg-color-dark">
        {/* Partner Types */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            We Work With
          </h3>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {partnerTypes.map((partner, index) => (
                <ThreeDCard key={index} className="w-full min-h-[240px] rounded-2xl bg-[#0b0c1e] p-8 text-center shadow-md duration-300 hover:shadow-lg border border-white/10">
                  <div className="mb-4 relative h-24 w-24 mx-auto">
                    <Image 
                      src={partner.icon} 
                      alt={partner.title} 
                      fill 
                      className="object-contain"
                    />
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
                <ThreeDCard key={index} className="w-full min-h-[180px] rounded-xl bg-[#0b0c1e] p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
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
