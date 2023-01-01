import React from 'react'
import './YX1Page.scss'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike, ItemModal, Aboutus, Footer} from '../../components'
import 
  {
    YX1WirelessEarphonesFilled,
    ProductYX1G1,
    ProductYX1G2,
    ProductYX1G3,
    XX99MarkIFeature,
    XX59Feature,
    ZX9SpeakerFeature,
    XX99MarkOneHeadphones,
    Speakers,
    Earphones
  }
    from '../../assets'

const YX1Page = () => {
  return (
    <React.Fragment>
        <Navbar />
        <ProductAddToCartModal 
        ImageofProduct={YX1WirelessEarphonesFilled}
        productTitle="YX1 Wireless Earphones"
        />
        <div className="featured-photos__container">
        <img src={ProductYX1G1} alt="featured"/>
        <img src={ProductYX1G2} alt="featured"/>
        <img src={ProductYX1G3} alt="featured"/>
        </div>
        <div className="featured__products">
        <h1>You may also like</h1>
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

export default YX1Page