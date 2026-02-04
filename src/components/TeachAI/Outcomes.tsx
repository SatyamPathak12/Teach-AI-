import SectionTitle from "../Common/SectionTitle";
import CursorBorderSection from "./CursorBorderSection";

const Outcomes = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-primary/5 dark:bg-primary/10">
      <div className="container">
        <SectionTitle
          title="Education With Accountability"
          paragraph="Outcomes & Placement Guarantee"
          width="800px"
          center
          mb="80px"
        />

        <CursorBorderSection className="mx-auto max-w-[800px] text-center bg-white dark:bg-[#0b0c1e]">
          <p className="mb-8 text-xl font-medium text-black dark:text-white">
            We measure success by outcomes, not attendance.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-primary p-6 shadow-one transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h4 className="mb-3 text-lg font-bold text-white">
                Students graduate with portfolio-ready AI projects
              </h4>
            </div>
            <div className="bg-primary p-6 shadow-one transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h4 className="mb-3 text-lg font-bold text-white">
                Industry-aligned skills & tools
              </h4>
            </div>
            <div className="bg-primary p-6 shadow-one transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h4 className="mb-3 text-lg font-bold text-white">
                Mock interviews and hiring prep
              </h4>
            </div>
            <div className="bg-primary p-6 shadow-one transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
              <h4 className="mb-3 text-lg font-bold text-white">
                Placement support via partner companies
              </h4>
            </div>
          </div>

          <p className="text-lg font-semibold text-primary">
            Our commitment: Students trained under Teach AI are placement-ready,
            and we actively work with colleges to enable placements.
          </p>
        </CursorBorderSection>
      </div>
    </section>
  );
};

export default Outcomes;
