import StyleButton from "../../../../components/Button/StyleButton";
import "../../../../index.css";

const CourseSection = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex gap-20 mx-auto my-4 mb-20">
        <div className="my-auto">
          <p className="poppins-semibold text-5xl text-[#505050]">
            Your Course, Your Schedule, Your Success.
          </p>
          <p className="font-normal text-base text-[#646464] mt-3 mb-[50px] plus-jakarta-sans-regular max-w-[551px]">
            Instantly access certified courses designed for individual
            professionals. Learn at your own pace and get your certificate the
            moment you finish. It's that simple.
          </p>
          <div className="max-w-[210px]">
            <StyleButton props={"Browse Our Courses"} />
          </div>
        </div>
        <div>
          <img src={"/img/chisiamo/banner/1.jpg"} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
