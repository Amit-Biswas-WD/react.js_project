import SectionTitle from "../../../../../components/sectionTitle/SectionTitle";

const ServizioPremium = () => {
  return (
    <div className="container max-w-7xl mx-auto my-20">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-4/7">
          <SectionTitle title="Servizio Premium" />

          <h1 className="text-3xl md:text-4xl text-[#252525] font-semibold leading-snug">
            Piattaforma di e-learning personalizzata
          </h1>
          <p className="text-lg md:text-xl text-[#6B6B6B] font-medium my-5">
            Sviluppiamo piattaforme LMS personalizzate per enti di formazione
            accreditati, pienamente conformi al D.Lgs. 81/08, WCAG 2.1 AA e
            GDPR.
          </p>
          <img
            src="img/Premium/b2f.png"
            alt="fad"
            className="my-6 mx-auto md:mx-10"
          />
          <h3 className="text-base md:text-lg text-black font-semibold">
            SEVESO Courses
          </h3>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-3/7 flex justify-center lg:justify-end">
          <img
            src="img/Premium/wrpg.png"
            alt="Servizio Premium Illustration"
            className="w-full h-auto lg:max-w-[510px] lg:max-h-[453px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ServizioPremium;
