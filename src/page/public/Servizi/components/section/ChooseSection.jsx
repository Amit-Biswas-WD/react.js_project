import "../../../../../index.css";

const Data = [
  {
    id: 1,
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
  {
    id: 2,
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
  {
    id: 3,
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
  {
    id: 4,
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
  {
    id: 5,
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
];

const ChooseSection = () => {
  return (
    <section className="max-w-[1440px] container mx-auto my-20 bg-[#F0FAF7]">
      <div className="max-w-[1200px] container mx-auto grid grid-cols-3 grid-rows-2 gap-12 py-20 text_green">
        <div className="my-auto">
          <h2 className="text-4xl poppins-semibold text-[#131313] max-w-[274px] mb-2">
            Why Choose Us?
          </h2>
          <p className="plus-jakarta-sans-regular text-base text-[#3E3E3E] max-w-[323px]">
            Whether you're looking to switch to solar energy or upgrade your
            cable services, our sales and marketing company is here to help.
          </p>
        </div>
        {Data.map((data) => (
          <div
            key={data.id}
            className="max-w-[384px] max-h-[232px] bg-[#FFFFFF] rounded-lg px-9 py-6"
          >
            <h2 className="poppins-bold text-[56px] text_green">0{data.id}</h2>
            <h2 className="poppins-bold text-2xl text-[#5C5C5C] mb-5">
              {data.title}
            </h2>
            <p className="plus-jakarta-sans-regular text-base text-[#787878]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseSection;
