import Banner from "../../../components/home/Banner";
import ExplorePrograms from "../../../components/home/ExplorePrograms";
import UltimeNotizie from "../../../components/home/UltimeNotizie";
import UnoSicurezza from "../../../components/home/UnoSicurezza";

const HomeView = () => {
  return (
    <div className="">
      <div className="w-[1200px] container mx-auto">
        <Banner />
        <ExplorePrograms />
      </div>
      {/* <div className=""> */}
      <div className="w-[1440px] h-[535px] container mx-auto">
        <UnoSicurezza />
      </div>
      <div className="w-[1200px] container mx-auto">
        <UltimeNotizie />
      </div>
    </div>
  );
};

export default HomeView;
