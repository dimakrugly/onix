import React from 'react';
import { useTranslation } from 'react-i18next';
import './collection.scss';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/Button/Button';
import { buttonVariants } from '../../../../constants/constants';
import { Image } from '../../../../components/Image/Image';

export const Collection = ({
  items, onCartAdd, cartData,
}) => {
  const { t } = useTranslation();
  return (
    <section className="collection" id="collection">
      <div>
        <div className="wrapper collectionWrapper">
          <p className="aboutName workspaceCatName">{t('collection.store')}</p>
          <h2 className="workspaceTitle collectionMainText">{t('collection.collection')}</h2>
          <div className="collectionContainer">
            {items.map(({
              key,
              image,
              title,
              price,
            }) => (
              <div className="collectionProductCard" key={key}>
                <div className="collectionImageContainer">
                  <Image className="collectionImage" src={image} alt="imageCard" />
                </div>
                <p className="collectionTitle">{title}</p>
                <p className="collectionPrice">{`$ ${price},00 USD`}</p>
                <Button
                  disabled={cartData.some((cartItem) => cartItem.key === key)}
                  text={cartData.some((cartItem) => cartItem.key === key) ? t('collection.done') : t('collection.cartButton')}
                  variant={buttonVariants.small}
                  onClick={() => {
                    onCartAdd({
                      key,
                      image,
                      title,
                      price,
                    });
                  }}
                />
                <div className="collectionDivider" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="collectionButtonArea">
        <Button text={t('collection.view')} />
      </div>
    </section>
  );
};

Collection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  onCartAdd: PropTypes.func.isRequired,
  cartData: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })),
};

Collection.defaultProps = {
  cartData: [],
};
