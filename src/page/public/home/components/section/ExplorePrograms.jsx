import "../../../../../index.css";
import img1 from "../../../../../assets/UnoSicurezza/Home/explore/fea2a0b7dc7728c8456ad4b75c7b348c5112ad79.jpg";
import img2 from "../../../../../assets/UnoSicurezza/Home/explore/e0f0d8d9ab0592e26bd0f1b67e6d3386819c3e94 (1).jpg";
import img3 from "../../../../../assets/UnoSicurezza/Home/explore/0b922a7202cdacb6e1f64689fd1d756a43a1824b.jpg";

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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 3.5,
    author: {
      image: image3,
      name: "Jane Cooper",
      price: 19.84,
      category: "Instructor",
    },
  },
];

const ExploreProgramsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <div>
        <h4 className="text_green font-semibold text-base">ExplorePrograms</h4>
        <h2 className="font-semibold text-4xl poppins-semibold text-[#101828] my-3 poppins-medium">
          Esplora il mostro catalgo corst
        </h2>
        <p className="poppins-medium text-xl text-[#667085]">
          Unisciti alla nostra famosa classe, le conoscenze acquisite ti saranno
          sicuramente utili.
        </p>
      </div>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-8">
        {Data.map((items) => (
          <AllCard key={items.id} props={items} />
        ))}
      </div> */}

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

export default ExploreProgramsSection;
