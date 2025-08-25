import "../../../../../index.css";
import img1 from "../../../../../assets/UnoSicurezza/Home/explore/fea2a0b7dc7728c8456ad4b75c7b348c5112ad79.jpg";
import img2 from "../../../../../assets/UnoSicurezza/Home/explore/f372.jpg";
import img3 from "../../../../../assets/UnoSicurezza/Home/explore/6c84.jpg";

import image1 from "../../../../../assets/UnoSicurezza/Home/explore/author/5412a2bcc1a0b62fe5e42bf0f9af1ac1d77a35ab.png";
import image3 from "../../../../../assets/UnoSicurezza/Home/explore/author/2cc3ba92c0a402567bf37e095262f204b3eb3c99.jpg";
import AllCard from "../../../../../components/allCard/AllCard";
import "../../../../../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Data = [
  {
    id: 1,
    image: img1,
    category: "Soft skills",
    title: "Formazione SEVESO",
    paragraph:
      " corso Seveso III si riferisce alla direttiva UE 2012/18/UE sulla prevenzione degli incidenti rilevanti che comportano sostanze pericolose, comunemente nota come Direttiva Seveso III ",
    rating: 4.5,
    author: {
      image: image1,
      name: "Jane Cooper",
      price: 17.84,
      category: "Instructor",
    },
  },
  {
    id: 2,
    image: img2,
    category: "Safety at work",
    title: "Formazione per i datori...",
    paragraph:
      "Accordo, ai sensi dell’articolo 37, comma 2, del decreto legislativo 9 aprile 2008, n. 81, tra il Governo, le regioni e le Province autonome di Trento e di Bolzano, finalizzato alla individuazione della durata e dei contenuti minimi dei percorsi formativi in materia di salute e sicurezza, di cui al medesimo decreto legislativo n. 81 del 2008.",
    rating: 4.3,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 12.84,
      category: "Instructor",
    },
  },
  {
    id: 3,
    image: img3,
    category: "CFP courses",
    title: "Formazione GENERALE",
    paragraph:
      "Accordo, ai sensi dell’articolo 37, comma 2, del decreto legislativo 9 aprile 2008, n. 81, tra il Governo, le regioni e le Province autonome di Trento e di Bolzano, finalizzato alla individuazione della durata e dei contenuti minimi dei percorsi formativi in materia di salute e sicurezza, di cui al medesimo decreto legislativo n. 81 del 2008.",
    rating: 3.5,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 19.84,
      category: "Instructor",
    },
  },
  {
    id: 4,
    image: img3,
    category: "CFP courses",
    title: "Formazione GENERALE",
    paragraph:
      " corso Seveso III si riferisce alla direttiva UE 2012/18/UE sulla prevenzione degli incidenti rilevanti che comportano sostanze pericolose, comunemente nota come Direttiva Seveso III",
    rating: 3.5,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 19.84,
      category: "Instructor",
    },
  },
  {
    id: 5,
    image: img1,
    category: "Soft skills",
    title: "Formazione SEVESO",
    paragraph:
      "Accordo, ai sensi dell’articolo 37, comma 2, del decreto legislativo 9 aprile 2008, n. 81, tra il Governo, le regioni e le Province autonome di Trento e di Bolzano, finalizzato alla individuazione della durata e dei contenuti minimi dei percorsi formativi in materia di salute e sicurezza, di cui al medesimo decreto legislativo n. 81 del 2008.",
    rating: 4.5,
    author: {
      image: image1,
      name: "Jane Cooper",
      price: 17.84,
      category: "Instructor",
    },
  },
  {
    id: 6,
    image: img2,
    category: "Safety at work",
    title: "Formazione per i datori...",
    paragraph:
      " corso Seveso III si riferisce alla direttiva UE 2012/18/UE sulla prevenzione degli incidenti rilevanti che comportano sostanze pericolose, comunemente nota come Direttiva Seveso III",
    rating: 4.3,
    author: {
      image: image1,
      name: "Jane Cooper",
      price: 12.84,
      category: "Instructor",
    },
  },
  {
    id: 7,
    image: img3,
    category: "CFP courses",
    title: "Formazione GENERALE",
    paragraph:
      "Accordo, ai sensi dell’articolo 37, comma 2, del decreto legislativo 9 aprile 2008, n. 81, tra il Governo, le regioni e le Province autonome di Trento e di Bolzano, finalizzato alla individuazione della durata e dei contenuti minimi dei percorsi formativi in materia di salute e sicurezza, di cui al medesimo decreto legislativo n. 81 del 2008.",
    rating: 3.5,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 19.84,
      category: "Instructor",
    },
  },
  {
    id: 8,
    image: img3,
    category: "CFP courses",
    title: "Formazione GENERALE",
    paragraph:
      " corso Seveso III si riferisce alla direttiva UE 2012/18/UE sulla prevenzione degli incidenti rilevanti che comportano sostanze pericolose, comunemente nota come Direttiva Seveso III",
    rating: 3.5,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 19.84,
      category: "Instructor",
    },
  },
];

const ExploreProgramsSectionCopy = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div>
        <h2 className="font-semibold text-4xl poppins-semibold text-[#101828] my-3 poppins-medium">
          Esplora il mostro catalgo corst
        </h2>
      </div>

      <div className="my-3">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={16}
          style={{
            "--swiper-pagination-bottom": "20px",
            marginBottom: "32px",
          }}
        >
          {Data.map((item) => (
            <SwiperSlide key={item.id}>
              <AllCard props={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center my-6 Poppins font-semibold text-base">
        <button className="btn border rounded-[8px] border-[#c2c1c5] bg-[#F9FAFB] text-[#252525] font-semibold w-[236px] h-[44px]">
          Esplora tutti i programmi
        </button>
      </div>
    </section>
  );
};

export default ExploreProgramsSectionCopy;
