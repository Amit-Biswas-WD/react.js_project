const AllService = ({
  heading,
  image,
  icon1,
  icon2,
  icon3,
  icon4,
  title1,
  title2,
  title3,
  title4,
  p1,
  p2,
  p3,
  p4,
}) => {
  return (
    // <section className="max-w-7xl container mx-auto">
    //   <div className="text-center mb-6">
    //     <h2 className="poppins-bold text-5xl text-[#252525]">{heading}</h2>
    //   </div>

    //   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
    //     <div className="col-span-1">
    //       <div className="w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg mb-6">
    //       <img className="w-[37px] h-[41px]" src={icon1} alt="" />
    //       <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title1}</h2>
    //       <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p1}</p>
    //     </div>
    //     <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg">
    //       <img className="w-[37px] h-[41px]" src={icon2} alt="" />
    //       <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title2}</h2>
    //       <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p2}</p>
    //     </div>
    //     </div>
    //     <div className="my-auto col-span-1">
    //       <img className="lg:w-[384px] lg:h-[447px] md:w-[120px] md:h-[400px] sm:w-[300px] sm:h-[400px] bg-cover object-cover my-auto lg:block md:block hidden sm:block" src={image} alt="" />
    //     </div>
    //     <div>
    //       <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg mb-6">
    //       <img className="w-[37px] h-[41px]" src={icon3} alt="" />
    //       <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title3}</h2>
    //       <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p3}</p>
    //     </div>
    //     <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg">
    //       <img className="w-[37px] h-[41px]" src={icon4} alt="" />
    //       <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title4}</h2>
    //       <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p4}</p>
    //     </div>
    //     </div>
    //   </div>
    // </section>

    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-6">
        <h2 className="poppins-bold text-3xl sm:text-4xl lg:text-5xl text-[#252525]">
          {heading}
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="space-y-4">
          <div className="bg-[#F3F3F3] px-6 py-8 rounded-lg w-full max-w-[384px] mx-auto">
            <img className="w-9 h-10" src={icon1} alt="" />
            <h2 className="poppins-bold text-xl sm:text-2xl text-[#5C5C5C] py-3">
              {title1}
            </h2>
            <p className="text-sm sm:text-base plus-jakarta-sans-regular text-[#787878]">
              {p1}
            </p>
          </div>
          <div className="bg-[#F3F3F3] px-6 py-8 rounded-lg w-full max-w-[384px] mx-auto">
            <img className="w-9 h-10" src={icon2} alt="" />
            <h2 className="poppins-bold text-xl sm:text-2xl text-[#5C5C5C] py-3">
              {title2}
            </h2>
            <p className="text-sm sm:text-base plus-jakarta-sans-regular text-[#787878]">
              {p2}
            </p>
          </div>
        </div>

        <div className="my-auto mx-auto">
          <img
            className="bg-cover object-cover rounded-lg w-[250px] sm:w-[300px] md:w-[350px] lg:w-[384px] h-[300px] sm:h-[350px] md:h-full lg:h-[407px]"
            src={image}
            alt=""
          />
        </div>

        <div className="space-y-4">
          <div className="bg-[#F3F3F3] px-6 py-8 rounded-lg w-full max-w-[384px] mx-auto">
            <img className="w-9 h-10" src={icon3} alt="" />
            <h2 className="poppins-bold text-xl sm:text-2xl text-[#5C5C5C] py-3">
              {title3}
            </h2>
            <p className="text-sm sm:text-base plus-jakarta-sans-regular text-[#787878]">
              {p3}
            </p>
          </div>
          <div className="bg-[#F3F3F3] px-6 py-8 rounded-lg w-full max-w-[384px] mx-auto">
            <img className="w-9 h-10" src={icon4} alt="" />
            <h2 className="poppins-bold text-xl sm:text-2xl text-[#5C5C5C] py-3">
              {title4}
            </h2>
            <p className="text-sm sm:text-base plus-jakarta-sans-regular text-[#787878]">
              {p4}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllService;
