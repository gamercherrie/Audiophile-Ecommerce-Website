import React from 'react'
import { Navbar, SectionHeader, ProductModal, ItemModal, Aboutus, Footer} from '../../components'
import 
    {
      YX1WirelessEarphones,
      XX99MarkOneHeadphones, 
      Speakers, 
      Earphones
    }
      from '../../assets'
      
const EarphonesPage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <SectionHeader product="earphones"/>
        <ProductModal 
          productImage={YX1WirelessEarphones}
          productName="YX1 Wireless Headphones"
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          newProduct="new product"
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

export default EarphonesPage