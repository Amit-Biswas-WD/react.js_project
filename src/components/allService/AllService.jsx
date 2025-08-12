
const AllService = ({heading, image, icon1, icon2, icon3, icon4, title1, title2, title3, title4, p1, p2, p3, p4}) => {
  return (
    <section className="max-w-7xl container mx-auto">
      <div className="text-center mb-6">
        <h2 className="poppins-bold text-5xl text-[#252525]">{heading}</h2>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        <div className="">
          <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg mb-6">
          <img className="w-[37px] h-[41px]" src={icon1} alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title1}</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p1}</p>
        </div>
        <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg">
          <img className="w-[37px] h-[41px]" src={icon2} alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title2}</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p2}</p>
        </div>
        </div>
        <div className="my-auto">
          <img className="w-[384px] h-[447px] bg-cover object-cover my-auto lg:block md:hidden sm:block" src={image} alt="" />
        </div>
        <div>
          <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg mb-6">
          <img className="w-[37px] h-[41px]" src={icon3} alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title3}</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p3}</p>
        </div>
        <div className="col-span-1 w-[384px] h-[252px] bg-[#F3F3F3] px-8 py-12 rounded-lg">
          <img className="w-[37px] h-[41px]" src={icon4} alt="" />
          <h2 className="poppins-bold text-2xl text-[#5C5C5C] py-3">{title4}</h2>
          <p className="text-base plus-jakarta-sans-regular text-[#787878]">{p4}</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default AllService