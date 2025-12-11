import AllBanner from "../../../../../components/allBanner/AllBanner";

const BannerSection = () => {
  return (
    <section className="max-w-[1200px] container mx-auto">
      <AllBanner
        image1={"public/img/servizi/banner/img.webp"}
        image2={"public/img/servizi/banner/background.png"}
      />
    </section>
  );
};

export default BannerSection;
