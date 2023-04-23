import React, { memo } from 'react';
import '../scss/news.scss';
import PropTypes from 'prop-types';
import { LongText } from '../../../components/LongText/LongText';
import { MAX_LENGTH, PLUG_IMAGE } from '../../../constants/constants';

export const News = memo(({
  items,
}) => (
  <section className="news wrapper">
    <h2 className="newsMainTitle">Latest Art news</h2>
    <div className="newsArea">
      {items.map((item) => (
        <div key={item.title + item.index} className="newsCard">
          <div className="newsImageContainer">
            <img
              src={
              item.image_url === null ? PLUG_IMAGE : item.image_url
            }
              alt={item.title}
              className="newsImage"
            />
          </div>
          <div className="newsInfo">
            <div className="newsTitle">{item.title}</div>
            <LongText
              maxLength={MAX_LENGTH}
              text={item.content}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
))

News.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image_url: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    content: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
