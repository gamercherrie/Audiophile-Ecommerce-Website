import React from 'react'
import './ZX7Page.scss'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike, ItemModal, Aboutus, Footer, ScrollTop} from '../../components'
import 
  {
    ZX7SpeakersFilled,
    ProductZX7G1,
    ProductZX7G2,
    ProductZX7G3,
    XX99MarkIFeature,
    XX59Feature,
    ZX9SpeakerFeature,
    XX99MarkOneHeadphones,
    Speakers,
    Earphones
  }
    from '../../assets'

const ZX7Page = () => {
  ScrollTop();
  return (
    <React.Fragment>
        <Navbar />
        <ProductAddToCartModal 
          ImageofProduct={ZX7SpeakersFilled}
          productTitle="ZX7 Speaker"
        />
        <div className="featured-photos__container">
          <div className="featured-photos__container-section1">
            <img src={ProductZX7G1} alt="featured"/>
            <img src={ProductZX7G2} alt="featured"/>
          </div>
          <div className="featured-photos__container-section2">
            <img src={ProductZX7G3} alt="featured"/>
          </div>
        </div>
        <div className="featured__products-container">
            <h1>You may also like</h1>
          <div className="featured__products">
            <YouMayAlsoLike
              FeaturedProduct={ZX9SpeakerFeature}
              FeaturedProductTitle="ZX9 Speaker"
              FeaturedLink="/speakers/ZX9Speakers"
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

export default ZX7Page