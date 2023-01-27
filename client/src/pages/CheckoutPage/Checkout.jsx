import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, CheckoutForm } from '../../components/index'
import './Checkout.scss'
import { CartContext } from '../../components/shared/CartProvider/CartProvider'

const CheckoutPage = () => {

  const{cart} = useContext(CartContext);

  const navigate = useNavigate()
  
  return (
    <React.Fragment>
      <Navbar />
      <div className="checkout">
        <button className="add__button" onClick={() => navigate(-1)}>Go Back</button>
        <div className="checkout__container">
          <div className="checkout__form">
            <h1>Checkout</h1>
            <CheckoutForm />
          </div>
        </div>
        <div className="checkout__container">
          <div className="checkout__form">
            <h2>Summary</h2>
            {cart.length > 0 ? cart.map((item, index) => (
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
                  </div>
              )) : <p>No items found.</p>}
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default CheckoutPage