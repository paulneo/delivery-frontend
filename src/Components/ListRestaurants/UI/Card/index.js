import React from 'react';
import { Title,Restaurant, Action, Content, Button, Img } from './styles'
const Card = ({name}) => {
  return (
    <Content>
    <Img></Img>
    <Restaurant>
        <Title>
          { name }
        </Title>
        <Action>
            <Button>4.6</Button>
        </Action>
    </Restaurant>
    </Content>
  );
};

export default Card;