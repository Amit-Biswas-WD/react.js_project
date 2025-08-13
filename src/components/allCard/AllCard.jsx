const AllCard = ({ props }) => {
  const { image, category, title, name, paragraph, rating, author } = props;
  return (
    <section className="shadow-[#99999b] max-w-[384px] max-h-[553px] mx-4 my-4">
      <div className="col-span-1 p-4 border-2 rounded-lg border-[#FFFFFF] shadow flex flex-col w-full h-full">
        <div className="Poppins">
          <img
            className="w-[347px] h-[245px] bg-cover rounded-sm mb-8"
            src={image}
            alt="Not Found"
          />
          <p className="text_green font-medium text-base">{category}</p>
          <div className="flex justify-between items-center my-2">
            <h2 className="text-[#505050] Poppins font-semibold text-2xl">
              {title}
            </h2>
            <img className="w-2.5 h-2.5" src={"/img/Icon.png"} alt="" />
          </div>
          <div className="">
            <p className="text-base font-normal plus-jakarta-sans-regular">
              {paragraph}
            </p>
            <p>{rating} </p>
          </div>
        </div>
        <div className="plus-jakarta-sans-regular flex items-center justify-between gap-4 my-3 mt-auto">
          <div className="flex items-center gap-4 my-4">
            <img className="w-[30px] rounded-full" src={author.image} alt="" />
            <div>
              <h2 className="font-normal text-base">{name}</h2>
              <p className="font-normal text-[10px]">{category}</p>
            </div>
          </div>
          <div>
            <h2 className="Poppins font-semibold text-2xl text_green">
              €{author.price}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCard;
