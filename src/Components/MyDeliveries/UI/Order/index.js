import React from 'react';
import {Content,Title,Name,Number,Text,Total,TextTotal,Info} from './styles'

const Order = () => {
  return (
     <Content>
        <Title>Tu pedido</Title>
        <Info>
          <Name>
            <Number>1</Number>
            <Text>1/2 Pollo a la leña</Text>
          </Name>
          <Text>S/. 28.00 </Text>
        </Info>
        <Info>
          <Name>
            <Number>1</Number>
            <Text>1 Pollo a la leña</Text>
          </Name>
          <Text>S/. 53.00 </Text>
        </Info>
        <Total>
          <TextTotal>TOTAL</TextTotal>
          <TextTotal>S/. 81.00 </TextTotal>
        </Total>
      </Content>
  );
};

export default Order;