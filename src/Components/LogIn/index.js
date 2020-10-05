import React from 'react';
import { Login } from '../../Router/styles'

const LogIn = () => {
   return (
    <>

      <Login>
          <p>Iniciar Sesión</p>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button>Ingresar</button>
          <p>¿No tienes una cuenta? <a href="#">Registrate aquí</a></p>
      </Login>

    </>
  );
};

export default LogIn;


