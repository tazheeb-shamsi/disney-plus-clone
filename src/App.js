import React from'react';
import './App.css';
import {
   BrowserRouter as Router,
   Switch,
   Route } from "react-router-dom";

import Login from './components/Login.js'



function App() {
  return (
    <div className="App">
      <Router>
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
