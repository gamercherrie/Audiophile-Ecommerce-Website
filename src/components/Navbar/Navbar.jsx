import './navbar.scss';
import Logo from '../../assets/shared/desktop/logo.svg';
import Cart from '../../assets/shared/desktop/icon-cart.svg';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo"><img src={Logo} alt="Website Logo"/></div>
                <div className="navbar__menu">
                    <a href="#">HOME</a>
                    <a href="#">HEADPHONES</a>
                    <a href="#">SPEAKERS</a>
                    <a href="#">EARPHONES</a>
                </div>
                <div className="navbar__cart"><img src={Cart} alt="Checkout Cart"/></div>
            </div>
            <div className="navbar__container-line"></div>
        </div>
    )
}

export default Navbar