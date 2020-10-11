import React from 'react';
import Tag from '../Tag'
import { Content } from './styles'

const Filter = () => {
  return (
    <Content>
      <Tag active name='Pollos'/> 
      <Tag active={false} name='Bebidas'/>
    </Content>
  );
};

export default Filter;