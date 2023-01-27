import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, CheckoutForm } from '../../components/index'
import './Checkout.scss'
import { CartContext } from '../../components/shared/CartProvider/CartProvider'

const CheckoutPage = () => {

  const{cart} = useContext(CartContext);

  const navigate = useNavigate()

  console.log(cart)
  
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
          </div>
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default CheckoutPage