import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import CursorBorderSection from "./CursorBorderSection";

const roadmapData = [
  {
    id: 1,
    title: "College Partnership",
    desc: "We partner with engineering colleges as their AI knowledge service partner.",
    duration: "Step 1",
    resources: "Partnership Agreement",
    status: "Initiation",
    image: "/images/teach-ai/college-partnership.png",
  },
  {
    id: 2,
    title: "Embedded Curriculum",
    desc: "Our AI curriculum runs alongside the university syllabus — without disrupting degrees.",
    duration: "Semesters 1-8",
    resources: "Integrated Syllabus",
    status: "Ongoing",
    image: "/images/teach-ai/embedded-curriculum.png",
  },
  {
    id: 3,
    title: "Live Training & Mentorship",
    desc: "Students learn from industry practitioners through live sessions, hands-on labs, guided projects, and code reviews.",
    duration: "Weekly Sessions",
    resources: "Industry Experts",
    status: "Active Learning",
    image: "/images/teach-ai/live-training.png",
  },
  {
    id: 4,
    title: "Real-World AI Projects",
    desc: "Students build deployable AI systems used in real scenarios.",
    duration: "Capstone",
    resources: "GitHub & Cloud",
    status: "Development",
    image: "/images/teach-ai/real-projects.png",
  },
  {
    id: 5,
    title: "Placement Readiness & Hiring Support",
    desc: "We prepare and place students through our industry network.",
    duration: "Final Year",
    resources: "Career Portal",
    status: "Hired",
    image: "/images/teach-ai/placement-support.png",
  },
];

const Process = () => {
  return (
    <section className="bg-transparent py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple. Structured. Outcome-Driven."
          paragraph="How the partnership works"
          width="1000px"
          center
          mb="80px"
        />

        <CursorBorderSection className="bg-transparent backdrop-blur-sm mx-auto max-w-4xl relative">
        <div className="relative">
           <div className="absolute left-[26px] top-0 bottom-12 w-[3px] bg-gradient-to-b from-primary via-[#a855f7] to-primary/0" />

          {roadmapData.map((item, index) => (
            <div key={item.id} className="relative z-10 mb-12 pl-32 group">
       
              <div className="absolute left-0 top-0 h-24 w-24 rounded-2xl border-2 border-primary/30 bg-[#0f1124]/80 shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              
              {/* Checkmark Badge - Outside the image container */}
              <div className="absolute left-[82px] top-[-6px] h-5 w-5 rounded-full border-2 border-[#0b0c1e]/80 bg-primary flex items-center justify-center shadow-sm z-20">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
              </div>

   
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl border border-white/10 bg-[#12142a]/70 backdrop-blur-sm p-6 shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-[#161832]/80 group-hover:translate-x-2">
                <div className="mb-4 md:mb-0">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-gray-400 max-w-lg">
                    {item.desc}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                         <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                         {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                          {item.resources}
                      </div>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>
        </CursorBorderSection>
      </div>
    </section>
  );
};

export default Process;
