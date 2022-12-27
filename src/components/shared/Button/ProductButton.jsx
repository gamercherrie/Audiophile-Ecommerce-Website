import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
const ProductButton = (props) => {
    const { backgroundColor, customButtonClass, buttonLink } = props;
    return(
      <Link to={buttonLink}>
        <Button
            bg = {backgroundColor}
            color = 'white'
            border = 'none'
            outline = 'none'
            padding = '2.5rem 3rem'
            fontWeight = '700'
            fontSize = '1.3rem'
            lineHeight = '1.8rem'
            fontFamily = 'Manrope'
            letterSpacing = '1px'
            textTransform = 'uppercase'
            mt = '4.3rem'
            cursor = 'pointer'
            borderRadius = 'none'
            className={customButtonClass}
        >
            See Product
        </Button>
      </Link>
    )
}

export default ProductButton