import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import './navbar.scss';
import { ItemModal, CartComponent } from '../index';
import { Logo, Cart, HamburgerMenu, CloseMenu, XX99MarkOneHeadphones, Speakers, Earphones } from "../../assets";
import { CartContext } from '../shared/CartProvider/CartProvider';

const Navbar = () => {
    const { cart = [] } = useContext(CartContext) || {};
    const[navBarOpen, setNavbarOpen] = useState(false)
    const[ showModal, setShowModal] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(previousElement => !previousElement)
    }
    
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    const cartModal = () => {
       setShowModal((prevState) => !prevState)
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__menu-mobile display-mobile-only">
                    <button type="button" onClick={handleToggle}><img src={navBarOpen? CloseMenu : HamburgerMenu} alt="Navigation Button"/></button>
                </div>
                <div className="navbar__logo"><Link to="/"><img src={Logo} alt="Website Logo"/></Link></div>
                <div className="navbar__menu display-desktop-only">
                   <Link to="/">HOME</Link>
                   <Link to="/headphones">HEADPHONES</Link>
                   <Link to="/speakers">SPEAKERS</Link>
                   <Link to="/earphones">EARPHONES</Link>
                </div>
                <div className="navbar__cart">
                    <img src={Cart} alt="Checkout Cart" onClick={cartModal}/>
                    <div className="navbar__count"><p>{totalQuantity}</p></div>
                </div>
                {showModal && <CartComponent/> }
            </div>
            {navBarOpen &&  
                <div className="navbar__modal display-mobile-only">
                    <div className="navbar__modal-container">
                        <ItemModal item={XX99MarkOneHeadphones} itemName="HEADPHONES" itemLink="headphones"/>
                        <ItemModal item={Speakers} itemName="SPEAKERS" itemLink="speakers"/>
                        <ItemModal item={Earphones} itemName="EARPHONES" itemLink="earphones"/>
                    </div>
                </div>
            }
        </div>
    )
}


export default Navbar