import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from '../Components/LogIn'
import SignIn from "../Components/SignIn";
import ProfileUser from "../Components/ProfileUser";
import Restaurants from "../Components/Restaurants";
import { Header, Icon, Profile, Links, Logo, Actions } from "./styles";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";


const Routes = () =>  {

  const [ activeLinks, setActiveLink] = useState(false)
  const [main, setMain] = useState(true);

  useEffect(() => {
    setMain(true)
  },[])

  return (
    <Router>
      <div>
        {main && (
          <Header>
            <Logo></Logo>
            <Actions>
              <Icon icon={faBell}></Icon>
              <Profile>
                <Icon
                  icon={faUser}
                  onClick={() => setActiveLink(!activeLinks)}
                />
              </Profile>
            </Actions>
            <Links active={activeLinks}>
              <Link to="/profile" onClick={() => setActiveLink(false)}>
                Perfil
              </Link>
              <Link to="/login" onClick={() => setMain(false)}>
                Iniciar Sesión
              </Link>
              <Link to="/signin" onClick={() => setMain(false)}>
                Registrarse
              </Link>
            </Links>
          </Header>
        )}
        {/* A <Switch> looks through its children <Routes> and
            renders the first one that matches the current URL. */}
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