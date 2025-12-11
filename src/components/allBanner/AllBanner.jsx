import image from "../../assets/corsi-sicurezza.webp";
import image2 from "../../assets/gredient.png"

const AllBanner = () => {
  return (
    <section className="max-w-[1200px] h-[565px]">
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-cover bg-center absolute h-80" style={{ backgroundImage: `url(${image2})` }}></div>
        <h2 className="text-5xl text-[#FFFFFF] poppins-semibold max-w-[535px] my-auto py-70">
          Know UnoSicurezza Empowering Learners Worldwide
        </h2>
      </div>
    </section>
  );
};

export default AllBanner;
