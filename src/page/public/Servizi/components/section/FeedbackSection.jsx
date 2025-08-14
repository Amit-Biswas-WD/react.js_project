import "../../../../../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

const data = [
  { id: 1, image: "/img/Servizi/feedback/Ellipse2.png", title: "Susan Evans" },
  { id: 2, image: "/img/Servizi/feedback/Ellipse.png", title: "Bette Abeel" },
  { id: 3, image: "/img/Servizi/feedback/Ellipse2.png", title: "Susan Evans" },
  { id: 4, image: "/img/Servizi/feedback/Ellipse.png", title: "Bette Abeel" },
];

const FeedbackSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="max-w-7xl mx-auto my-20 px-4 relative">
      <h2 className="text-4xl text-center text-[#000000] poppins-medium mb-8">
        Course Feedback
      </h2>

      <button
        ref={prevRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white rounded-full shadow-md"
      >
        <img src="/img/Servizi/feedback/left.png" alt="" />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white rounded-full shadow-md"
      >
        <img src="/img/Servizi/feedback/right.png" alt="" />
      </button>

      <div className="max-w-5xl mx-auto relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 1, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 32 },
          }}
          style={{
            "--swiper-pagination-bottom": "20px",
            marginBottom: "32px",
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#F3F3F3] p-8 rounded-lg w-full h-full">
                <img
                  className="w-[76px] h-[76px] object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="flex gap-6 items-center text-[#000000] my-4">
                  <h2 className="poppins-medium text-2xl">{item.title}</h2>
                  <div className="flex gap-1 items-center">
                    {Array(5)
                      .fill("/img/Servizi/feedback/icn.png")
                      .map((src, i) => (
                        <img key={i} src={src} alt="star" />
                      ))}
                  </div>
                </div>
                <h4 className="poppins-medium text-base">
                  Cybersecurity Essentials for Professionals
                </h4>
                <p className="plus-jakarta-sans-regular text-[14px]">
                  “As someone working in IT, this course helped me understand
                  real-world cyber threats and how to deal with them. The
                  trainer was very knowledgeable, and the examples were
                  practical. Highly recommend for professionals.”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedbackSection;
