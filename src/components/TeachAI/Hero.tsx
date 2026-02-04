import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-5xl font-bold leading-tight text-black dark:text-white sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
                Teach <span className="text-primary">AI</span>
              </h1>
              <h2 className="mb-5 text-2xl font-semibold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
                Making Engineering Students Industry-Ready with Real-World AI
              </h2>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                We partner with engineering colleges to train undergraduate
                students in modern AI technologies, core computer science, and
                real industry projects ensuring they graduate job-ready not
                just degree-ready.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  We don't offer degrees.
                </div>
                <div className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  We upgrade education outcomes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
