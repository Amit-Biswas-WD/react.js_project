import AllBanner from "../../../../components/allBanner/AllBanner";

const BannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto mb-20">
      <AllBanner
        image1={"/img/Servizi/banner/img.webp"}
        image2={"/img/Servizi/banner/background.png"}
        title={"Know UnoSicurezza Empowering Learners Worldwide 3"}
      />
    </section>
  );
};

export default BannerSection;
