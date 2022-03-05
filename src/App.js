import React from'react';
import './App.css';
import {
   BrowserRouter as Router,
   Switch,
   Route } from "react-router-dom";

import Login from './components/Login.js'
import Header from './components/Header.js'



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>

          <Route exactPath="/">
          <Login/>
          </Route>
              
        </Switch>
      </Router>
    </div>
  );
}

export default App;
