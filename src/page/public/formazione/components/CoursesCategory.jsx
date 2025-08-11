import { useEffect, useState } from "react";
import AllCard from "../../../../components/allCard/AllCard";

const CoursesCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/formazioneJson/formazione.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <section className="max-w-[1200px] container mx-auto my-20">
      <h2 className="text-4xl text-[#252525] poppins-semibold text-center mx-auto w-[768px]">
        Online courses and eLearning platform for corporate training
      </h2>
      <div className="">
        {data.map((data) => (
          <AllCard key={data.index} props={data} />
        ))}
      </div>
    </section>
  );
};

export default CoursesCategory;
