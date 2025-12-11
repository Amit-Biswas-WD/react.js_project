import "../../index.css";

const AllBanner = ({ image1, image2 }) => {
  return (
    <section className="">
      <div
        className="bg-cover bg-center relative max-w-[1200px] h-[565px]"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div
          className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
        <h2 className="relative text-5xl text-[#FFFFFF] poppins-semibold max-w-[545px] my-auto py-52 pl-10">
          Know UnoSicurezza Empowering Learners Worldwide
        </h2>
      </div>
    </section>
  );
};

export default AllBanner;
