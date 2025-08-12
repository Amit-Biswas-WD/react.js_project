const AdministrationSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 bg-[#73BFA1] flex justify-between items-center">
      <div className="flex items-center gap-10">
        <img src="/img/formazione/Vector.png" alt="" />
        <h2 className="text-xl poppins-medium text-white max-w-[540px]">
          "You can find our full range of products and online courses on
          UnoSicurezza, the official portal of the Italian Public
          Administration."
        </h2>
      </div>
      <div className="mx-auto">
        <button className="bg-[#EAFFF9] text_green py-4 px-7 rounded-lg text-base plus-jakarta-sans-regular">
          More Information
        </button>
      </div>
    </section>
  );
};

export default AdministrationSection;
