import "../../../../../index.css";

const data = [
  { id: 1, image: "/img/Servizi/feedback/Ellipse2.png", title: "Susan Evans" },
  { id: 1, image: "/img/Servizi/feedback/Ellipse.png", title: "Bette Abeel" },
];

const FeedbackSection = () => {
  return (
    <section className="max-w-[1000px] container mx-auto my-20">
      <h2 className="text-4xl text-center text-[#000000] poppins-medium mb-8">
        Course Feedback
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {data.map((data) => (
          <div key={data.id} className="col-span-1 w-[486px] h-[318px] bg-[#F3F3F3] p-8 rounded-lg">
            <img
              className="w-[76px] h-[76px] bg-cover object-cover"
              src={data.image}
              alt=""
            />
            <div className="flex gap-6 items-center text-[#000000] my-4">
              <h2 className="poppins-medium text-2xl">{data.title}</h2>
              <div className="flex gap-1 items-center">
                <img src="/img/Servizi/feedback/icn.png" alt="" />
                <img src="/img/Servizi/feedback/icn.png" alt="" />
                <img src="/img/Servizi/feedback/icn.png" alt="" />
                <img src="/img/Servizi/feedback/icn.png" alt="" />
                <img src="/img/Servizi/feedback/icn.png" alt="" />
              </div>
            </div>
            <h4 className="poppins-medium text-base">
              Cybersecurity Essentials for Professionals
            </h4>
            <p className="plus-jakarta-sans-regular text-[14px]">
              “As someone working in IT, this course helped me understand
              real-world cyber threats and how to deal with them. The trainer
              was very knowledgeable, and the examples were practical. Highly
              recommend for professionals.”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
