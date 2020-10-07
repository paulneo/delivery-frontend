import React from 'react';
import { Login } from '../../Router/styles'

const SigIn = () => {
  return (
    <>
      <Login>
          <p>Registrarse</p>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Registrarse</button>
          <p>¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a></p>
      </Login>
    </>
  );
};

export default SigIn;