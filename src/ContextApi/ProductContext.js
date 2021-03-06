import React, { useState, createContext, useEffect } from "react";
import Commerce from "../lib/Commerce";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await Commerce.products.list();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
    console.log('helodd',products)
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
