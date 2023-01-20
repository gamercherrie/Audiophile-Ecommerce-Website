import React, { createContext, useState }from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const initialCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);
    const [quantity, setQuantity] = useState(1);
  
    const addToCart = (item) => {
      setCart(currentCart => {
        const newCart = [...currentCart, item];
        sessionStorage.setItem('cart', JSON.stringify(newCart));
        return newCart;
      })
    }

    const updateCart = (id, quantity) => {
      setCart(currentCart => {
        const updatedCart = currentCart.map(item => {
          if(item.id == id) {
            return {...item, quantity}
          }
          return item
        });
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      })
    }
  
    return(
      <CartContext.Provider value={{ cart, addToCart, quantity, setQuantity, updateCart}}>
        {children}
      </CartContext.Provider>
    )
}

export default CartProvider