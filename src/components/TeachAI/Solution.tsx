import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import CursorBorderSection from "./CursorBorderSection";

const journeySteps = [
  {
    image: "/images/teach-ai/modern-curriculum.png",
    label: "Modern AI curriculum",
    subtitle: "(not textbook theory)"
  },
  {
    image: "/images/teach-ai/project-learning.png",
    label: "Hands-on project-based learning",
    subtitle: "Real-world applications"
  },
  {
    image: "/images/teach-ai/industry-tools.png",
    label: "Industry-grade tools",
    subtitle: "Top tech practices"
  },
  {
    image: "/images/teach-ai/placement-training.png",
    label: "Placement-focused training",
    subtitle: "Land your dream job"
  }
];

const Solution = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Custom Title with Line Breaks */}
        <div className="mx-auto mb-20 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            We Turn Students into<br />
            Industry-Ready<br />
            AI Engineers
          </h2>
          <p className="text-base leading-relaxed text-body-color md:text-lg">
            Teach AI works as a knowledge and training partner for engineering colleges.
          </p>
        </div>

        {/* Horizontal Journey Timeline */}
        <CursorBorderSection className="bg-transparent mb-20">
        <div className="relative p-4">
          <div className="mx-auto max-w-5xl">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-[52px] h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hidden md:block" 
                 style={{ width: 'calc(100% - 120px)', marginLeft: '60px' }} />
            
            {/* Steps */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {journeySteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Image Container */}
                  <div className="relative z-20 mb-4 h-[140px] w-[140px] overflow-hidden rounded-full border-4 border-primary/30 bg-[#0b0c1e] shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 ease-out hover:scale-110 hover:border-primary hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:-translate-y-2">
                    <Image
                      src={step.image}
                      alt={step.label}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Labels */}
                  <h3 className="text-lg font-bold text-black dark:text-white mb-1">
                    {step.label}
                  </h3>
                  <p className="text-sm text-body-color">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </CursorBorderSection>

        <div className="mt-12 text-center text-lg font-medium text-black dark:text-white">
          Every student builds real AI products, not just assignments.
        </div>
      </div>
    </section>
  );
};

export default Solution;
