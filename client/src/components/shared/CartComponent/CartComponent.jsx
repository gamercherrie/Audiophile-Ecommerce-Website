import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { CartContext } from '../CartProvider/CartProvider';
import './CartComponent.scss'
import Image from '../../../assets/product-xx59-headphones/desktop/image-product.jpg'
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
      const cartSet = new Set(cart.map(item => item.name));
      setFilteredItems(items.filter(item => cartSet.has(item.name)));      
    }
  }, [items, cart]);




  if(items.length > 0) return (
    <div className="cart-component">
        <div className='cart-component__container'>
          <div className="cart-component__content">
            <div className="cart-component__header">
              <h1>Cart (<span>{cart.length}</span>)</h1>
              <a href="#">Remove All</a>
            </div>
            {filteredItems.length > 0 ? filteredItems.map((item, index) => (
                <div key={index}>
                  <div><img src={`../../../assets/product-${item.slug}/desktop/image-product.jpg`} alt="item"/></div>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              )) : <p>No items found.</p>}
          </div>
        </div> 
    </div>
  )
}

export default CartComponent