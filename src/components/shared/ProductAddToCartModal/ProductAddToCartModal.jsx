import React, { useState, useEffect, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductAddToCartModal.scss'
import data from '../../../local-json/data.json'
import { CartContext } from '../CartProvider/CartProvider'

const ProductAddToCartModal = (props) => {

  const navigate = useNavigate()

  const { ImageofProduct, productTitle} = props
  const [newProduct, setNewProduct] = useState(false);

  const selectedProduct = data.filter(data => data.name.toLowerCase() === productTitle.toLowerCase())[0]
  const productPrice = selectedProduct.price

  useEffect (() => {
    if (selectedProduct.new === true) {
      setNewProduct(true);
    }
  }, [selectedProduct.new]);

  return (
    <div className="add__container">
       <button className="add__button" onClick={() => navigate(-1)}>Go Back</button>
       <div className="add__content">
         <div className="add__image-container"><img src={ImageofProduct} alt={selectedProduct.name}/></div>
         <div className="add__content-section2">
           <div className="new-product__container">
            {newProduct === true ? <p>NEW PRODUCT</p> : null }
            </div>
           <div className="add__product-info">
             <h1>{productTitle}</h1>
             <p>{selectedProduct.description}</p>
             <p>${productPrice.toLocaleString()}</p>
           </div>
           <div className="add__button-container">
            <QuantityControls />
            <AddToCartButton name={selectedProduct.name} price={selectedProduct.price} picture={selectedProduct.image.desktop}/>
           </div>
         </div>
       </div>
       <Feature 
        featureDescription={selectedProduct.features} 
        featuredItem={selectedProduct.includes}
        />
    </div>
  )
}

const QuantityControls = () => {
  const { quantity, setQuantity } = useContext(CartContext)

  const handleDecreaseQuantityClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantityClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="quantity__button">
      <button type="button" onClick={handleDecreaseQuantityClick}>
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleIncreaseQuantityClick}>
        +
      </button>
    </div>
  );
};

const AddToCartButton = ({name, price, picture}) => {
  const { cart, addToCart, quantity, setQuantity } = useContext(CartContext)

  const handleAddToCartClick = (item) => {
    addToCart(item);
    setQuantity(1);
  }

  return (
    <div className="add-to-cart__button">
      <button type="button" onClick={() => handleAddToCartClick({name, price, id: `${name}-${price}`, quantity, picture})}>
        Add to Cart
      </button>
    </div>
  );
};

const Feature = ({featureDescription, featuredItem}) => {

  return(
    <div className="feature">
      <div className="feature__container">
        <h1>Features</h1>
        <p>{featureDescription}</p>
      </div>
      <div className="feature__contain">
        <div className="feature__header">
          <h2>In the Box</h2>
        </div>
        <div className="feature__items">
          {featuredItem.map((item) => (
            <p>{item.quantity}x<span>{item.item}</span></p>
          ))}
        </div>
      </div>
    </div>
  
  )
}


export default ProductAddToCartModal