import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    step: "Step 1",
    title: "Find Your Course",
    description:
      "Explore our catalog and choose the training you need. The purchase process is quick and secure",
  },
  {
    id: 2,
    step: "Step 2",
    title: "Enroll & Pay",
    description:
      "Explore our catalog and choose the training you need. The purchase process is quick and secure",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Start Learning",
    description:
      "Explore our catalog and choose the training you need. The purchase process is quick and secure",
  },
];

const CertificateSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto my-20 flex lg:flex-row flex-col justify-between bg-[#F0FAF7] lg:max-h-[551px]">
      <div className="relative w-full">
        <div className="flex justify-between w-full py-8 gap-4 lg:gap-0">
          <div className="flex justify-start">
            <img
              src="/img/chisiamo/certificate/1.png"
              alt="Certificate Left"
              className="max-w-[250px] lg:max-w-[250px] md:max-w-[200px] sm:max-w-[150px] w-full h-auto"
            />
          </div>
          <div className="flex justify-end">
            <img
              src="/img/chisiamo/certificate/2.png"
              alt="Certificate Right"
              className="max-w-[250px] lg:max-w-[250px] md:max-w-[200px] sm:max-w-[150px] w-full h-auto"
            />
          </div>
        </div>

        <div className="absolute lg:top-0 top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
          <div className="text-center my-6 lg:my-12">
            <h2 className="text-3xl lg:text-4xl text-[#505050] poppins-semibold max-w-[402px] mx-auto">
              From Purchase to Certificate in No Time
            </h2>
            <p className="text-[#646464] plus-jakarta-sans-regular text-sm lg:text-base mt-3">
              A simple, numbered visual flow.
            </p>
          </div>

          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8 pb-10 lg:pb-20 place-items-center">
            {data.map((data) => (
              <div
                key={data.step}
                className="bg-white rounded-lg p-4 lg:p-6 max-w-[384px] w-full"
              >
                <h2 className="poppins-semibold text-[32px] lg:text-[44px] text_green">
                  {data.step}
                </h2>
                <h2 className="poppins-bold text-xl lg:text-2xl text-[#5C5C5C] my-2">
                  {data.title}
                </h2>
                <p className="text-[#787878] text-sm lg:text-base plus-jakarta-sans-regular">
                  {data.description}
                </p>
              </div>
            ))}
          </div> */}

          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
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
            {data.map((item) => (
              <SwiperSlide key={item.step} className="flex justify-center">
                <div className="bg-white rounded-lg p-4 lg:p-6 max-w-[384px] w-full">
                  <h2 className="poppins-semibold text-[32px] lg:text-[44px] text_green">
                    {item.step}
                  </h2>
                  <h2 className="poppins-bold text-xl lg:text-2xl text-[#5C5C5C] my-2">
                    {item.title}
                  </h2>
                  <p className="text-[#787878] text-sm lg:text-base plus-jakarta-sans-regular">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
