import { Textarea } from "@material-tailwind/react";
import icon from "../../../../../assets/Icon.png";
import icon2 from "../../../../../assets/Icon2.png";
import image from "../../../../../assets/leftColor.png";

const CondividiSection = () => {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 sm:grid-cols-1 gap-16 md:mt-0 sm:mt-40 mb-28 my-20 px-4">
      <div className="col-span-1 sm:mb-8">
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
          <div></div>
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
        <p className="text-[#6B7280] font-normal mb-1">Lascia un commento</p>
        <textarea
          className="w-full h-[100px] px-4 rounded-lg text-black border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
          placeholder="Lascia un commento"
        />

        <button className="text-[#FFFFFF] bg-[#73BFA1] rounded-4xl w-full h-10 my-4">
          Invia
        </button>
      </div>

      <div className="hidden md:block relative sm:mt-10">
        <img
          className="absolute -right-[1px] -top-[70px] max-w-[1000px] max-h-[640px]"
          src={image}
          alt=""
        />
        <div className="absolute w-full h-full max-w-[550px] max-h-[1000px]">
          <div
            className="relative w-full h-full overflow-hidden rounded-2xl shadow-md"
            style={{ paddingTop: "66.66%" }}
          >
            <iframe
              title="Dhaka, Bangladesh Map"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Dhaka,%20Bangladesh&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-2 text-sm text-gray-500">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dhaka,%20Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Open Dhaka, Bangladesh in Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="block md:hidden relative">
        <div className="absolute -right-[1px] -top-[70px]">
          <img
            className="w-[360px] h-[410px] bg-cover object-co"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute w-full h-full max-w-[550px] max-h-[1000px]">
          <div
            className="relative w-full h-full overflow-hidden rounded-2xl shadow-md"
            style={{ paddingTop: "66.66%" }}
          >
            <iframe
              title="Dhaka, Bangladesh Map"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Dhaka,%20Bangladesh&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-2 text-sm text-gray-500">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dhaka,%20Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Open Dhaka, Bangladesh in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CondividiSection;
