import React, {useState} from "react";
import './navbar.scss';
import { ItemModal } from '../index';
import { Logo, Cart, HamburgerMenu, CloseMenu, XX99MarkOneHeadphones, Speakers } from "../../assets";

const Navbar = () => {

    const[navBarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(previousElement => !previousElement)
    }
    

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__menu-mobile display-mobile-only">
                    <button type="button" onClick={handleToggle}><img src={navBarOpen? CloseMenu : HamburgerMenu}/></button>
                </div>
                <div className="navbar__logo"><img src={Logo} alt="Website Logo"/></div>
                <div className="navbar__menu display-desktop-only">
                    <a href="#">HOME</a>
                    <a href="#">HEADPHONES</a>
                    <a href="#">SPEAKERS</a>
                    <a href="#">EARPHONES</a>
                </div>
                <div className="navbar__cart"><img src={Cart} alt="Checkout Cart"/></div>
            </div>
            <div className="navbar__container-line display-desktop-only"></div>
            {navBarOpen &&  
                <div className="navbar__modal display-mobile-only">
                    <ItemModal item={XX99MarkOneHeadphones} itemName="HEADPHONES"/>
                    <ItemModal item={Speakers} itemName="SPEAKERS"/>
                    <ItemModal item={XX99MarkOneHeadphones} itemName="EARPHONES"/>
                </div>
            }
        </div>
    )
}


export default Navbar