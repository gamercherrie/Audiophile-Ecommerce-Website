import React from 'react'
import './XX99MarkIPage.scss'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike, ItemModal, Aboutus, Footer} from '../../components'
import 
  {
    XX99MarkOneHeadphonesFilled,
    XX99MarkOneHeadphones,
    ProductMarkOneG1,
    ProductMarkOneG2,
    ProductMarkOneG3,
    XX59Feature,
    ZX9SpeakerFeature,
    Speakers,
    Earphones,
    XX99MarkIIFeature
  } from '../../assets'

const XX99MarkIPage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <ProductAddToCartModal 
          ImageofProduct={XX99MarkOneHeadphonesFilled}
          productTitle="XX99 Mark I Headphones"
        />
        <div className="featured-photos__container">
          <div className="featured-photos__container-section1">
            <img src={ProductMarkOneG1} alt="featured"/>
            <img src={ProductMarkOneG2} alt="featured"/>
          </div>
          <div className="featured-photos__container-section2">
            <img src={ProductMarkOneG3} alt="featured"/>
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
              FeaturedProduct={XX59Feature}
              FeaturedProductTitle="XX59"
              FeaturedLink="/headphones/XX59Headphones"
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

export default XX99MarkIPage