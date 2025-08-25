
const AllBanner = ({ image1, image2, title, paragraph, className }) => {
  return (
    <section className="">
      <div
        className="bg-cover bg-center relative max-w-full h-auto"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div
          className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
        <div className={`relative my-auto text-white max-w-[555px] py-52 pl-10 ${className}`}>
          <h2 className="text-5xl text-[#FFFFFF] font-semibold ">
          {title}
        </h2>
        <p className="text-base text-[#E9E9E9] font-normal mt-4">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default AllBanner;
