import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { buttonVariants } from '../../constants/constants';

export const CartList = ({
  onCartRemove,
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
    <>
      {filteredProducts.map((item) => (
        <div
          role="button"
          tabIndex={0}
          onClick={() => {
            onItemSelected(item);
          }}
          onKeyDown={onKeyDetect}
          className={`cartCard ${item.active ? ' active' : null}`}
          key={item.key}
          draggable
          onDragStart={(event) => {
            onDragStartHandle(event, item);
          }}
          onDragOver={onDragOverHandle}
          onDrop={(event) => {
            onDropHandle(event, item);
          }}
        >
          <div className="cartImageContainer">
            <img src={item.productData.image} alt="img" />
          </div>
          <div className="cartTitle">
            <p>{item.productData.title}</p>
            {
              !isDiscount && (
                <Button
                  type="button"
                  variant={buttonVariants.cart}
                  text={t('cart.discount')}
                  onClick={() => {
                    onCartItemDiscount(item);
                  }}
                />
              )
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
    </>
  );
};

CartList.propTypes = {
  onCartRemove: PropTypes.func.isRequired,
  onCartItemDiscount: PropTypes.func.isRequired,
  isDiscount: PropTypes.bool.isRequired,
  filteredProducts: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    productData: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  })).isRequired,
  onDragStartHandle: PropTypes.func.isRequired,
  onDragOverHandle: PropTypes.func.isRequired,
  onDropHandle: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
  onKeyDetect: PropTypes.func.isRequired,
};
