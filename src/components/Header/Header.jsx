import React from 'react';
import { ProductButton } from '../index';
import './header.scss';
// TODO: Change the homepage Header for hr to appear
const Header = () => {

    return (
        <section className="header__container">
            <div className="header__info">
                <p>New Product</p>
                <p><strong>XX99 MARK II<br/>HEADPHONES</strong></p>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <ProductButton 
                    backgroundColor='#D87D4A'
                    buttonLink='/headphones/XX99MarkIIHeadphones'
                >
                    See Product
                </ProductButton>
            </div>
        </section>
    )
}

export default Header