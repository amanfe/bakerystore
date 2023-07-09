import { useEffect, useState } from "react";
import { Products } from "./mockData";

const useStoreData = (id) => {
  const [cakeList, setCakeList] = useState([]);

  useEffect(() => {
    const { cakes } = Products || [];
    const list = id ? cakes.filter((cake) => cake.id.toString() === id) : cakes;
    setCakeList(list);
  }, []);

  return { cakeList };
};

export default useStoreData;