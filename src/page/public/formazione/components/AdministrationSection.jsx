const AdministrationSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 bg-[#73BFA1]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left max-w-3xl">
          <img
            src="/img/formazione/Vector.png"
            alt="Formazione Icon"
            className="w-24 sm:w-28 md:w-32 lg:w-full h-auto"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl poppins-medium text-white leading-relaxed">
            "You can find our full range of products and online courses on
            UnoSicurezza, the official portal of the Italian Public
            Administration."
          </h2>
        </div>

        <button className=" bg-[#EAFFF9] text_green py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg plus-jakarta-sans-regular shadow-md mr-16 mt-6 lg:mt-0 mb-10 lg:mb-0">
          More Information
        </button>
      </div>
    </section>
  );
};

export default AdministrationSection;
