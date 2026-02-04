import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 text-center lg:py-[115px]">
      <div className="container">
        <div className="relative overflow-hidden rounded-md bg-white py-12 px-8 dark:bg-dark md:py-20 md:px-[70px]">
          <h2 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Let’s Upgrade Engineering Education Together
          </h2>
          <div className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            <p className="mb-2 text-lg font-medium text-black dark:text-white">
              If you’re an engineering college looking to
            </p>
            <ul className="mb-6 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
              <li className="font-semibold text-primary">Improve placements</li>
              <li className="font-semibold text-primary">Teach modern AI</li>
              <li className="font-semibold text-primary">Produce industry-ready graduates</li>
            </ul>
            <p className="text-xl font-bold text-black dark:text-white">
              Teach AI is your partner.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/partner"
              className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary/80 hover:shadow-lg"
            >
              Partner With Teach AI
            </Link>
            <Link
              href="/demo"
              className="rounded-sm bg-black px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-black/80 hover:shadow-lg dark:bg-white/10 dark:hover:bg-white/5"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background SVG - simplified or reused from other components */}
      <div className="absolute top-0 right-0 -z-10 opacity-30">
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.88928 262.292L364.508 0L249.259 84.145L5.88928 262.292Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="-31.4237" y1="219.043" x2="284.453" y2="-12.1931" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.38" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute top-0 left-0 -z-10 opacity-30">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="125" cy="125" r="125" fill="white" fillOpacity="0.05" />
        </svg>
      </div>
    </section>
  );
};

export default CTA;
