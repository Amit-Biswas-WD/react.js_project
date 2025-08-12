import AllBanner from "../../../../../components/allBanner/AllBanner";

const BannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <AllBanner
        image1={"public/img/servizi/banner/img.webp"}
        image2={"public/img/servizi/banner/background.png"}
        title={"Know UnoSicurezza Empowering Learners Worldwide"}
      />
    </section>
  );
};

export default BannerSection;
