import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from "./components/Shop";
import Spanish from "./components/"

function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <div>
        <Switch>
        <Route path="/">
        <Shop />
        </Route>
        <Route path="/">
        <Spanish />
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
