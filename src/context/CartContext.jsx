import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addItem = (product, qtyItem) => {
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      
      setCartState(
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyItem: item.qtyItem + 1 } 
            : item
        )
      );
    } else {
      
      setCartState([...cartState, { ...product, qtyItem }]);
    }
  };

  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);
    if (existingProduct) {

      if (existingProduct.qtyItem === 1) {
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {

        setCartState(
          cartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        );
      }
    }
  };

  const deleteItem = (product) => {
    setCartState(cartState.filter((item) => item.id !== product.id));
  };

  const valuesToShare = {
    cartState,
    addItem,
    removeItem,
    deleteItem,
  };

  return (
    <CartContext.Provider value={valuesToShare}>
      {children}
    </CartContext.Provider>
  );
};
