import "../../../../../index.css";

const EnrollNow = () => {
  return (
    <section className="border-2 border-[#D4EBE2] rounded-sm p-6">
      <div className="">
        <h2 className="text-[#252525] poppins-medium text-4xl">Price $80</h2>
        <button className="text-[#FFFFFF] bg-[#73BFA1] plus-jakarta-sans-regular text-base rounded-4xl px-[24px] py-[12px] mt-3">
          Enroll Now
        </button>
        <p className="text-base text-[#505050] poppins-medium mt-8">
          No any hidden charge
        </p>
        <h2 className="text-[#252525] text-2xl poppins-medium mt-6">
          What You'll Learn
        </h2>
        <p className="flex items-center gap-3 text-[#505050] text-base plus-jakarta-sans-regular my-2">
          <span>
            <img src="public/img/collabora/Vector.png" alt="" />
          </span>
          Improve the design skill and understanding design theory.
        </p>
        <p className="flex items-center gap-3 text-[#505050] text-base plus-jakarta-sans-regular my-2">
          <span>
            <img src="public/img/collabora/Vector.png" alt="" />
          </span>
          Improve the design skill and understanding design theory.
        </p>
        <h2 className="text-[#252525] text-2xl poppins-medium mt-6">
          Requirements
        </h2>
      </div>
    </section>
  );
};

export default EnrollNow;
