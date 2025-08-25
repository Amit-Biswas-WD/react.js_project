const data = [
  {
    title: "Utente privato",
    description: "Accesso individuale ai corsi con certificazione personale",
    array: [
      "Supporto tecnico",
      "Certificazioni individuali",
      "Catalogo completo dei corsi",
    ],
  },
  {
    title: "Azienda",
    description:
      "Soluzioni per la formazione aziendale con report e monitoraggio",
    array: [
      "Pannello di amministrazione",
      "Report avanzati",
      "Accesso multi-utente",
    ],
  },
  {
    title: "Ente di formazione",
    description: "Gestione avanzata per enti accreditati e scuole",
    array: ["Gestione classi", "Tracciamento studenti", "Conformità normativa"],
  },
];

const DellaPiattaforma = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-[#F0FAF7] my-20">
      <div className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <h1 className="text-4xl text-[#131313] font-semibold">
            Livelli utente della piattaforma
          </h1>
          <p className="text-base text-[#3E3E3E] font-normal my-6">
            Soluzioni flessibili per ogni tipo di organizzazione
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 md:mt-6 lg:mt-8">
          {data.map((data) => (
            <div key={data.index} className="col-span-1 border border-white bg-white p-4 shadow rounded-lg">
              <h2 className="text-2xl text-[#5C5C5C] font-bold">
                {data.title}
              </h2>
              <p className="text-base text-[#6B6B6B] font-medium my-5">
                {data.description}
              </p>
              <div className="mt-4 space-y-3">
                {data.array.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img
                      src="img/Servizi/Premium/Vector.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    <p className="text-base text-black font-normal">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DellaPiattaforma;
