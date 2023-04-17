import React, { useState } from 'react';
import './LongText.scss';
import PropTypes from 'prop-types';

export const LongText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  if (text.length <= maxLength) {
    return <p className="longTextP">{text}</p>;
  }

  if (showFullText) {
    return (
      <>
        <p className="longTextP">{text}</p>
        <button className="longTextButton" type="button" onClick={() => setShowFullText(false)}>
          <span className="longTextButtonText">Read Less</span>
        </button>
      </>
    );
  }
  return (
    <>
      <p className="longTextP">{`${text.slice(0, maxLength)}...`}</p>
      <button className="longTextButton" type="button" onClick={() => setShowFullText(true)}>
        {' '}
        <span className="longTextButtonText">Read More</span>
      </button>
    </>
  );
}

LongText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
