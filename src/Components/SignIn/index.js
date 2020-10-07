import React from 'react';
import { Login, Title, HaveAccount } from './styles'
import Input from '../Utilities/Input'
import Button from '../Utilities/Button'

const SigIn = () => {
  return (
    <>
      <Login>
        <div>
          <Title>Registrate</Title>
        </div>
        <div>
          <Input placeholder="Usuario"></Input>
        </div>
        <div>
          <Input type="password" placeholder="Contraseña"></Input>
        </div>
        <div>
          <Button text="Registrarse"></Button>
        </div>
        <div>
          <HaveAccount>¿Ya tienes una cuenta? <span><a href="#">Inicia Sesión</a></span></HaveAccount>
        </div>
      </Login>
    </>
  );
};

export default SigIn;