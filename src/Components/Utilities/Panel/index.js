import React from 'react';
import { Content } from './styles'
const Panel = ({ children, padding = true}) => {
  return <Content padding={padding} >{children}</Content>;
};

export default Panel;