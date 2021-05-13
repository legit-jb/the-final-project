import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Upload from "./components/Upload";
import Navbar from "./components/Navbar";
import LoginPage from "./views/logintest";
import ProtectedRoute from "./auth/protected-route";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Upload />
      <LoginPage />
    </div>
  );
};

export default App;
