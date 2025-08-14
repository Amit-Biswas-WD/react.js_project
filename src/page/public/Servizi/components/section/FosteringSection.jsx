import "../../../../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  {
    id: 4,
    bg_image: "/img/Servizi/cards/img1.png",
    cover: "/img/Servizi/cards/sfa.png",
    title: "Soft Skills",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    bg_image: "/img/Servizi/cards/img2.png",
    cover: "/img/Servizi/cards/sfa.png",
    title: "CFP Courses",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const FosteringSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <h2 className="text-4xl poppins-semibold text-[#252525] mb-6">
        Fostering a playful & engaging learning environment
      </h2>

      <div className="">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          style={{
            "--swiper-pagination-bottom": "20px",
            marginBottom: "32px",
          }}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div
                className="relative bg-cover bg-center rounded-lg overflow-hidden w-full max-w-[384px] aspect-[384/432] mx-auto"
                style={{ backgroundImage: `url(${img.bg_image})` }}
              >
                <div
                  className="bg-cover bg-center absolute top-0 left-0 w-full h-full text-white p-4 sm:p-6"
                  style={{ backgroundImage: `url(${img.cover})` }}
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl poppins-bold mb-4">
                    Safety At Work
                  </h2>
                  <p className="plus-jakarta-sans-regular text-sm sm:text-base leading-relaxed">
                    {img.paragraph}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FosteringSection;
