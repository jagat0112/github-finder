import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import User from "./Components/Users/User";
import PageNotFound from "./Components/Pages/PageNotFound";
import Home from "./Components/Pages/Home";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />{" "}
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
