import { useEffect, useState } from "react";
import AllCard from "../../../../components/allCard/AllCard";
import instance from "../../../../utils/axiosinstance";

const CoursesCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance
      .get("/formazione.json")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // const Online = data.filter((data) => data.Online === "Online courses");
  // const e_Learning = data.filter(
  //   (data) => data.eLearning === "e-e_Learning platform"
  // );
  // const Corporate = data.filter(
  //   (data) => data.Corporate === "Corporate training"
  // );

  return (
    <section className="max-w-7xl container mx-auto my-20">
      <h2 className="text-4xl text-[#252525] poppins-semibold text-center mx-auto w-[768px]">
        Online courses and eLearning platform for corporate training
      </h2>

      <div className="flex justify-between">
        <button className="">1</button>
        <button className="">2</button>
        <button className="">3</button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8">
        {data.map((data) => (
          <AllCard key={data.id} props={data} />
        ))}
      </div>
    </section>
  );
};

export default CoursesCategory;
