import { useEffect, useState } from "react";
import instance from "../../../../../utils/axiosinstance";

const CategoryAxios = () => {
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
  return [data];
};

export default CategoryAxios;
