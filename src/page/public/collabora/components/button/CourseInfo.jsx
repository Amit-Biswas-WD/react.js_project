import "../../../../../index.css"

const faqs = [
  {
    id: 1,
    question: "What will I learn in the Web Development track?",
    answer:
      "You'll master HTML, CSS, JavaScript, and frameworks like React and Next.js. You'll also learn responsive design, API integration, backend development with Node.js, and deployment to platforms like Vercel or Netlify.",
  },
  {
    id: 2,
    question: "What will I learn in the App Development track?",
    answer:
      "You'll learn to build mobile applications for both iOS and Android using Flutter or React Native. The course covers UI design, API integration, state management, and publishing apps to the App Store and Google Play.",
  },
  {
    id: 3,
    question: "What will I learn in the Software Development track?",
    answer:
      "You'll learn software engineering fundamentals, programming languages like Python or Java, database design, algorithms, version control with Git, and testing best practices.",
  },
  {
    id: 4,
    question: "Do I need prior experience to enroll?",
    answer:
      "No prior experience is needed for beginner modules. However, intermediate and advanced tracks assume basic programming knowledge.",
  },
  {
    id: 5,
    question: "Will I work on real-world projects?",
    answer:
      "Yes! Each track includes multiple hands-on projects like portfolio websites, mobile apps, and fully functional software tools you can showcase to employers or clients.",
  },
];

const CourseInfo = () => {
  return (
    <section>
      <div>
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
            <li
              key={idx}
              className="text-[#505050] text-xl poppins-medium py-4"
            >
              <details className="group">
                <summary className="flex items-center justify-between font-medium hover:cursor-pointer bg-[#D4EBE2] w-full py-[18px] px-6 rounded-sm">
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
    </section>
  );
};

export default CourseInfo;
