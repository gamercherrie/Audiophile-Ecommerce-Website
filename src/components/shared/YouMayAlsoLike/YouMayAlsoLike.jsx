import React from 'react'
import ProductButton from '../Button/ProductButton'
import './YouMayAlsoLike.scss'

const YouMayAlsoLike = (props) => {
  const {FeaturedProduct, FeaturedProductTitle } = props

  return (
    <div className="option__container">
        <div className="option-product__container">
            <div className="option-product__image"><img src={FeaturedProduct} /></div>
            <h1>{FeaturedProductTitle}</h1>
            <ProductButton 
              backgroundColor="#D87D4A" 
              customButtonClass="option-product__button"
            />
        </div>
    </div>
  )
}

export default YouMayAlsoLike