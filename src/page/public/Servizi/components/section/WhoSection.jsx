const WhoSection = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 bg-[#73BFA1]">
      <div className="max-w-[1200px] container mx-auto grid grid-cols-2 gap-28 py-14">
        <div className="my-auto">
          <h2 className="text-5xl poppins-bold text-white">Who We Are</h2>
          <p className="plus-jakarta-sans-regular text-base text-white my-8">
            Welcome to our sales and marketing company, where we specialize in
            helping customers snag great deals from the leading solar and cable
            companies in the DC, Maryland, and Virginia area.We understand that
            finding the right solar and cable solutions for your needs can be a
            daunting task, which is why we're here to make the process easier
            and more affordable for you.
          </p>
          <div className="flex items-center gap-10">
            <button className="text-black bg-white text-lg poppins-medium px-8 py-2 rounded-4xl">
              Read More
            </button>
            <button className="bg-[#505050] text-white text-lg poppins-medium px-8 py-2 rounded-4xl">
              Contact us today
            </button>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <img
              className="w-[291px] h-[457px] bg-cover object-cover rounded-xl"
              src="/img/Servizi/who/img2.jpg"
              alt=""
            />
            <img
              className="absolute top-24 left-[220px] w-[323px] h-[330px] bg-cover object-cover rounded-[10px]"
              src="/img/Servizi/who/img1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
