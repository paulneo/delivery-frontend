import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LogIn from '../Components/LogIn'
import SignIn from "../Components/SignIn";
import ProfileUser from "../Components/ProfileUser";
import Restaurants from "../Components/Restaurants";
import { Header, Icon, Profile, Links, Logo, Actions } from "./styles";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


const Routes = () =>  {

  const [ activeLinks, setActiveLink] = useState(false)

  return (
    <Router>
      <div>
        <Header>
          <Logo></Logo>
          <Actions>
            <Icon icon={faBell}></Icon>
            <Profile>
              <Icon icon={faUser} onClick={() => setActiveLink(!activeLinks)} />
            </Profile>
          </Actions>
          <Links active={activeLinks}>
            <Link to="/profile" onClick={() => setActiveLink(false)}>
              Perfil
            </Link>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/signin">Registrarse</Link>
          </Links>
        </Header>
        {/* A <Switch> looks through its children <Routes> and
            renders the first one that matches the current URL. */}
        {/* <Redirect to="/restaurant" />  */}
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/profile">
            <ProfileUser />
          </Route>
          <Route path="/restaurant">
            <Restaurants />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;