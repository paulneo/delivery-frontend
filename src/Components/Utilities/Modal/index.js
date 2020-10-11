import React from 'react';
import Button from '../Button'
import {Content,Title,Panel,Close } from './styles'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({title, width = '420px',children,textButton, active,closeModal}) => {
  return (
    <Content active={active}>
      <Panel width={width}>
        <Close icon={faTimes} onClicK={closeModal}/>
        <Title>
          {title}
        </Title>
        {children}
        <Button text={textButton}>
        </Button>
      </Panel>
    </Content>
  );
};


export default Modal;