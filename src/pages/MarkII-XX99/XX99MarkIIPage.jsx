import React from 'react'
import { Navbar, ProductAddToCartModal, YouMayAlsoLike } from '../../components'
import './XX99MarkIIPage.scss'
import 
  {
    XX99MarkTwoHeadphones,
    ProductMarkTwoG1,
    ProductMarkTwoG2,
    ProductMarkTwoG3,
    XX99MarkIFeature
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
          <img src={ProductMarkTwoG1} alt="featured photo"/>
          <img src={ProductMarkTwoG2} alt="featured photo"/>
          <img src={ProductMarkTwoG3} alt="featured photo"/>
        </div>
        <div className="featured__products">
          <h1>You may also like</h1>
          <YouMayAlsoLike 
            FeaturedProduct={XX99MarkIFeature} 
            FeaturedProductTitle="XX99 Mark I"
            />
        </div>
    </React.Fragment>
  )
}

export default XX99MarkIIPage