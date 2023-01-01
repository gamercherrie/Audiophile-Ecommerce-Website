import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import { ProductButton } from '../index'
import './YX1EarphonesModal.scss'

const YX1EarphonesModal = ({productLink}) => {
  return (
    <Container 
        display='flex' 
        flexDirection='column'
        alignItems="center"
    >
        <Box 
            className="YX1EarphonesModal__container-product-image"
        >
        </Box>
        <Box className="YX1EarphonesModal__container-content">
            <div className="YX1EarphonesModal__content-desc">
                <p>YX1 Earphones</p>
                <ProductButton 
                    backgroundColor="transparent"
                    customButtonClass="YX1EarphonesModal__button"
                    buttonLink={productLink}
                />
            </div>
        </Box>
    </Container>
  )
}

export default YX1EarphonesModal