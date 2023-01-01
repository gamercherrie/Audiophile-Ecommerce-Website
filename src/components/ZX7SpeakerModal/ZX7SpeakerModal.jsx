import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import './ZX7SpeakerModal.scss'
import ProductButton from '../shared/Button/ProductButton'

const ZX7SpeakerModal = ({productLink}) => {
  return (
    <Container display="flex" justifyContent="center">
        <Box 
            width= "327px"
            borderRadius="8px"
            className="ZX7SpeakerModal__container"
        >
            <div className="ZX7SpeakerModal__content">
                <p>ZX7 Speaker</p>
                <ProductButton 
                    backgroundColor="transparent" 
                    customButtonClass="ZX7SpeakerModal__button"
                    buttonLink={productLink}
                />
            </div>
        </Box>
    </Container>
  )
}

export default ZX7SpeakerModal