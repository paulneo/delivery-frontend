import React from 'react';
import { Login, Title, HaveAccount } from './styles'
import Input from '../Utilities/Input'
import Button from '../Utilities/Button'

const LogIn = () => {
   return (
    <>

      <Login>
        <div>
          <Title>Iniciar Sesion</Title>
        </div>
        <div>
          <Input placeholder="Usuario"></Input>
        </div>
        <div>
          <Input type="password" placeholder="Contraseña"></Input>
        </div>
        <div>
          <Button text="Ingresar"></Button>
        </div>
        <div>
          <HaveAccount>¿No tienes una cuenta? <span><a href="#">Registrate aquí</a></span></HaveAccount>
        </div>
      </Login>

    </>
  );
};

export default LogIn;


