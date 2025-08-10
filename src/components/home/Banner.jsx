import StyleButton from "../Button/StyleButton";
import image from "../../assets/corsi-sicurezza.webp";

const Banner = () => {
  return (
    <div className="flex gap-20 mx-auto">
      <div className="my-auto">
        <h2 className="text-[76px] font-semibold text-[#73BFA1] ">
          UnoSicurezza
        </h2>
        <p className="font-medium text-xl">
          Ogni nuova competenza è un passo avanti verso il <br /> successo.
        </p>
        <p className="font-normal text-base mt-2 mb-[50px] plus-jakarta-sans-regular max-w-[551px]">
          Essere in regola con la sicurezza significa proteggere il bene più
          prezioso: le persone che contribuiscono al successo della tua azienda.
          <br />
          Affidati a noi.
        </p>
        <div className="max-w-[210px]">
          <StyleButton props={"Esplora i nostri servizi"} />
        </div>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
