import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ThemeContext from '../../providers/ThemeProvider';
import './home.scss';
import { Header } from '../../components/Header/Header';
import { About } from './components/About';
import { Workspace } from './components/Workspace';
import { Ceramics } from './components/Ceramics';
import { Collection } from './components/Collection';
import { Banner } from './components/Banner';
import { Subscribe } from './components/Subscribe';
import { Footer } from '../../components/Footer/Footer';
import { Cart } from '../../components/Cart/Cart';
import { UpButton } from '../../components/UpButton/UpButton';
import { News } from './components/News';

export const HomeView = ({
  items,
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
  onDragStartHandle,
  onDragOverHandle,
  onDropHandle,
  onItemSelected,
  onKeyDetect,
  onScrollToTop,
  isShownScrollButton,
  newsItems,
  newsIsLoading,
  newsFailure,
  getNews,
  formikData,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="home" data-theme={theme}>
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
        onDragStartHandle={onDragStartHandle}
        onDragOverHandle={onDragOverHandle}
        onDropHandle={onDropHandle}
        onItemSelected={onItemSelected}
        onKeyDetect={onKeyDetect}
      />
      <About />
      <Workspace />
      <Ceramics />
      <Collection
        items={items}
        onCartAdd={onCartAdd}
        cartData={cartData}
      />
      <News
        items={newsItems}
        isLoading={newsIsLoading}
        newsFailure={newsFailure}
        getNews={getNews}
      />
      <Banner />
      <Subscribe
        formikData={formikData}
      />
      <Footer />
      <UpButton onClick={onScrollToTop} isShownScrollButton={isShownScrollButton} />
    </div>
  );
};

HomeView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
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
  onDragStartHandle: PropTypes.func.isRequired,
  onDragOverHandle: PropTypes.func.isRequired,
  onDropHandle: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onKeyDetect: PropTypes.func.isRequired,
  onScrollToTop: PropTypes.func.isRequired,
  isShownScrollButton: PropTypes.bool.isRequired,
  newsItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  newsIsLoading: PropTypes.bool.isRequired,
  newsFailure: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  getNews: PropTypes.func.isRequired,
  formikData: PropTypes.shape({
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    errors: PropTypes.objectOf(PropTypes.string).isRequired,
    isValid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  }).isRequired,
};
