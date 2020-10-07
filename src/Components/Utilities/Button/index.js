import React, { useState} from 'react';
import PropTypes from 'prop-types'
import { Content } from './styles'

const Button = ({ text, onClick }) => {
  return <Content onClick={onClick}>{text}</Content>;
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
