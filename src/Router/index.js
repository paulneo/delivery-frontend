import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from '../Components/LogIn'
import SignIn from "../Components/SignIn";
import ProfileUser from "../Components/ProfileUser";
import { Header } from "./styles";

export default function App() {
  return (
    <Router>
      <div>
        <Header>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </Header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <ProfileUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
