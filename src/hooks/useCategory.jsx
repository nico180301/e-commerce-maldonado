import React from "react";
import { getCategories } from "../services/products.service";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // getCategories()
    //   .then((response) => {
    //     setCategory(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    fetchCategories();
  }, []);

  return { category };
};
