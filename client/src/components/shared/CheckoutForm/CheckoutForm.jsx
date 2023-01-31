import React, {useState, useEffect, useContext} from 'react'
import './CheckoutForm.scss'

const CheckoutForm = (props) => {
  const {formData, setFormData,handleSubmit, errorMessage, setErrorMessage} = props
  const [countries, setCountries] = useState([]);


  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    setErrorMessage({
      ...errorMessage,
      [event.target.name]: ""
    })
  }


  const getCountries = async() => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  }
  useEffect(() => {
    getCountries();
  }, []);

  const sortedCountries = countries.sort((a, b) => (a.name.common.localeCompare(b.name.common)));

  return (
    <div className="checkout-form__container">
        <form onSubmit={handleSubmit}>
          <p>Billing Details</p>
            <label>
                Name
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Alexei Ward"
                  required
                />
            </label>
            {errorMessage && errorMessage.name && <div className="error-message">{errorMessage.name}</div>}
            <label>
              Email Address
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alexei@email.com"
                required
              />
            </label>
            {errorMessage && errorMessage.email && <div className="error-message">{errorMessage.email}</div>}
            <label>
                Phone Number
                <input 
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  pattern="^(?:\+\d{1,2})?\d{3}[- ]?\d{3}[- ]?\d{4}$" //regex for allowing +1, +44 xxx-xxx-xxxx
                  placeholder="+1 202-555-0136"
                  maxLength="12"
                  required
                />
            </label>
            {errorMessage && errorMessage.phoneNumber && <div className="error-message">{errorMessage.phoneNumber}</div>}
            <p>Shipping Info</p>
            <label>
              Your Address
              <input 
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="1137 Williams Avenue"
                required
              />
            </label>
            {errorMessage && errorMessage.address && <div className="error-message">{errorMessage.address}</div>}
            <label>
              ZIP Code
              <input 
                type="number"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="10001"
                required
              />
            </label>
            {errorMessage && errorMessage.zipCode && <div className="error-message">{errorMessage.zipCode}</div>}
            <label>
              City
              <input 
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="New York"
                required
              />
            </label>
            {errorMessage && errorMessage.city && <div className="error-message">{errorMessage.city}</div>}
            <label>
              Country
              <select name="country" value={formData.country} onChange={handleChange} required>
                <option value="">Select a country</option>
                {sortedCountries.map((country) => (
                  <option key={country.alpha2Code} value={country.alpha2Code}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </label>
            {errorMessage && errorMessage.country && <div className="error-message">{errorMessage.country}</div>}
            <p>Payment Details</p>
            <p className="payment-method">Payment Method</p>
            <div className="payment-method__container">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="e-Money"
                  onChange={handleChange}
                  checked={formData.paymentMethod === "e-Money"}
                  required
                />
                e-Money
              </label>
            </div>
            <div className="payment-method__container">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={formData.paymentMethod === "cashOnDelivery"}
                  onChange={handleChange}
                  required
                />
                Cash On Delivery
              </label>
            </div>
            {errorMessage && errorMessage.paymentMethod && <div className="error-message">{errorMessage.paymentMethod}</div>}
            {formData.paymentMethod === "e-Money" && (
              <>
                <label>
                  e-Money Number
                  <input 
                    type="number"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleChange}
                    placeholder="238521993"
                    required
                  />
                </label>
                {errorMessage && errorMessage.eMoneyNumber && <div className="error-message">{errorMessage.eMoneyNumber}</div>}
                <label>
                  e-Money Pin
                  <input 
                    type="number"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleChange}
                    placeholder="6891"
                    required
                  />
                </label>
                {errorMessage && errorMessage.eMoneyPin && <div className="error-message">{errorMessage.eMoneyPin}</div>}
              </>
            )}

        </form>
    </div>
  )
}

export default CheckoutForm