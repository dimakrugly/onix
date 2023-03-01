import PropTypes from 'prop-types';
import React from 'react';
import './home.scss';
import { Header } from '../../components/Header/Header';
import { About } from './components/About/About';
import { Workspace } from './components/Workspace/Workspace';
import { Ceramics } from './components/Ceramics/Ceramics';
import { Collection } from './components/Collection/Collection';
import { Banner } from './components/Banner/Banner';
import { Subscribe } from './components/Subscribe/Subscribe';
import { Footer } from '../../components/Footer/Footer';
import { Cart } from '../../components/Cart/Cart';
import { ScrollUpButton } from '../../components/ScrollUpButton/ScrollUpButton';

export const HomeView = ({
  items,
  onChangeMailInput,
  isError,
  value,
  onBlur,
  touched,
  onCheckedMail,
  checked,
  disabled,
  isCartOpen,
  onCartOpen,
  onCartAdd,
  cartData,
  onCartRemove,
  onCartLowerSort,
  onCartHigherSort,
  onCartSearchGetValue,
  isMobileMenuOpen,
  onMobileMenuOpen,
  onCartItemDiscount,
  isDiscount,
  filteredProducts,
  isShownScrollButton,
  onScrollUp,
}) => (
  <>
    <ScrollUpButton isShownScrollButton={isShownScrollButton} onClick={onScrollUp} />
    <Header
      onCartOpen={onCartOpen}
      cartData={cartData}
      onCartRemove={onCartRemove}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuOpen={onMobileMenuOpen}
    />
    <Cart
      isCartOpen={isCartOpen}
      onCartOpen={onCartOpen}
      onCartRemove={onCartRemove}
      cartData={cartData}
      onCartLowerSort={onCartLowerSort}
      onCartHigherSort={onCartHigherSort}
      onCartSearchGetValue={onCartSearchGetValue}
      onCartItemDiscount={onCartItemDiscount}
      isDiscount={isDiscount}
      filteredProducts={filteredProducts}
    />
    <About />
    <Workspace />
    <Ceramics />
    <Collection
      items={items}
      onCartAdd={onCartAdd}
      cartData={cartData}
    />
    <Banner />
    <Subscribe
      onChangeMailInput={onChangeMailInput}
      isError={isError}
      value={value}
      onBlur={onBlur}
      touched={touched}
      onCheckedMail={onCheckedMail}
      checked={checked}
      disabled={disabled}
    />
    <Footer />
  </>
);

HomeView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  onChangeMailInput: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  onCheckedMail: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  onCartOpen: PropTypes.func.isRequired,
  onCartAdd: PropTypes.func.isRequired,
  cartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    productData: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  })).isRequired,
  onCartRemove: PropTypes.func.isRequired,
  onCartLowerSort: PropTypes.func.isRequired,
  onCartHigherSort: PropTypes.func.isRequired,
  onCartSearchGetValue: PropTypes.func.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    productData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  })).isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  onMobileMenuOpen: PropTypes.func.isRequired,
  onCartItemDiscount: PropTypes.func.isRequired,
  isDiscount: PropTypes.bool.isRequired,
  isShownScrollButton: PropTypes.bool.isRequired,
  onScrollUp: PropTypes.func.isRequired,
};

HomeView.defaultProps = {
  value: '',
};
