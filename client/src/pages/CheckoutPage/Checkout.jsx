import React, {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, CheckoutForm, Footer } from '../../components/index'
import './Checkout.scss'
import { CartContext } from '../../components/shared/CartProvider/CartProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const CheckoutPage = () => {

  const{cart} = useContext(CartContext);
  const [totals, setTotals] = useState({
    total: 0,
    grandTotal: 0,
    vat: 0,
    shipping: 0,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: '',
    eMoneyNumber: '',
    eMoneyPin: ''
  });
  const [errorMessage, setErrorMessage] = useState({})
  const [successful, setSuccessful] = useState(false)
  const navigate = useNavigate()

  console.log(cart)
  
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    const shipping = 50;
    const grandTotal = total + shipping;
    const vat = total * 0.2;
    setTotals({ total, grandTotal, vat, shipping });
    console.log(formData);
  }, [cart, formData]);

  const handleSubmit = async(event) => {
    window.scrollTo(0, 0);
    event.preventDefault();
    let formDataEntries = Object.entries(formData)
    let hasError = false
    let newErrors = {}

    formDataEntries.forEach(([key, value]) => {
      if (key === 'eMoneyNumber' || key === 'eMoneyPin') {
        if (formData.paymentMethod === 'e-Money' && !value) {
          hasError = true;
          newErrors[key] = `${key} field is required`;
        }
      } else if (!value) {
        hasError = true;
        newErrors[key] = `${key} field is required`;
      }
    });
    
    if(hasError){
      setErrorMessage(newErrors)
    }
    else{
      setFormData({...formData, cart: cart, grandTotal: totals.grandTotal});
    }
    try {
      const response = await fetch('http://localhost:3001/submit/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      })
      if(response.ok){
        console.log("Data sent successfully")
        setSuccessful(true)
        sessionStorage.clear();
      }
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <React.Fragment>
      <CheckoutSuccess successful={successful} cart={cart} grandTotal={totals.grandTotal}/>
      <Navbar />
      <div className="checkout"> 
        <button className="add__button" onClick={() => navigate(-1)}>Go Back</button>
        <div className="checkout__section">
          <div className="checkout__container">
            <div className="checkout__form">
              <h1>Checkout</h1>
              <CheckoutForm
                handleSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                />
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
                        <div className="filtered-item__quantity">
                          <p>x{item.quantity}</p>
                        </div>
                      </div>
                    </div>
                )) : <p>No items found.</p>}
              <div className="checkout__additional-fees">
                <div className="checkout__fee">
                  <p>Total</p>
                  <p>${totals.total.toLocaleString()}</p>
                </div>
                <div className="checkout__fee">
                  <p>Shipping</p>
                  <p>${totals.shipping}</p>
                </div>
                <div className="checkout__fee">
                  <p>Vat(Included)</p>
                  <p>${totals.vat.toLocaleString()}</p>
                </div>
                <div className="checkout__fee checkout__grand-total">
                  <p>Grand Total</p>
                  <p>${totals.grandTotal.toLocaleString()}</p>
                </div>
              </div>
              <div className="checkout__button">
                <button onClick={(event) => handleSubmit(event)}>Continue & Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
    
  );
}

const CheckoutSuccess = ({successful, grandTotal}) => {
  const{cart} = useContext(CartContext);
  const navigate = useNavigate();
  const [showOtherItems, setShowOtherItems] = useState(false)

  const handleClick = () => {
    navigate("/")
    window.location.reload();
  }

  return successful ? (
    <div className="checkout-success__container">
          <div className="checkout-success__modal">
            <FontAwesomeIcon icon={faCircleCheck} className="checkout-success__icon"/>
            <h1>Thank you for your order</h1>
            <p>You will receive an email confirmation shortly.</p>
            <div className="checkout-success__items-modal">
              <div className="checkout-success__items">
                <div className="checkout-success__image">
                  <img src={`../../../assets/product-${cart[0].slug}/desktop/image-product.jpg`} alt="item"/>
                </div>
                <div className="checkout-success__items-desc">
                  <p>{cart[0].cartName}</p>
                  <p>${cart[0].price.toLocaleString()}</p>
                </div>
                <div className="checkout-success__items-quantity">
                  <p>x{cart[0].quantity}</p>
                </div>
              </div>
                {showOtherItems ? (
                  <>
                  {cart.slice(1).map((item) => (
                      <>
                        <div className="checkout-success__items">
                          <div className="checkout-success__image">
                            <img src={`../../../assets/product-${item.slug}/desktop/image-product.jpg`} alt="item"/>
                          </div>
                          <div className="checkout-success__items-desc">
                            <p>{item.cartName}</p>
                            <p>${item.price.toLocaleString()}</p>
                          </div>
                          <div className="checkout-success__items-quantity">
                            <p>x{item.quantity}</p>
                          </div>
                        </div>
                        <div className="checkout-success__bar"></div>
                        <p className="checkout-success__less" onClick={() => setShowOtherItems(prev => !prev)}>
                          View less
                        </p>
                      </>
                    ))}
                  </>
                ) : <>
                      <div className="checkout-success__bar"></div>
                        <div className="checkout-success__other-items">
                          <p onClick={() => setShowOtherItems(prev => !prev)}>and {cart.length - 1} other item(s)</p>
                        </div>
                    </>}
            </div>
            <div className="checkout-success__grandTotal-container">
              <div className="checkout-success__grandTotal-content">
                <p>Grand Total</p>
                <p>${grandTotal.toLocaleString()}</p>
              </div>
            </div>
            <div className="checkout-success__button-home">
              <button onClick={() => handleClick()}>Back To Home</button>
            </div>
          </div>
        </div>
  ) : null;
}

export default CheckoutPage