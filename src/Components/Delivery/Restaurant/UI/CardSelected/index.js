import React from 'react';
import { Title,ContentTitle,Action,Text,Content, Button,Icon,Footer,Number } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

const CardSelected = ({name, price, number = 1}) => {
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
      <Footer>
      <Number>{number}</Number>
        <Action>
          <Icon  color='#EA3546'>
            <FontAwesomeIcon icon={faMinus}/>
          </Icon>
          <Icon color='#08C497'>
            <FontAwesomeIcon icon={faPlus}/>
          </Icon>
        </Action>
        </Footer>
    </Content>
  );
};

export default CardSelected;