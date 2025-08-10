import { Textarea } from "@material-tailwind/react";
import icon from "../../../../../assets/Icon.png";
import icon2 from "../../../../../assets/Icon2.png";
import image from "../../../../../assets/leftColor.png";
import map from "../../../../../assets/map.png";

const CondividiSection = () => {
  return (
    <section className="w-[1200px] container mx-auto my-20 grid grid-cols-2 mt-40 mb-20 gap-16">
      <div className="col-span-1">
        <h2 className="Poppins font-semibold text-4xl text-[#252525] mb-3">
          Condividi la tua recensione con noi
        </h2>
        <p className="text-[14px] plus-jakarta-sans-regular">
          Compila il modulo per condividere la tua esperienza. La tua recensione
          sarà visibile dopo l’approvazione.
        </p>
        <div>
          <div className="my-4">
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-sm border border-slate-200 rounded-md px-3 py-2 transform duration-300 esse focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Name*"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full bg-transparent placeholder:text-slate-400 text-sm border border-slate-200 rounded-md px-3 py-2 transform duration-300 esse focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="E-mail"
            />
          </div>
        </div>
        <h2 className="poppins-semibold text-2xl text-[#1F2937] mt-5">
          Feedback sulla sessione
        </h2>
        <p className="text-sm poppins-regular text-[#4B5563]">
          Valuta la tua esperienza qui sotto
        </p>
        <div className="flex items-center gap-5 my-4 mb-6">
          <div className="flex items-center gap-3">
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon} alt="" />
            <img src={icon2} alt="" />
          </div>
          <p className="text-[#6B7280]">4/5 stars</p>
        </div>
        <p className="text-[#6B7280] font-normal mb-1">Additional feedback</p>
        <Textarea
          className="rounded-lg text-black h-24"
          placeholder="My feedback!!"
        />
        <button className="text-[#FFFFFF] bg-[#73BFA1] rounded-4xl w-full h-10 my-4">
          Submit
        </button>
      </div>
      <div className="relative">
        <img className="absolute -right-[120px] -top-[88px]" src={image} alt="" />
        <img className="absolute" src={map} alt="" />
      </div>
    </section>
  );
};

export default CondividiSection;
