import React from 'react'
import { Container, Box } from '@chakra-ui/react'
import './Aboutus.scss'
const Aboutus = () => {
  return (
    <Container
        display='flex'
        alignItems='center'
        flexDirection='column'
        marginBottom='6rem'
    >
       <Box className="aboutus__image-container"></Box>
       <div className="aboutus__content">
            <p>Bringing you the <span>best</span> audio gear</p>
            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. </p>
       </div>
    </Container>
  )
}

export default Aboutus