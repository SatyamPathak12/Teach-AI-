import SectionTitle from "../Common/SectionTitle";
import ThreeDCard from "./ThreeDCard";
import CursorBorderSection from "./CursorBorderSection";

const Problem = () => {
  return (
    <section id="problem" className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <SectionTitle
          title="Engineering Education Is Broken"
          paragraph="Most engineering students graduate without knowing how AI is actually used in industry."
          width="800px"
          center
          mb="80px"
        />

        <CursorBorderSection className="bg-white dark:bg-[#0b0c1e]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <ThreeDCard className="w-full min-h-[300px] rounded-xl bg-[#0b0c1e] p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-2.127 0-4.178.679-5.892 1.83.426 1.764 1.25 3.423 2.375 4.847 2.016 2.553 5.092 4.09 8.517 4.025V6.042Zm0 0c3.425.065 6.501-1.472 8.517-4.025 1.125-1.424 1.949-3.083 2.375-4.847A8.966 8.966 0 0 0 18 3.75c-2.31 0-4.437-.783-6-2.092V6.042Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6.042v12.708" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Learn outdated curricula
            </h3>
            <p className="text-base font-medium leading-relaxed text-gray-400">
              Syllabi often lag years behind current technology, leaving students ill-prepared.
            </p>
          </ThreeDCard>
          
          <ThreeDCard className="w-full min-h-[300px] rounded-xl bg-[#0b0c1e] p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3v16.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Write code that never leaves the classroom
            </h3>
            <p className="text-base font-medium leading-relaxed text-gray-400">
              Assignments are discarded after grading, missing the lifecycle of real software.
            </p>
          </ThreeDCard>
          
          <ThreeDCard className="w-full min-h-[300px] rounded-xl bg-[#0b0c1e] p-8 shadow-md duration-300 hover:shadow-lg border border-white/10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M10 3a1.5 1.5 0 00-1.5 1.5h-3A1.5 1.5 0 004 6v2a1.5 1.5 0 001.5 1.5h13A1.5 1.5 0 0020 8V6a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 0014 3h-4z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M4 10v9a2 2 0 002 2h12a2 2 0 002-2v-9" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Struggle to get placed
            </h3>
            <p className="text-base font-medium leading-relaxed text-gray-400">
              Despite having “AI” on their resume, students lack practical skills.
            </p>
          </ThreeDCard>
        </div>
        </CursorBorderSection>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Colleges want better placements. Students want real skills. Industry wants ready engineers.
          </h3>
          <p className="mt-4 text-xl font-semibold text-primary">
            Teach AI exists to close this gap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
