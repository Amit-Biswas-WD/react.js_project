import AllBanner from "../../../../components/allBanner/AllBanner";

const BannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20">
      <AllBanner
        image1={"public/img/servizi/banner/img.webp"}
        image2={"public/img/servizi/banner/background.png"}
        title={"Find the Right Training for You or Your Team 5"}
      />
    </section>
  );
};

export default BannerSection;
