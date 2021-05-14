import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import ProtectedRoute from "./auth/protected-route";
import LoginPage from "./views/LoginPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
