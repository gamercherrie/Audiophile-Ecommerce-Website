import React from 'react'
import { Box } from '@chakra-ui/react'
import { ProductButton } from '../../index'
import './ProductModal.scss'

const ProductModal = (props) => {
  const{ productImage, productName, productDescription, productLink, newProduct, style } = props;
  return (
    <div className={"product-modal__container " + props.className} style={style}>
        <Box className="product-modal__image"><img src={productImage} alt="Product" /></Box>
        <div className="product-modal__description">
          <p>{newProduct}</p>
          <p>{productName}</p>
          <p>{productDescription}</p>
          <ProductButton backgroundColor="#D87D4A" buttonLink={productLink}/>
        </div>
    </div>
  )
}

export default ProductModal