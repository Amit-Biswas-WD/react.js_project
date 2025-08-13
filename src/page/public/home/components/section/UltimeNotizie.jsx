import img1 from "../../../../../assets/UnoSicurezza/Home/notizie/Image1.png";
import img2 from "../../../../../assets/UnoSicurezza/Home/notizie/Image2.png";
import img3 from "../../../../../assets/UnoSicurezza/Home/notizie/Image3.png";

const UltimeNotizieSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <h2 className="text-2xl Poppins font-medium text-[#252525] mb-8">
        Ultime notizie da UnoSicurezza
      </h2>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
        <div className="col-span-1 order-2 md:order-1">
          <div className="flex gap-8 mb-8">
            <div className="">
              <img className="w-[320px] h-[200px] object-cover bg-cover" src={img1} alt="" />
            </div>
            <div className="">
              <p className="text_green Poppins font-semibold text-[12px]">
                November 16, 2015
              </p>
              <h2 className="Poppins font-medium text-base my-4">
                Three Pillars of User Delight
              </h2>
              <p className="text-base plus-jakarta-sans-regular">
                Delight can be experienced <br /> viscerally, behaviourally, and
                <br />
                reflectively. A great design is ...
              </p>
              <div className="flex gap-4 mt-4">
                <h2 className="text-[14px] pt-[2px] text-[#C11574] plus-jakarta-sans-regular bg-[#FDF2FA] w-[83px] h-[25px] text-base rounded-[10px] text-center">
                  Research
                </h2>
                <h2 className="text-[14px] pt-[2px] text-[#026AA2] plus-jakarta-sans-regular bg-[#F0F9FF] w-[83px] h-[25px] text-base rounded-[10px] text-center">
                  Soft skills
                </h2>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="col-span-1">
              <img
                className="w-[320px] h-[200px] object-cover bg-cover"
                src={img2}
                alt=""
              />
            </div>
            <div className="">
              <p className="text_green Poppins font-semibold text-[12px]">
                November 16, 2015
              </p>
              <h2 className="Poppins font-medium text-base my-4">
                Three Pillars of User Delight
              </h2>
              <p className="text-base plus-jakarta-sans-regular">
                Delight can be experienced <br /> viscerally, behaviourally, and{" "}
                <br /> reflectively. A great design is ...
              </p>
              <div className="flex gap-4 my-4">
                <h2 className="text-[14px] text-[#C11574] plus-jakarta-sans-regular bg-[#FDF2FA] pt-[3px] py-1 px-2 text-base rounded-[14px] text-center">
                  Research
                </h2>
                <h2 className="text-[14px] text-[#026AA2] plus-jakarta-sans-regular bg-[#F0F9FF] pt-[3px] py-1 px-2 text-base rounded-[14px] text-center">
                  Soft skills
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="mb-8">
            <img className="w-full" src={img3} alt="" />
          </div>
          <div className="">
            <p className="text_green Poppins font-semibold text-[12px]">
              November 16, 2015
            </p>
            <h2 className="Poppins font-semibold text-2xl text-[#252525] my-4">
              Agile Development Projects and Usability
            </h2>
            <p className="text-base plus-jakarta-sans-regular text-[#667085] my-4">
              Agile methods aim to overcome usability barriers in traditional
              development, but post new threats to user experience quality.
            </p>
            <div className="flex gap-4 mt-4">
              <h2 className="text-[14px] text-[#FF9B26] plus-jakarta-sans-regular bg-[#FFF9F3] pt-[3px] py-1 px-2 text-base rounded-[14px] text-center">
                Food safety
              </h2>
              <h2 className="text-[14px] pt-[3px] text-[#3538CD] plus-jakarta-sans-regular bg-[#EEF4FF] py-1 px-2 text-base rounded-[14px] text-center flex items-center">
                CFP courses
              </h2>
              <h2 className="text-[14px] pt-[3px] text-[#C11574] plus-jakarta-sans-regular bg-[#FDF2FA] py-1 px-2 text-base rounded-[14px] text-center">
                Developments
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimeNotizieSection;
