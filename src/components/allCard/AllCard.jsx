const AllCard = ({ props }) => {
  const { image, category, title, name, paragraph, rating, author } =
    props;
  return (
    <section className="shadow-[#99999b]">
      <div className="col-span-1 p-4 border-2 rounded-lg border-[#FFFFFF] shadow flex flex-col h-full">
        <div className="Poppins">
          <img
            className="w-[336px] h-[240px] bg-cover rounded-sm"
            src={image}
            alt="Not Found"
          />
          <p className="text_green my-3 font-medium text-base">{category}</p>
          <div className="flex justify-between items-center">
            <h2 className="text-[#101828] Poppins font-semibold text-2xl">
              {title}
            </h2>
            <img className="w-2.5 h-2.5" src={"/img/Icon.png"} alt="" />
          </div>
          <div className="my-3">
            <p className="text-base font-normal plus-jakarta-sans-regular">
              {paragraph}
            </p>
            <p>{rating} </p>
          </div>
        </div>
        <div className="plus-jakarta-sans-regular flex items-center justify-between gap-4 my-3 mt-auto">
          <div className="flex items-center gap-4">
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
