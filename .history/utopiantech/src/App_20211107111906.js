import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from "./components/Shop";


function App() {

  return (
    <Router>
      <div>
        <Navbar><
        <div>
        <Switch>
        <Route path="/">
        <Shop />
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
