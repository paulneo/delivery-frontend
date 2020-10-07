import React from 'react';
import { Box, Login, Title, HaveAccount, InputForm, ButtonForm } from './styles'
import Input from '../Utilities/Input'
import Button from '../Utilities/Button'

const SigIn = () => {
  return (
    <>
      <Box>
        <Login>
          <div>
            <Title>Registrarse</Title>
          </div>
          <InputForm>
            <Input placeholder="Usuario"></Input>
          </InputForm>
          <InputForm>
            <Input type="password" placeholder="Contraseña"></Input>
          </InputForm>
          <ButtonForm>
            <Button text="Ingresar"></Button>
          </ButtonForm>
          <div>
            <HaveAccount>¿Ya tienes una cuenta? <span><a href="#">Iniciar Sesión</a></span></HaveAccount>
          </div>
        </Login>
      </Box>
    </>
  );
};

export default SigIn;