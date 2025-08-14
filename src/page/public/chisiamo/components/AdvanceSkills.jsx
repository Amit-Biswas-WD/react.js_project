const AdvanceSkills = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 bg-[#73BFA1] px-6 py-10">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-8">
        <div className="flex sm:flex-row flex-col items-center sm:items-start gap-6 text-center sm:text-left">
          <img
            src="/img/formazione/Vector.png"
            alt=""
            className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
          />
          <div>
            <h2 className="poppins-medium text-[#F1F9F6] text-2xl sm:text-3xl lg:text-4xl mb-3 leading-snug">
              Ready to Advance Your Skills?
            </h2>
            <p className="text-sm sm:text-base plus-jakarta-sans-regular text-[#F1F9F6] max-w-[353px] mx-auto sm:mx-0">
              Your next professional achievement is just a few clicks away.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <button className="bg-[#EAFFF9] hover:bg-[#d6f7ed] text_green py-3 px-6 sm:py-4 sm:px-7 rounded-lg text-sm sm:text-base plus-jakarta-sans-regular shadow-md transition">
            More Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvanceSkills;
