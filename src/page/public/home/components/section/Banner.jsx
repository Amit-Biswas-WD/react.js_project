import StyleButton from "../../../../../components/Button/StyleButton";

const BannerSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 md:gap-20 sm:gap-8 mx-auto my-4 mb-20">
        <div className="my-auto col-span-1 order-2 md:order-1">
          <h2 className="lg:text-[76px] text-6xl md:my-4 sm:mt-6 font-semibold text-[#73BFA1] max-w-[519px]">
            UnoSicurezza
          </h2>
          <p className="font-medium text-xl">
            Ogni nuova competenza è un passo avanti verso il <br /> successo.
          </p>
          <p className="font-normal text-base mt-2 mb-[50px] plus-jakarta-sans-regular max-w-[551px]">
            Essere in regola con la sicurezza significa proteggere il bene più
            prezioso: le persone che contribuiscono al successo della tua
            azienda.
            <br />
            Affidati a noi.
          </p>
          <div className="max-w-[210px]">
            <StyleButton props={"Esplora i nostri servizi"} />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img className="" src={"public/img/servizi/banner/img.png"} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
