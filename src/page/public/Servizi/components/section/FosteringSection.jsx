import "../../../../../index.css";

const images = [
  {
    id: 1,
    bg_image: "/img/Servizi/cards/img.png",
    cover: "/img/Servizi/cards/sfa.png",
    title: "Safety At Work",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    bg_image: "/img/Servizi/cards/img1.png",
    cover: "/img/Servizi/cards/sfa.png",
    title: "Soft Skills",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    bg_image: "/img/Servizi/cards/img2.png",
    cover: "/img/Servizi/cards/sfa.png",
    title: "CFP Courses",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const FosteringSection = () => {
  return (
    <section className="max-w-[1200px] container mx-auto my-20">
      <h2 className="text-4xl poppins-semibold text-[#252525] mb-6">
        Fostering a playful & engaging learning environment
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative bg-cover bg-center rounded-lg overflow-hidden w-[384px] h-[432px]"
            style={{ backgroundImage: `url(${img.bg_image})` }}
          >
            <div
              className="bg-cover bg-center absolute top-0 left-0 w-full h-full text-white pl-4"
              style={{ backgroundImage: `url(${img.cover})` }}
            >
              <h2 className="text-2xl poppins-bold my-6">Safety At Work</h2>
              <p className="plus-jakarta-sans-regular text-base">{img.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FosteringSection;
