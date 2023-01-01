import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import { ProductButton } from '../../index'
import './ProductModal.scss'

const ProductModal = (props) => {
  const{ productImage, productName, productDescription, productLink, newProduct } = props;
  return (
    <Container 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      flexDirection="column"
      className="product-modal__container"
    >
        <Box className="product-modal__image"><img src={productImage} alt="Product" /></Box>
        <p>{newProduct}</p>
        <p>{productName}</p>
        <p>{productDescription}</p>
        <ProductButton backgroundColor="#D87D4A" buttonLink={productLink}/>
    </Container>
  )
}

export default ProductModal