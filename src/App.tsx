import React from "react";
import Autorize from "./components/autorize/Autorize";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Chatty from "./components/chatty/Chatty";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Autorize />
          </Route>
          <Route path="/chat">
            <Chatty />
          </Route>
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
