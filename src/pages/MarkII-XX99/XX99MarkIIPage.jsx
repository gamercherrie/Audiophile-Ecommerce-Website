import React from 'react'
import { Navbar, ProductAddToCartModal } from '../../components'
import 
  {
    XX99MarkTwoHeadphones
  }
    from '../../assets'
const XX99MarkIIPage = () => {
  return (
    <React.Fragment>
        <Navbar />
        <ProductAddToCartModal 
          ImageofProduct={XX99MarkTwoHeadphones}
          newProduct="new product"
          productTitle="XX99 Mark II Headphones"
          productDescription="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          price="2999"
        />
    </React.Fragment>
  )
}

export default XX99MarkIIPage