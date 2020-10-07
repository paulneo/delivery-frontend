import React from 'react';
import { Box, Login, Title, HaveAccount, InputForm, ButtonForm } from './styles'
import Input from '../Utilities/Input'
import Button from '../Utilities/Button'

const LogIn = () => {
   return (
    <>

      <Box>
        <Login>
          <div>
            <Title>Iniciar Sesion</Title>
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
            <HaveAccount>¿No tienes una cuenta? <span><a href="#">Registrate aquí</a></span></HaveAccount>
          </div>
        </Login>
      </Box>

    </>
  );
};

export default LogIn;


