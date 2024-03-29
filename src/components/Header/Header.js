import React, { memo, useContext } from 'react';
import './header.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import image from '../../assets/img/cart.png';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';
import { Switcher } from '../Switcher/Switcher';
import ThemeContext from '../../providers/ThemeProvider';

export const Header = memo(({
  onCartOpen,
  isMobileMenuOpen,
  onMobileMenuOpen,
}) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <header data-theme={theme}>
      <LangSwitcher />
      <div className="wrapper">
        <div className="headerContainer">
          <h3 className="headerLogo">Pompeo</h3>
          <nav className="headerMenu">
            <ul className="headerList">
              <li className="headerItem">
                <a to="/onix">{t('header.home')}</a>
              </li>
              <li className="headerItem">
                <a href="#workspace">
                  {t('header.about')}
                </a>
              </li>
              <li className="headerItem">
                <a href="#collection">
                  {t('header.shop')}
                </a>
              </li>
              <li className="headerItem">
                <a href="#footer">
                  {t('header.contact')}
                </a>
              </li>
            </ul>
          </nav>
          <div className="divider" />
          <button type="button" className="headerCart" onClick={onCartOpen}>
            <img className="headerCartImg" src={image} alt="cart" />
            <p className="headerCartText">{t('header.cart')}</p>
          </button>
          <div className="headerSwitch">
            <Switcher />
          </div>
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
                  {t('header.home')}
                </a>
              </li>
              <li className="headerItemMobile">
                <a href="#workspace">
                  {t('header.about')}
                </a>
              </li>
              <li className="headerItemMobile">
                <a href="#collection">
                  {t('header.shop')}
                </a>
              </li>
              <li className="headerItemMobile">
                <a href="#footer">
                  {t('header.contact')}
                </a>
              </li>
              <li className="headerItemMobile">
                <button type="button" onClick={onCartOpen}>
                  {t('header.cart')}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.propTypes = {
  onCartOpen: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onMobileMenuOpen: PropTypes.func.isRequired,
};
