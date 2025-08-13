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
    <section className="max-w-7xl mx-auto my-20 bg-[#F0FAF7] px-4">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-16 text_green">
        {/* Left Title Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl poppins-semibold text-[#131313] mb-4">
            Why Choose Us?
          </h2>
          <p className="plus-jakarta-sans-regular text-base text-[#3E3E3E]">
            Whether you're looking to switch to solar energy or upgrade your
            cable services, our sales and marketing company is here to help.
          </p>
        </div>

        {/* Cards */}
        {Data.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col justify-between"
          >
            <h2 className="poppins-bold text-[56px] text_green leading-none">
              0{data.id}
            </h2>
            <h3 className="poppins-bold text-2xl text-[#5C5C5C] mb-3">
              {data.title}
            </h3>
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
