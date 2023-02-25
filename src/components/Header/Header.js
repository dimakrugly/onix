import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import image from '../../assets/img/cart.png';

export const Header = ({
  onCartOpen,
  isMobileMenuOpen,
  onMobileMenuOpen,
}) => (
  <header>
    <div className="wrapper">
      <div className="headerContainer">
        <h3 className="headerLogo">Pompeo</h3>
        <nav className="headerMenu">
          <ul className="headerList">
            <li className="headerItem">
              <a href="#about">
                HOME
              </a>
            </li>
            <li className="headerItem">
              <a href="#workspace">
                ABOUT
              </a>
            </li>
            <li className="headerItem">
              <a href="#collection">
                SHOP
              </a>
            </li>
            <li className="headerItem">
              <a href="#footer">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div className="divider" />
        <button type="button" className="headerCart" onClick={onCartOpen}>
          <img className="headerCartImg" src={image} alt="cart" />
          <p className="headerCartText">Cart</p>
        </button>
      </div>
      <button type="button" className="burger" onClick={onMobileMenuOpen}>
        <div className="burgerLine" />
        <div className="burgerLine" />
        <div className="burgerLine" />
      </button>
      <div className={` ${isMobileMenuOpen ? 'headerMenuMobile' : 'closed'}`}>
        <nav>
          <ul className="headerListMobile">
            <li className="headerItemMobile">
              <a href="#about">
                HOME
              </a>
            </li>
            <li className="headerItemMobile">
              <a href="#workspace">
                ABOUT
              </a>
            </li>
            <li className="headerItemMobile">
              <a href="#collection">
                SHOP
              </a>
            </li>
            <li className="headerItemMobile">
              <a href="#footer">
                CONTACT
              </a>
            </li>
            <li className="headerItemMobile">
              <button type="button" onClick={onCartOpen}>
                CART
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
Header.propTypes = {
  onCartOpen: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onMobileMenuOpen: PropTypes.func.isRequired,
};
