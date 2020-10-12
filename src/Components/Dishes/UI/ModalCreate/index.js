import React from 'react';
import Modal from '../../../Utilities/Modal'
import Input from '../../../Utilities/Input'
import { Title, Form, AddMore, Actions } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ModalCreate = () => {
  return (
    <Modal title='Crear Platillo' width = '653px' textButton='Crear' active>
      <div>
        <Form>
          <Input placeholder="Tipo de Comida"></Input>
          <Input placeholder="Nombre de Comida"></Input>
          <Input placeholder="Precio"></Input>
          <Input placeholder="Descripción"></Input>
        </Form>
        <Actions>
          <Title>Añadir Porción</Title>
          <AddMore>
            <FontAwesomeIcon icon={faPlus} />
          </AddMore>
        </Actions>
        <Form style={{display:"flex"}}>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Precio" />
        </Form>
      </div>
    </Modal>
  );
};

export default ModalCreate;