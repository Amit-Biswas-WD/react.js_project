import SectionTitle from "../../../../../components/sectionTitle/SectionTitle";

const data = [
  { img: "img/Servizi/Premium/Frame1.png", title: "Farmaceutico" },
  { img: "img/Servizi/Premium/Frame2.png", title: "Industria alimentare" },
  { img: "img/Servizi/Premium/Frame4.png", title: "Ingegneria" },
  { img: "img/Servizi/Premium/Frame6.png", title: "Attività minerarie" },
  { img: "img/Servizi/Premium/Frame7.png", title: "Metallurgia" },
  { img: "img/Servizi/Premium/Frame8.png", title: "Petrolchimico" }
];

const Piani = () => {
  return (
    <div className="container mx-auto max-w-7xl my-20 px-4">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="order-1">
          <img
            src="img/Servizi/Premium/244a6.jpg"
            alt=""
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="order-2">
          <SectionTitle title={"Gestione completa"} />
          <h2 className="text-4xl text-[#131313] font-semibold my-5">
            Piani di formazione per settore industriale
          </h2>
          <p className="text-base text-[#3E3E3E] font-normal my-6">
            Gestiamo piani formativi personalizzati per specifici settori
            industriali, garantendo la conformità normativa e la massima
            efficacia formativa.
          </p>

          <div className="bg-[#EDF8F1] px-7 py-5 rounded-lg space-y-3">
            <h3 className="text-xl text-black font-medium mb-2">
              Esempi di corsi di settore:
            </h3>
            {[
              "Sicurezza della saldatura (Metallurgia)",
              "Rischio di incendio in ambienti chimici (Petrolchimico)",
              "Primo soccorso in ambienti elettrici (Ingegneria)",
              "HACCP e sicurezza alimentare (Industria Alimentare)"
            ].map((item, idx) => (
              <p key={idx} className="flex items-center gap-2 text-[12px] text-black font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-black block"></span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="py-8 px-4 border border-[#EAECF0] rounded-lg shadow flex flex-col items-center"
          >
            <img src={item.img} alt={item.title} className="w-12 h-12 mb-3" />
            <h3 className="text-base text-[#252525] font-medium text-center">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piani;
