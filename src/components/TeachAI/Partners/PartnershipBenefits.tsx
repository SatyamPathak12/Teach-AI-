import SectionTitle from "../../Common/SectionTitle";
import ThreeDCard from "../ThreeDCard";
import CursorBorderSection from "../CursorBorderSection";

const benefits = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Increase Placement Percentages",
    description: "Our industry-aligned curriculum and placement support directly improve your college's placement statistics and reputation."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Modern AI Education",
    description: "Offer cutting-edge AI and ML training without changing your degree structure or curriculum approval process."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Reduce Faculty Burden",
    description: "We handle AI training delivery, allowing your faculty to focus on core academic responsibilities."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Build Industry Relationships",
    description: "Access our network of tech companies, startups, and AI-driven enterprises for long-term collaboration."
  }
];

const PartnershipBenefits = () => {
  return (
    <section className="relative z-20 py-16 md:py-20 lg:py-28 bg-transparent">
      <div className="container">
        <SectionTitle
          title="Why Colleges Partner with Teach AI"
          paragraph="Because Placements Matter"
          width="800px"
          center
          mb="60px"
        />

        <CursorBorderSection className="bg-transparent">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {benefits.map((benefit, index) => (
            <ThreeDCard key={index} className="w-full min-h-[280px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
              <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-white/10 p-4 text-primary transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {benefit.title}
              </h3>
              <p className="text-base font-medium leading-relaxed text-gray-400">
                {benefit.description}
              </p>
            </ThreeDCard>
          ))}
        </div>

        <div className="mt-16 text-center">
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

export default PartnershipBenefits;
