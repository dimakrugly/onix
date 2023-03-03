import React from 'react';
import { useTranslation } from 'react-i18next';
import './cart.scss';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { buttonVariants } from '../../constants/constants';

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
        {cartData.length === 0
          ? (
            <div className="cartEmpty">
              <p>{t('cart.empty')}</p>
            </div>
          )
          : filteredProducts.map((item) => (
            <div className="cartCard" key={item.key}>
              <div className="cartImageContainer">
                <img src={item.productData.image} alt="img" />
              </div>
              <div className="cartTitle">
                <p>{item.productData.title}</p>
                {
                      !isDiscount ? (
                        <Button
                          type="button"
                          variant={buttonVariants.cart}
                          text={t('cart.discount')}
                          onClick={() => {
                            onCartItemDiscount(item);
                          }}
                        />
                      )
                        : null
                    }
              </div>
              <div className="cartTitle">
                <p>{`${item.productData.price} $`}</p>
              </div>

              <div className="cartButtonContainer removeButton">
                <Button
                  type="button"
                  variant={buttonVariants.cart}
                  text={t('cart.remove')}
                  onClick={() => {
                    onCartRemove(item);
                  }}
                />
              </div>
            </div>
          ))}
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
};
