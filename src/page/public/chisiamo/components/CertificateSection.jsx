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
      "Complete your registration in just a few clicks. Payments are secure and fast.",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Start Learning",
    description:
      "Access your course immediately and learn at your own pace from anywhere.",
  },
];

const CertificateSection = () => {
  return (
    <section className="max-w-[1500px] mx-auto my-20 flex justify-between bg-[#F0FAF7]">
      <img
        src="/img/chisiamo/certificate/1.png"
        alt="Image Tumi Koi"
        className="sm:hidden md:block"
      />

      <div className="">
        <div className="text-center my-12">
          <h2 className="text-4xl text-[#505050] poppins-semibold max-w-[402px] mx-auto">
            From Purchase to Certificate in No Time
          </h2>
          <p className="text-[#646464] plus-jakarta-sans-regular text-base mt-3">
            A simple, numbered visual flow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 pb-20">
          {data.map((data) => (
            <div className="bg-white rounded-lg p-6 max-w-[384px]">
              <h2 className="poppins-semibold text-[44px] text_green">
                {data.step}
              </h2>
              <h2 className="poppins-bold text-2xl text-[#5C5C5C] my-2">
                {data.title}
              </h2>
              <p className="text=[#787878] text-base plus-jakarta-sans-regular">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        className="sm:hidden md:block"
        src="/img/chisiamo/certificate/2.png"
        alt="Image Tumi Koi"
      />
    </section>

    // <section className="max-w-[1500px] mx-auto my-20 flex flex-col lg:flex-row items-center justify-between bg-[#F0FAF7]">
    //   <img
    //     src="/img/chisiamo/certificate/1.png"
    //     alt="Image Left"
    //     className="hidden md:block w-full max-w-[300px] object-contain"
    //   />

    //   <div className="flex-1 w-full">
    //     <div className="text-center lg:text-left my-12">
    //       <h2 className="text-3xl sm:text-4xl text-[#505050] poppins-semibold max-w-[402px] mx-auto lg:mx-0">
    //         From Purchase to Certificate in No Time
    //       </h2>
    //       <p className="text-[#646464] plus-jakarta-sans-regular text-base mt-3">
    //         A simple, numbered visual flow.
    //       </p>
    //     </div>

    //     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 justify-items-center">
    //       {data.map((item, index) => (
    //         <div
    //           key={index}
    //           className="bg-white rounded-lg p-6 w-full max-w-[384px]"
    //         >
    //           <h2 className="poppins-semibold text-[44px] text_green">
    //             {item.step}
    //           </h2>
    //           <h2 className="poppins-bold text-2xl text-[#5C5C5C] my-2">
    //             {item.title}
    //           </h2>
    //           <p className="text-[#787878] text-base plus-jakarta-sans-regular">
    //             {item.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <img
    //     className="hidden md:block w-full max-w-[300px] object-contain"
    //     src="/img/chisiamo/certificate/2.png"
    //     alt="Image Right"
    //   />
    // </section>
  );
};

export default CertificateSection;
