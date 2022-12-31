import React from 'react'
import { Container } from '@chakra-ui/react'
import { Navbar, ProductModal, SectionHeader, ItemModal, Aboutus, Footer } from '../../components'
import 
    { 
      ZX9SpeakersFilled, 
      ZX7SpeakersFilled,
      XX99MarkOneHeadphones, 
      Speakers, 
      Earphones
    } 
      from '../../assets'

const SpeakersPage = () => {
  return (
   <React.Fragment>
        <Navbar/>
        <SectionHeader product="Speakers" />
        <ProductModal 
            productImage={ZX9SpeakersFilled}
            productName="ZX9 Speaker"
            productDescription="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            newProduct="new product"
            productLink="/speakers/ZX9Speakers"
        />
         <ProductModal 
            productImage={ZX7SpeakersFilled}
            productName="ZX7 Speaker"
            productDescription="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        />
         <div className="modal__container">
          <ItemModal item={XX99MarkOneHeadphones} itemName="HEADPHONES" itemLink="headphones"/>
          <ItemModal item={Speakers} itemName="SPEAKERS" itemLink="speakers"/>
          <ItemModal item={Earphones} itemName="EARPHONES" itemLink="earphones"/>
        </div>
        <Aboutus />
        <Footer />
    </React.Fragment>
  )
}

export default SpeakersPage