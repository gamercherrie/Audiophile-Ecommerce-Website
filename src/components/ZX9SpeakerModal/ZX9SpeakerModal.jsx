import { Box } from '@chakra-ui/react'
import './ZX9SpeakerModal.scss'
import { ZX9Speakers } from '../../assets';
import { ProductButton } from '../index';

const ZX9SpeakerModal = ({productLink}) => {
    return(
        <div>
            <Box
                backgroundColor= '#D87D4A'
                borderRadius= '0.8rem'
                className="ZX9SpeakerModal__modal"
            >
                <img src={ZX9Speakers} alt="ZX9 Speakers"/>
                <p>ZX9 <br/>Speaker</p>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <ProductButton 
                    backgroundColor="#000000" 
                    customButtonClass="ZX9SpeakerModal__button"
                    buttonLink={productLink}
                />
            </Box>
        </div>
    )
}

export default ZX9SpeakerModal