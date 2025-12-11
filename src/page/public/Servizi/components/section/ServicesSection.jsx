// const Data = [
//   {
//     id: 1,
//     icon: "/img/Servizi/wedo/icn1.png",
//     title: "Structural smart working",
//     description:
//       "With years of experience in the sales and marketing industry, our team has a deep ",
//   },
//   {
//     id: 2,
//     icon: "/img/Servizi/wedo/icn2.png",
//     title: "Parcel delivery service",
//     description:
//       "We pride ourselves on securing great deals and promotions for our customers.",
//   },
//   {
//     id: 3,
//     icon: "/img/Servizi/wedo/icn3.png",
//     title: "MBO reward system",
//     description:
//       "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
//   },
//   {
//     id: 4,
//     icon: "/img/Servizi/wedo/icn4.png",
//     title: "Corporate welfare",
//     description:
//       "We understand that navigating the solar and cable landscape can be overwhelming.",
//   },
// ];

const ServicesSection = () => {
  return (
    <section className="max-w-[1200px] container mx-auto">
      <div className="text-center mb-6">
        <p className="text_green poppins-medium text-xl mb-1">Our Services</p>
        <h2 className="poppins-bold text-5xl text-[#252525]">What We Do</h2>
      </div>

      <div className="grid grid-cols-3 gap-7">
        <div className="">
          <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg mb-6">
          <img className="w-[37px] h-[41px]" src="/img/Servizi/wedo/icn1.png" alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">Structural smart working</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">With years of experience in the sales and marketing industry, our team has a deep</p>
        </div>
        <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg">
          <img className="w-[37px] h-[41px]" src="/img/Servizi/wedo/icn2.png" alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">Parcel delivery service</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">With years of experience in the sales and marketing industry, our team has a deep</p>
        </div>
        </div>
        <div className="my-auto">
          <img className="w-[384px] h-[447px] bg-cover object-cover my-auto" src="/img/Servizi/wedo/img.png" alt="" />
        </div>
        <div>
          <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg mb-6">
          <img className="w-[37px] h-[41px]" src="/img/Servizi/wedo/icn3.png" alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">MBO reward system</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">With years of experience in the sales and marketing industry, our team has a deep</p>
        </div>
        <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg">
          <img className="w-[37px] h-[41px]" src="/img/Servizi/wedo/icn4.png" alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">Corporate welfare</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">With years of experience in the sales and marketing industry, our team has a deep</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
