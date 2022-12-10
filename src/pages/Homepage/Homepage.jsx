import React from 'react';
import './homepage.scss';
import { Navbar, Header, ItemModal, ZX9SpeakerModal, ZX7SpeakerModal, Aboutus } from '../../components';
import { XX99MarkOneHeadphones, Speakers, Earphones } from '../../assets';
import YX1EarphonesModal from '../../components/YX1EarphonesModal/YX1EarphonesModal';

const Homepage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Header/>
            <div className="homepage__item-modal">
                <ItemModal item={XX99MarkOneHeadphones} itemName="HEADPHONES"/>
                <ItemModal item={Speakers} itemName="SPEAKERS"/>
                <ItemModal item={Earphones} itemName="EARPHONES"/>
            </div>
            <div className="homepage__features">
                <ZX9SpeakerModal />
                <ZX7SpeakerModal />
                <YX1EarphonesModal />
            </div>
            <Aboutus />
        </React.Fragment>
    )
}

export default Homepage