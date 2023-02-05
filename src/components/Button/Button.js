import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({text}) => {
    return (
        <button type="button" className="button"><span className="buttonText">{text}</span></button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
};


