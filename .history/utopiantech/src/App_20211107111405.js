import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from "./components/Shop";


function App() {

  return (
    <Router>
    <div>
      <Switch>
        <Route>
      <Shop />

        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
