import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, CheckoutForm } from '../../components/index'
import './Checkout.scss'

const CheckoutPage = () => {

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
      </div>
    </React.Fragment>
    
  );
}

export default CheckoutPage