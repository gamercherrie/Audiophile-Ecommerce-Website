import React from 'react'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike, ItemModal, Aboutus, Footer} from '../../components'
import './XX99MarkIIPage.scss'
import 
  {
    XX99MarkTwoHeadphones,
    ProductMarkTwoG1,
    ProductMarkTwoG2,
    ProductMarkTwoG3,
    XX99MarkIFeature,
    XX59Feature,
    ZX9SpeakerFeature,
    XX99MarkOneHeadphones,
    Speakers,
    Earphones
  }
    from '../../assets'
const XX99MarkIIPage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <ProductAddToCartModal 
          ImageofProduct={XX99MarkTwoHeadphones}
          productTitle="XX99 Mark II Headphones"
        />
        <div className="featured-photos__container">
          <div className="featured-photos__container-section1">
            <img src={ProductMarkTwoG1} alt="featured"/>
            <img src={ProductMarkTwoG2} alt="featured"/>
          </div>
          <div className="featured-photos__container-section2">
            <img src={ProductMarkTwoG3} alt="featured"/>
          </div>
        </div>
        <div className="featured__products-container">
          <h1>You may also like</h1>
          <div className="featured__products">
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

export default XX99MarkIIPage