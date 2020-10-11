import React from 'react';
import Tag from '../Tag'
import { Content,Button,Flex } from './styles'

const Filter = () => {
  return (
    <Content>
      <Flex>
        <Tag active name='Pollos'/> 
        <Tag active={false} name='Bebidas'/>
      </Flex>
      <Button>Crear Platillo</Button>
    </Content>
  );
};

export default Filter;