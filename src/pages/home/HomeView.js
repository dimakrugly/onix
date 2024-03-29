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
  showSnackBar,
  refSnackBar,
  register,
  handleSubmit,
  errors,
  isValid,
  newsData,
  newsIsFetching,
  newsError,
  newsIsSuccess,
  newsRefetch,
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
        newsData={newsData}
        newsIsFetching={newsIsFetching}
        newsError={newsError}
        newsIsSuccess={newsIsSuccess}
        newsRefetch={newsRefetch}
      />
      <Banner />
      <Subscribe
        showSnackBar={showSnackBar}
        refSnackBar={refSnackBar}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
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
  showSnackBar: PropTypes.func.isRequired,
  refSnackBar: PropTypes.shape({
    current: PropTypes.shape({
      show: PropTypes.func.isRequired,
      hide: PropTypes.func.isRequired,
    }),
  }),
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    checkbox: PropTypes.string,
  }),
  isValid: PropTypes.bool.isRequired,
  newsData: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image_url: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]),
      ]),
      content: PropTypes.string.isRequired,
    }).isRequired),
  }),
  newsIsFetching: PropTypes.bool.isRequired,
  newsError: PropTypes.shape({
    error: PropTypes.string,
  }),
  newsIsSuccess: PropTypes.bool.isRequired,
  newsRefetch: PropTypes.func.isRequired,
};

HomeView.defaultProps = {
  errors: PropTypes.shape({
    email: '',
    checkbox: '',
  }),
  refSnackBar: {},
  newsData: {},
  newsError: {},
}
