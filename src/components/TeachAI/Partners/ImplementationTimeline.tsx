import SectionTitle from "../../Common/SectionTitle";
import ThreeDCard from "../ThreeDCard";
import CursorBorderSection from "../CursorBorderSection";

const timelinePhases = [
  {
    phase: "Month 1",
    title: "Onboarding & Setup",
    items: [
      "College onboarding",
      "Curriculum alignment",
      "Student selection"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    phase: "Month 2–6",
    title: "Training & Execution",
    items: [
      "Training & project execution",
      "Continuous evaluation",
      "Progress monitoring"
    ],
    color: "from-blue-500 to-purple-500"
  },
  {
    phase: "Final Phase",
    title: "Placement & Success",
    items: [
      "Capstone projects",
      "Placement preparation",
      "Hiring support"
    ],
    color: "from-purple-500 to-pink-500"
  }
];

const ImplementationTimeline = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle
          title="Implementation Timeline"
          paragraph="From Partnership to First Batch"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-white dark:bg-[#0b0c1e]">
        <div className="relative mx-auto max-w-6xl">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-[80px] hidden h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 md:block" 
               style={{ width: 'calc(100% - 120px)', marginLeft: '60px' }} />

          {/* Timeline Phases */}
          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {timelinePhases.map((phase, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Phase Number Circle */}
                <div className={`relative z-20 mb-6 flex h-[160px] w-[160px] items-center justify-center rounded-full border-4 border-primary/30 bg-gradient-to-br ${phase.color} shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]`}>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-1">
                      {index + 1}
                    </div>
                    <div className="text-sm font-semibold text-white/90">
                      {phase.phase}
                    </div>
                  </div>
                </div>

                {/* Phase Content */}
                <ThreeDCard className="w-full min-h-[200px] rounded-2xl bg-[#0b0c1e] p-6 shadow-md duration-300 hover:shadow-lg border border-white/10">
                <h3 className="mb-4 text-xl font-bold text-white">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-gray-400 font-medium"
                    >
                      <svg className="mt-1 h-4 w-4 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </ThreeDCard>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-body-color dark:text-body-color-dark">
            <span className="font-bold text-black dark:text-white">
              Average timeline: 6-7 months
            </span>{" "}
            from partnership to first placement results
          </p>
        </div>
        </CursorBorderSection>
      </div>
    </section>
  );
};

export default ImplementationTimeline;
