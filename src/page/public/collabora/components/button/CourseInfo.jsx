const faqs = [
  {
    question: "What am I getting as a Premium Member?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel anytime from your account settings. Your subscription will remain active until the end of the billing period.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Absolutely! We offer 24/7 customer support through chat and email for all premium members.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We take your privacy seriously and use industry-standard encryption to keep your data safe.",
  },
];

const CourseInfo = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-[#505050] text-2xl poppins-semibold">
          Course Description
        </h2>
        <p className="text-[#505050] text-base plus-jakarta-sans-regular my-4">
          This is your path to a career in UX design. In this program, you'll
          learn in-demand skills that will have you job-ready in less than 6
          months. No degree or experience required.
        </p>
        <h2 className="text-[#505050] text-2xl poppins-semibold">
          Course Content
        </h2>
      </div>
      <div className="">
        <ul className="max-w-2xl mx-auto mt-20 bg-white">
          {faqs.map((faq, idx) => (
            <li key={idx} className="text-[#505050] text-xl poppins-medium py-4">
              <details className="group">
                <summary className="flex items-center justify-between font-medium hover:cursor-pointer bg-[#D4EBE2] w-full py-[15px] px-4 rounded-sm">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </summary>

                <article className="mt-2 text-gray-700">
                  <p>{faq.answer}</p>
                </article>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseInfo;
