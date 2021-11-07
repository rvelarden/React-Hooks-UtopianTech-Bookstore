import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Navbar } from 'react-router-dom'
import Shop from "./components/Shop";
import Spanish from "./components/Spanish"
import Navbar from "./components/"
function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <div>
        <Switch>
        <Route exact path="/">
        <Shop />
        </Route>
        <Route path="/spanish">
        <Spanish />
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
