import React, { useState } from 'react';
import './LongText.scss';
import PropTypes from 'prop-types';

export const LongText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  if (text.length <= maxLength) {
    return <p className="longTextP">{text}</p>;
  }

  return (
    <>
      <p className="longTextP">{showFullText ? text : `${text.slice(0, maxLength)} ...`}</p>
      <button className="longTextButton" type="button" onClick={() => setShowFullText(!showFullText)}>
        <span className="longTextButtonText">{showFullText ? 'Read Less' : 'Read More'}</span>
      </button>
    </>
  );
}

LongText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
