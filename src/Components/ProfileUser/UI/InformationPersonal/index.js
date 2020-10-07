import React from 'react';
import Panel from "../../../Utilities/Panel";
import Input from '../../../Utilities/Input'
import { Title, Form, AddMore, Actions } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from '../../../Utilities/Button'

const InformationPersonal = () => {
  return (
    <Panel>
      <div>
        <Title>Información Personal</Title>
        <Form>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Dni" />
          <Input type="text" placeholder="Numero de Contacto" />
        </Form>
        <Actions>
          <Title>Ubicación</Title>
          <AddMore>
            <FontAwesomeIcon icon={faPlus} />
          </AddMore>
        </Actions>
        <Form>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Número" />
          <Input type="text" placeholder="Referencia" />
        </Form>
      </div>
      <div>
        <Button text='Aceptar'></Button>
      </div>
    </Panel>
  );
};

export default InformationPersonal;