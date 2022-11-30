import React from 'react';
import './header.scss';
// TODO: Change the homepage Header for hr to appear
const Header = () => {
    return (
        <section className="header__container">
            <div className="header__info-container">
                <p>New Product</p>
                <strong><p>XX99 MARK II<br/>HEADPHONES</p></strong>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            </div>
        </section>
    )
}

export default Header