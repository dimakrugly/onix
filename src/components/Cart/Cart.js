import React from 'react';
import { useTranslation } from 'react-i18next';
import './cart.scss';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { buttonVariants } from '../../constants/constants';
import { CartList } from '../CartList/CartList';

export const Cart = ({
  isCartOpen,
  onCartOpen,
  cartData,
  onCartRemove,
  onCartLowerSort,
  onCartHigherSort,
  onCartSearchGetValue,
  onCartItemDiscount,
  isDiscount,
  filteredProducts,
  onDragStartHandle,
  onDragOverHandle,
  onDropHandle,
  onItemSelected,
  onKeyDetect,
}) => {
  const { t } = useTranslation();
  return (
    <div className={`shopCart ${isCartOpen ? 'activeShopCard' : null}`}>
      <div className="cartButtonContainer">
        <Button
          text={t('cart.low')}
          variant={buttonVariants.cart}
          onClick={() => {
            onCartLowerSort(cartData);
          }}
        />
        <Button
          text={t('cart.high')}
          variant={buttonVariants.cart}
          onClick={() => {
            onCartHigherSort(cartData);
          }}
        />
        <input
          type="text"
          className="cartInput"
          placeholder={t('cart.search')}
          onChange={onCartSearchGetValue}
        />
        <Button type="button" variant={buttonVariants.cart} onClick={onCartOpen} id="closeButton" text="×" />
      </div>
      <div className="cartFlex">
        {filteredProducts.length
          ? (
            <CartList
              onCartRemove={onCartRemove}
              onCartItemDiscount={onCartItemDiscount}
              isDiscount={isDiscount}
              filteredProducts={filteredProducts}
              onDragStartHandle={onDragStartHandle}
              onDragOverHandle={onDragOverHandle}
              onDropHandle={onDropHandle}
              onItemSelected={onItemSelected}
              onKeyDetect={onKeyDetect}
            />
          )
          : (
            <div className="cartEmpty">
              <p>{t('cart.empty')}</p>
            </div>
          )}
      </div>
      <div className="cartButtonShopContainer">
        <Button type="button" variant={buttonVariants.cart} onClick={() => { }} text={t('cart.buy')} />
        <div className="cartTitle">
          <p>
            {`${t('cart.total')} ${cartData.reduce((acc, item) => acc + item.productData.price, 0)} $`}
          </p>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  cartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    productData: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  })).isRequired,
  onCartOpen: PropTypes.func.isRequired,
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
  onCartItemDiscount: PropTypes.func.isRequired,
  isDiscount: PropTypes.bool.isRequired,
  onDragStartHandle: PropTypes.func.isRequired,
  onDragOverHandle: PropTypes.func.isRequired,
  onDropHandle: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onKeyDetect: PropTypes.func.isRequired,
};
