import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button data-id="toggle" className="btn" onClick={() => props.setShowDropdown(prev => !prev)}>
    <span>Account Settings</span>
    <i className="material-icons">public</i>
  </button>
);

Button.propTypes = {
  setShowDropdown: PropTypes.func.isRequired,
};

export default Button;