import React from 'react';
import Panel from '../../../Utilities/Panel'
import Order from '../Order'
import {ContentDate,Date,Text,Action,Button} from './styles'
const Card = () => {
  return (
    <Panel>
      <ContentDate>
        <Text>Fecha</Text>
        <Date>07/09/2020 12:30 pm</Date>
      </ContentDate>
      <Order />
       <Action>
        <Button>Mas detalles</Button>
      </Action>
    </Panel>
  );
};

export default Card;