import React from 'react'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike, ItemModal, Aboutus, Footer} from '../../components'
import 
  {
    XX59Headphones,
    XX99MarkOneHeadphones,
    ProductX59G1,
    ProductX59G2,
    ProductX59G3,
    XX99MarkIFeature,
    ZX9SpeakerFeature,
    Speakers,
    Earphones,
    XX99MarkIIFeature
  } from '../../assets'

const XX59Page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProductAddToCartModal 
        ImageofProduct={XX59Headphones}
        productTitle="XX59 Headphones"
      />
      <div className="featured-photos__container">
        <div className="featured-photos__container-section1">
          <img src={ProductX59G1} alt="featured"/>
          <img src={ProductX59G2} alt="featured"/>
        </div>
        <div className="featured-photos__container-section2">
          <img src={ProductX59G3} alt="featured"/>
        </div>
      </div>
      <div className="featured__products-container">
        <h1>You may also like</h1>
        <div className="featured__products">
          <YouMayAlsoLike
            FeaturedProduct={XX99MarkIIFeature}
            FeaturedProductTitle="XX99 Mark II"
            FeaturedLink="/headphones/XX99MarkIIHeadphones"
            />
            <YouMayAlsoLike
            FeaturedProduct={XX99MarkIFeature}
            FeaturedProductTitle="XX99 Mark I"
            FeaturedLink="/headphones/XX99MarkIHeadphones"
            />
            <YouMayAlsoLike
            FeaturedProduct={ZX9SpeakerFeature}
            FeaturedProductTitle="ZX9 Speaker"
            FeaturedLink="/speakers/ZX9Speakers"
            />
        </div>
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

export default XX59Page