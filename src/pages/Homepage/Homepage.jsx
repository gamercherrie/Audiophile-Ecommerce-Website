import React from 'react';
import './homepage.scss';
import { Navbar, Header, ItemModal} from '../../components';
import { XX99MarkOneHeadphones, Speakers, Earphones } from '../../assets';

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
        </React.Fragment>
    )
}

export default Homepage