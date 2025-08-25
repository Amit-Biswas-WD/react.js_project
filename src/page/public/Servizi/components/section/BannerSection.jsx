import AllBanner from "../../../../../components/allBanner/AllBanner";

const BannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <AllBanner
        image1={"public/img/servizi/banner/img.webp"}
        image2={"public/img/servizi/banner/background.png"}
        title={"Dalla sicurezza al lavoro alla formazione"}
        paragraph={"servizi integrati e una piattaforma e-learning fatta da noi, per te."}
        className={"max-w-[600px]"}
      />
    </section>
  );
};

export default BannerSection;
