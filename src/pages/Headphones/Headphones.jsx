import React from 'react'
import './headphones.scss'
import { Navbar, SectionHeader, ProductModal, ItemModal, Aboutus, Footer} from '../../components'
import 
  { 
    XX99MarkTwoHeadphones, 
    XX99MarkOneHeadphonesFilled, 
    XX59Headphones, 
    XX99MarkOneHeadphones, 
    Speakers, 
    Earphones
  } 
    from '../../assets'

const Headphones = () => {
  return (
    <React.Fragment>
        <Navbar />
        <SectionHeader product="headphones"/>
        <ProductModal 
          productImage={XX99MarkTwoHeadphones}
          productName="XX99 MARK II HEADPHONES"
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          newProduct="new product"
          productLink="/headphones/XX99MarkIIHeadphones"
        />
        <ProductModal 
          productImage={XX99MarkOneHeadphonesFilled}
          productName="XX99 MARK I HEADPHONES"
          productDescription="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          productLink="/headphones/XX99MarkIHeadphones"
          style={{flexDirection: 'row-reverse'}}
        />
        <ProductModal 
          productImage={XX59Headphones}
          productName="XX59 HEADPHONES"
          productDescription="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          productLink="/headphones/XX59Headphones"
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

export default Headphones