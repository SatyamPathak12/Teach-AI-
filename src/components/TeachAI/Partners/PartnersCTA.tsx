import Link from "next/link";

const PartnersCTA = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-primary py-20 text-center lg:py-[115px]">
      <div className="container">
        <div className="relative overflow-hidden rounded-md bg-white py-12 px-8 dark:bg-dark md:py-20 md:px-[70px]">
          <h2 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
            Build Industry-Ready Graduates with Teach AI
          </h2>
          
          <div className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
            <p className="mb-6 text-lg font-medium text-black dark:text-white">
              Let's collaborate to
            </p>
            <ul className="mb-6 flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-x-8 sm:space-y-0">
              <li className="flex items-center gap-2 font-semibold text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Teach AI the right way
              </li>
              <li className="flex items-center gap-2 font-semibold text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Improve student outcomes
              </li>
              <li className="flex items-center gap-2 font-semibold text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Strengthen your institution's brand
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-primary/90 hover:shadow-[0_20px_40px_rgba(79,70,229,0.4)]"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-black px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-black/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] dark:bg-white/10 dark:hover:bg-white/5"
            >
              Schedule a Call
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-sm text-body-color dark:text-body-color-dark">
            <p>
              Questions? Reach out to our partnerships team at{" "}
              <a href="mailto:partnerships@teachai.com" className="font-semibold text-primary hover:underline">
                partnerships@teachai.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Background SVG */}
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

export default PartnersCTA;
