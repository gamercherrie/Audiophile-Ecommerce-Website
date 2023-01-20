import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { CartContext} from '../CartProvider/CartProvider';
import './CartComponent.scss'
import { QuantityControls } from '../../index'

const CartComponent = () => {
  const{ cart } = useContext(CartContext)
  const[items, setItems] = useState([]);
  const[filteredItems, setFilteredItems] = useState([]);

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

  console.log(cart)

  if(items.length > 0) return (
    <div className="cart-component">
        <div className='cart-component__container'>
          <div className="cart-component__content">
            <div className="cart-component__header">
              <h1>Cart (<span>{cart.length}</span>)</h1>
              <a href="#">Remove All</a>
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
          </div>
        </div> 
    </div>
  )
}

export default CartComponent