const AllCard = ({ props }) => {
  const { image, title, paragraph, rating } = props;
  return (
    <section className="shadow-[#99999b] max-w-[384px] max-h-[553px] mx-4 my-4">
      <div className="col-span-1 p-4 border-2 rounded-lg border-[#FFFFFF] shadow flex flex-col w-full h-full">
        <div className="Poppins">
          <div className="">
            <img
              className="w-[384px] h-[225px] bg-cover object-cover rounded-sm mb-8 relative"
              src={image}
              alt="Not Found"
            />
            <p className="bg-white text-[13px] mr-1 mt-1 text-[#667085] rounded-[4px] p-1 absolute top-10 right-10 flex items-center gap-1">
              <span>
                <img src="img/22.png" alt="" />
              </span>
              08 hr 12 mins
            </p>
          </div>
          <h2 className="text-[#505050] Poppins font-medium text-lg my-2">
            {title}
          </h2>
          <p className="text-[14px] text-[#646464] font-normal">
            {paragraph.split(" ").length > 34
              ? paragraph.split(" ").slice(0, 34).join(" ") + " ...."
              : paragraph}
          </p>

          <div className="flex items-center justify-between gap-[12px]">
            <div className="flex items-center gap-[12px] mt-4">
              <p className="text-sm font-medium text-gray-700">{rating}</p>
              <div className="flex items-center gap-[2px]">
                <img src="img/Star 4.png" alt="star" className="w-[15px] h-4" />
                <img src="img/Star 4.png" alt="star" className="w-[15px] h-4" />
                <img src="img/Star 4.png" alt="star" className="w-[15px] h-4" />
                <img src="img/Star 4.png" alt="star" className="w-[15px] h-4" />
                <img src="img/Star 4.png" alt="star" className="w-[15px] h-4" />
              </div>
              <p className="text-[#969696] font-normal text-[13px]">(16,325)</p>
            </div>
            <div className="flex items-center gap-[12px] mt-4">
              <p className="text-sm text-[#6B6B6B] font-normal">60,00€</p>
              <h2 className="text-[#3FC89E] text-xl font-semibold">50,00 €</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 my-3 mt-7">
          <button className="text-[#FFFFFF] bg-[#73BFA1] rounded-4xl px-[48px] py-[12px]">
            Iscriviti Ora
          </button>
          <button className="text-[#6B6B6B] border border-[#6B6B6B] rounded-4xl px-[44px] py-[12px]">
            Dettagli
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllCard;
