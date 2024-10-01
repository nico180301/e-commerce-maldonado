import React from "react";
import { getAllProducts } from "../services/products.service";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () =>{
        try {
          const response = await getAllProducts();
          setProducts(response.data.products);
        } catch (error) {
          console.error(error);
        } finally{
          setLoading(false);
        }

    };
  //    getAllProducts()
  //     .then((response) => {
  //       setProducts(response.data.products);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => setLoading(false));

    fetchProducts();
   }, []);

  return { products, loading };
};