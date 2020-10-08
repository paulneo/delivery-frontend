import React from 'react';
import { Box, Login, Title, HaveAccount, InputForm, ButtonForm } from './styles'
import Input from '../Utilities/Input'
import Button from '../Utilities/Button'
import {Link} from 'react-router-dom'

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
            <Link to='/'>
              <Button text="Ingresar"></Button>
            </Link>
          </ButtonForm>
          <div>
            <HaveAccount>
              ¿No tienes una cuenta? {" "}
              <span>
                <Link to="signin">Registrate aquí</Link>
              </span>
            </HaveAccount>
          </div>
        </Login>
      </Box>
    </>
  );
};

export default LogIn;


