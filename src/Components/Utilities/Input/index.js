import React from 'react';
import {InputStyle} from './style'
const Input = ({ type = 'text', placeholder = ''}) => {
  return <InputStyle type={type} placeholder={placeholder} />;
};

export default Input;