import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { CartContext } from '../CartProvider/CartProvider';
import './CartComponent.scss'

const CartComponent = () => {
  const{ cart } = useContext(CartContext)
  const[images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async() => {
        const response = await axios.get('/products/get');
        console.log(response.data);
    };
    getImages();
  }, [])

  console.log(images);

  return (
    <div className="cart-component">
        <div className='cart-component__container'>
          <div className="cart-component__content">
            <div className="cart-component__header">
              <h1>Cart (<span>{cart.length}</span>)</h1>
              <a href="#">Remove All</a>
            </div>
              {cart.map((item, index) => (
                <div key={index}>
                  <p>{item.name}</p>
                  <img src={item.picture} alt="item"/>
                </div>
              ))}
          </div>
        </div> 
    </div>
  )
}

export default CartComponent