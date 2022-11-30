import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.scss';
// TODO: Change the homepage Header for hr to appear
const Header = () => {
    const navigate = useNavigate();

    const navigateToMarkIIPage = () => {
        navigate('/#');
    };

    return (
        <section className="header__container">
            <div className="header__info">
                <p>New Product</p>
                <p><strong>XX99 MARK II<br/>HEADPHONES</strong></p>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button onClick={navigateToMarkIIPage}>See Product</button>
            </div>
        </section>
    )
}

export default Header