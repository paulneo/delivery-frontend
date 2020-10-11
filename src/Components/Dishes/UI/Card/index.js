import React from 'react';
import { Title,ContentTitle,Action,Text,Content, Button } from './styles'
const Card = ({name, description, price}) => {
  return (
    <Content>
      <ContentTitle>
        <Title>
          {name}
        </Title>
        <Title>
          {price}
        </Title>
      </ContentTitle>
      <Text>
        {description}
      </Text>
      <Action>
        <Button>Editar</Button>
      </Action>
    </Content>
  );
};

export default Card;