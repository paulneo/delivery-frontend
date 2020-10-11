import React from 'react';
import CardSelected from '../CardSelected'
import Panel from '../../../Utilities/Panel'
import Button from '../../../Utilities/Button'

import {Title,Footer,Total,Text,Body}  from './styles'
const Order = () => {
  return (
    <Panel>
      <Title>Tu pedido</Title>
      <Body>
        <CardSelected name='1/2 Pollo a la leña' price='S/. 28.00' />
        <CardSelected name='1 Pollo a la leña' price='S/. 53.00' />
      </Body>
      <Footer>
        <Total>
          <Text>Total</Text>
          <Text>S/. 81.00</Text>
        </Total>
        <Button text='Realizar pedido'>
        </Button>
      </Footer>
    </Panel>
  );
};

export default Order;