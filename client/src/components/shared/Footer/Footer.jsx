import React from 'react'
import { Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom' 
import './Footer.scss'
import { Logo, TwitterIcon, InstagramIcon, FacebookIcon} from '../../../assets'

const Footer = () => {
  return (
    <Container 
      className="footer__container"
      minWidth="100%"
    >
        <div className="footer">
          <div className="footer__bar"></div>
          <div className="footer__section">
            <img src={Logo} alt="Audiophile Logo" />
            <div className="footer__menu">
                <Link to="/">HOME</Link>
                <Link to="/headphones">HEADPHONES</Link>
                <Link to="/speakers">SPEAKERS</Link>
                <Link to="/earphones">EARPHONES</Link>
            </div>
          </div>
          <div className="footer__section-two">
            <div className="footer__description">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
                <p><strong>Copyright 2021. All Rights Reserved</strong></p>
            </div>
            <div className="footer__social-icons">
                <a href="#"><img src={FacebookIcon} /></a>
                <a href="#"><img src={TwitterIcon}/></a>
                <a href="#"><img src={InstagramIcon}/></a>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Footer