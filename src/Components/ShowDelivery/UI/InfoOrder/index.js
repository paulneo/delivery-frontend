import React from 'react';
import Panel from "../../../Utilities/Panel";
import { Title, Actions,Content,Text,Tag,Info,Number, Name,ContentInfo,Total,TextTotal,Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from '../../../Utilities/Button'

const InfoOrder = () => {
  return (
    <Panel>
      <Container>
        <div>
          <Content>
            <Title>Información Personal</Title>
            <Text>Jean Paul Mamani Coaquira</Text>
            <Text>72213125</Text>
          </Content>
          <Content>
            <Title>Fecha</Title>
            <Text>07/09/2020 12:20 pm</Text>
          </Content>
          <ContentInfo>
            <Title>Tu pedido</Title>
            {/* <Actions>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </Actions> */}
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
          </ContentInfo>
        </div>
        <Button text='Aceptar'></Button>
      </Container>
    </Panel>
  );
};

export default InfoOrder;