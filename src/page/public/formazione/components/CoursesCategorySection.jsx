import { useEffect, useState } from "react";
import CategoryAxios from "./category/CategoryAxios";
import { useParams } from "react-router-dom";
import Category from "./category/Category";
import CategoryButton from "./category/CategoryButton";
import "../../../../index.css";

const CoursesCategorySection = () => {
  const [data] = CategoryAxios([]);
  const [value, setValue] = useState([]);
  const categories = [
    "Online courses",
    "e-Learning platform",
    "Corporate training",
  ];
  const category = useParams();

  useEffect(() => {
    if (category && categories.includes(category)) {
      const filtered = data.filter((data) => {
        data.category === category;
      });
      setValue(filtered)
    }else{
      setValue(data)
    }
  }, [data, category]);

  console.log(value);

  return (
    <section className="max-w-7xl container mx-auto my-20">
      <h2 className="text-4xl text-[#252525] poppins-semibold text-center mx-auto max-w-[768px] mb-10">
        Online courses and eLearning platform for corporate training
      </h2>

      <div className="">
        <CategoryButton data={data} setCategory={setValue} selectedCategory={category} />
      </div>

      <div className="">
        <Category value={value} />
      </div>
    </section>
  );
};

export default CoursesCategorySection;
