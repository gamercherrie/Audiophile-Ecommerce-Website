import React from 'react'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike, ItemModal, Aboutus, Footer} from '../../components'
import 
  {
    ZX9SpeakersFilled,
    XX99MarkOneHeadphones,
    ProductZX9G1,
    ProductZX9G2,
    ProductZX9G3,
    XX99MarkIFeature,
    XX59Feature,
    Speakers,
    Earphones,
    ZX7Feature
  } from '../../assets'

const ZX9Page = () => {
  return (
    <React.Fragment>
    <Navbar />
    <ProductAddToCartModal 
      ImageofProduct={ZX9SpeakersFilled}
      productTitle="ZX9 Speaker"
    />
    <div className="featured-photos__container">
      <img src={ProductZX9G1} alt="featured"/>
      <img src={ProductZX9G2} alt="featured"/>
      <img src={ProductZX9G3} alt="featured"/>
    </div>
    <div className="featured__products">
      <h1>You may also like</h1>
      <YouMayAlsoLike 
        FeaturedProduct={ZX7Feature} 
        FeaturedProductTitle="ZX7 Speaker"
        FeaturedLink="/headphones/ZX7Speakers"
        />
        <YouMayAlsoLike 
        FeaturedProduct={XX99MarkIFeature} 
        FeaturedProductTitle="XX99 Mark I"
        FeaturedLink="/headphones/XX99MarkIHeadphones"
        />
        <YouMayAlsoLike 
        FeaturedProduct={XX59Feature} 
        FeaturedProductTitle="XX59"
        FeaturedLink="/headphones/XX59Headphones"
        />
    </div>
    <div className="featured__item-modal">
        <ItemModal item={XX99MarkOneHeadphones} itemName="HEADPHONES" itemLink="headphones"/>
        <ItemModal item={Speakers} itemName="SPEAKERS" itemLink="speakers"/>
        <ItemModal item={Earphones} itemName="EARPHONES" itemLink="earphones"/>
    </div>
    <Aboutus />
    <Footer />
</React.Fragment>
  )
}

export default ZX9Page