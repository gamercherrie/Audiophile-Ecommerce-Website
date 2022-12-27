import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductAddToCartModal.scss'
import data from '../../../local-json/data.json'


const ProductAddToCartModal = (props) => {

  const navigate = useNavigate()

  const { ImageofProduct, newProduct, productTitle, productDescription} = props
  const [price, setPrice] = useState('')

  const selectedProduct = data.filter(data => data.name.toLowerCase() === productTitle.toLowerCase())[0]
  const productPrice = selectedProduct.price

  return (
    <div className="add__container">
       <button onClick={() => navigate(-1)}>Go Back</button>
       <img src={selectedProduct.image.mobile}  alt={selectedProduct.name}/>
       <p>{newProduct}</p>
       <h1>{productTitle}</h1>
       <p>{productDescription}</p>
       <span>${productPrice}</span>
    </div>
  )
}

export default ProductAddToCartModal