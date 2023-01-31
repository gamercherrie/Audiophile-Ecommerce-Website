import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { CartContext} from '../CartProvider/CartProvider';
import './CartComponent.scss'
import { QuantityControls } from '../../index'

const CartComponent = () => {
  const{ cart, setCart } = useContext(CartContext)
  const[items, setItems] = useState([]);
  const[filteredItems, setFilteredItems] = useState([]);
  const [isCheckoutButtonClicked, setIsCheckoutButtonClicked] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/products/get')
      .then(response => setItems(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (items && items.length > 0 && cart && cart.length > 0) {
      const cartMap = new Map(cart.map(item => [item.name, item.quantity]));
      setFilteredItems(items.filter(item => cartMap.has(item.name)).map(item => {
        return {
          ...item,
          quantity: cartMap.get(item.name)
        }
      }));
    }
  }, [items, cart]);
  
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }  

  const handleCheckoutButtonClick = () => {
    setIsCheckoutButtonClicked(true);
  }
  
  const handleRemoveAll = () => {
    setCart([]);
    window.location.reload();
  }

  if(items.length > 0) return (
    <div className="cart-component__bg">
      <div className="cart-component">
        <div className='cart-component__container'>
          <div className="cart-component__content">
            <div className="cart-component__header">
                <h1>Cart (<span>{cart.length}</span>)</h1>
                <button onClick={() => handleRemoveAll()}>Remove All</button>
            </div>
            {filteredItems.length > 0 ? filteredItems.map((item, index) => (
                  <div key={index} className="filtered-item">
                    <div className="filtered-item__item-section">
                      <div className="filtered-item__image">
                        <img src={`../../../assets/product-${item.slug}/desktop/image-product.jpg`} alt="item"/>
                      </div>
                      <div className="filtered-item__label">
                        <p>{item.cartName}</p>
                        <p>${item.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="filtered-item__quantity-button">
                      <QuantityControls itemId={`${item.name}-${item.price}`} initialQuantity={item.quantity}/>
                    </div>
                  </div>
              )) : <p>No items found.</p>}
            <div className="cart-component__total">
              <p>Total</p>
              <p>${calculateTotal().toLocaleString()}</p>
            </div>
            <div className="cart-component__checkout">
              <Link to="/checkout">
                <button onClick={handleCheckoutButtonClick}>Checkout</button>
              </Link>
            </div>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartComponent