import React, {useState, useEffect} from 'react'
import './CheckoutForm.scss'

const CheckoutForm = () => {
  const [countries, setCountries] = useState([]);
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

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    // submit form data to server or process payment
  };

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
                />
            </label>
            <label>
              Email Address
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alexei@email.com"
              />
            </label>
            <label>
                Phone Number
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  pattern="^(?:\+\d{1,2})?\d{3}[- ]?\d{3}[- ]?\d{4}$" //regex for allowing +1, +44 xxx-xxx-xxxx
                  placeholder="+1 202-555-0136"
                />
            </label>
            <p>Shipping Info</p>
            <label>
              Your Address
              <input 
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="1137 Williams Avenue"
              />
            </label>
            <label>
              ZIP Code
              <input 
                type="text"
                name="zipcode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="10001"
              />
            </label>
            <label>
              City
              <input 
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="New York"
              />
            </label>
            <label>
              Country
              <select name="country" value={formData.country} onChange={handleChange}>
                <option value="">Select a country</option>
                {sortedCountries.map((country) => (
                  <option key={country.alpha2Code} value={country.alpha2Code}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </label>
            <p>Payment Details</p>
            <p className="payment-method">Payment Method</p>
            <div className="payment-method__container">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="e-Money"
                  onChange={handleChange}
                  checked={formData.paymentMethod === "e-Money"}
                />
                <label>e-Money</label>
            </div>
            <div className="payment-method__container">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={formData.paymentMethod === "cashOnDelivery"}
                  onChange={handleChange}
                />
                <label>Cash On Delivery</label>
            </div>
            {formData.paymentMethod === "e-Money" && (
              <>
                <label>
                  e-Money Number
                  <input 
                    type="text"
                    name="eMoneyNumber"
                    value={formData.eMoneyNumber}
                    onChange={handleChange}
                    placeholder="238521993"
                  />
                </label>
                <label>
                  e-Money Pin
                  <input 
                    type="text"
                    name="eMoneyPin"
                    value={formData.eMoneyPin}
                    onChange={handleChange}
                    placeholder="6891"
                  />
                </label>
              </>
            )}

        </form>
    </div>
  )
}

export default CheckoutForm