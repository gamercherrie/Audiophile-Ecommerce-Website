import React from 'react';
import './homepage.scss';
import { Navbar, Header, ItemModal, ZX9SpeakerModal, ZX7SpeakerModal, Aboutus, Footer, ScrollTop } from '../../components';
import { XX99MarkOneHeadphones, Speakers, Earphones } from '../../assets';
import YX1EarphonesModal from '../../components/YX1EarphonesModal/YX1EarphonesModal';

const Homepage = () => {
    ScrollTop();
    
    return (
        <React.Fragment>
            <Navbar/>
            <Header/>
            <div className="homepage__item-modal">
                <ItemModal item={XX99MarkOneHeadphones} itemName="HEADPHONES" itemLink="headphones"/>
                <ItemModal item={Speakers} itemName="SPEAKERS" itemLink="speakers"/>
                <ItemModal item={Earphones} itemName="EARPHONES" itemLink="earphones"/>
            </div>
            <div className="homepage__features">
                <ZX9SpeakerModal productLink="/speakers/ZX9Speakers"/>
                <ZX7SpeakerModal productLink="/speakers/ZX7Speakers"/>
                <YX1EarphonesModal productLink="/earphones/YX1WirelessEarphones"/>
            </div>
            <Aboutus />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage