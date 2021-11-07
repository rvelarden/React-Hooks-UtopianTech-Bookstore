import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from "./components/Shop";


function App() {

  return (
    <Router></Router>
    <div>
      <Shop />
    </div>
  );
}

export default App;
