"use client";

import SectionTitle from "../Common/SectionTitle";
import CursorBorderSection from "./CursorBorderSection";
import ThreeDCard from "./ThreeDCard";

const examples = [
  "AI-powered recommendation systems",
  "Computer vision applications",
  "LLM-based chatbots & copilots",
  "Predictive analytics systems",
  "End-to-end AI products deployed on cloud"
];

const standards = [
  "Version control",
  "Model evaluation",
  "Deployment pipelines",
  "Documentation & demos"
];

const Projects = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Real Projects. Real Impact."
          paragraph="What students build"
          width="800px"
          center
          mb="80px"
        />

        <div className="mb-12 text-center text-lg font-medium text-black dark:text-white">
          Students don't just learn AI — they build it.
        </div>

        <CursorBorderSection className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-transparent">
          {/* Examples Column with Staggered Animation */}
          <ThreeDCard className="rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-8 border border-white/10">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">Examples</h3>
            
            <ul className="space-y-4 text-base text-body-color">
              {examples.map((example, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start animate-item"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <svg 
                    className="mr-3 mt-1 flex-shrink-0" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="9" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                    <path 
                      d="M6 10L9 13L14 7" 
                      stroke="#3B82F6" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </ThreeDCard>

          {/* Industry Standards Column with Staggered Animation */}
          <ThreeDCard className="rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-8 border border-white/10">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
              Every project follows industry standards
            </h3>
            <ul className="space-y-4 text-base text-body-color">
              {standards.map((standard, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start animate-item"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <svg 
                    className="mr-3 mt-1 flex-shrink-0" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="9" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                    <path 
                      d="M6 10L9 13L14 7" 
                      stroke="#3B82F6" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </ThreeDCard>
        </CursorBorderSection>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-item) {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;

