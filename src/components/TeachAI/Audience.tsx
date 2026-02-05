import SectionTitle from "../Common/SectionTitle";
import ThreeDCard from "./ThreeDCard";
import CursorBorderSection from "./CursorBorderSection";

const Audience = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Built for Forward-Thinking Colleges"
          paragraph="Who this is for"
          width="800px"
          center
          mb="80px"
        />

        <CursorBorderSection className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 bg-transparent">
          <ThreeDCard className="w-full min-h-[300px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Engineering Colleges
            </h3>
            <ul className="space-y-3 text-base font-medium leading-relaxed text-gray-400">
              <li>• Improve placement outcomes</li>
              <li>• Upgrade AI curriculum</li>
              <li>• Attract better admissions</li>
              <li>• Build industry credibility</li>
            </ul>
          </ThreeDCard>
          
          <ThreeDCard className="w-full min-h-[300px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Students
            </h3>
            <ul className="space-y-3 text-base font-medium leading-relaxed text-gray-400">
              <li>• Learn AI the way companies use it</li>
              <li>• Build real projects</li>
              <li>• Become job-ready engineers</li>
            </ul>
          </ThreeDCard>
          
          <ThreeDCard className="w-full min-h-[300px] rounded-xl bg-[#12142a]/70 backdrop-blur-sm p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.675.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.675-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Recruiters
            </h3>
            <ul className="space-y-3 text-base font-medium leading-relaxed text-gray-400">
              <li>• Hire engineers who can deliver from day one</li>
            </ul>
          </ThreeDCard>
        </CursorBorderSection>
      </div>
    </section>
  );
};

export default Audience;
