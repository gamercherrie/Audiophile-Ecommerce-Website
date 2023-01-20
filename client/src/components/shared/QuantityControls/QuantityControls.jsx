import React, { useContext, useState } from 'react';
import { CartContext } from '../CartProvider/CartProvider'
import './QualityControls.scss'

const QuantityControls = ({itemId, initialQuantity}) => {
    const [ quantity, setQuantityState ] = useState(initialQuantity)
    const { updateCart, cart } = useContext(CartContext);
    
    const handleDecreaseQuantityClick = () => {
      if (quantity > 1) {
        setQuantityState(qty => {
            updateCart(itemId, qty - 1);
            return qty - 1;
        });
        
      }
    };
  
    const handleIncreaseQuantityClick = () => {
        setQuantityState(qty => {
            updateCart(itemId, qty + 1);
            return qty + 1;
          });
    };
  
    return (
      <div className="quantity__button cart-quantity">
        <button type="button" onClick={handleDecreaseQuantityClick}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={handleIncreaseQuantityClick}>
          +
        </button>
      </div>
    );
  };

export default QuantityControls