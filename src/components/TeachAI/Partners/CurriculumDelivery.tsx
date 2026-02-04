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
    icon: "🎥",
    title: "Live instructor-led sessions",
    description: "Interactive classes with industry experts"
  },
  {
    icon: "💻",
    title: "Hands-on labs",
    description: "Practical coding exercises and experiments"
  },
  {
    icon: "👨‍🏫",
    title: "Mentorship & reviews",
    description: "One-on-one guidance and code reviews"
  },
  {
    icon: "🏆",
    title: "Capstone projects",
    description: "End-to-end AI system development"
  }
];

const CurriculumDelivery = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle
          title="Curriculum & Delivery"
          paragraph="Designed for Industry, Delivered for Students"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-white dark:bg-[#0b0c1e]">
        {/* Curriculum Content */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Our Curriculum Includes
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {curriculumContent.map((item, index) => (
              <ThreeDCard key={index} className="w-full min-h-[220px] rounded-xl bg-[#0b0c1e] p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
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
                <ThreeDCard key={index} className="w-full min-h-[120px] rounded-xl bg-[#0b0c1e] p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
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
