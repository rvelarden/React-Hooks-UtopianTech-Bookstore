import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from "./components/Shop";
import Spanish from "./components/Spanish"
import Navbar from "./components/Navbar"


function App() {

  state = {

    searchText: '',
  
    
  }

  searchBar = (textT)=>{
    // console.log(textT)
    this.setState({
      searchText: textT
    })
  }

  return (
    <Router>
      <div>
        <Navbar/>
        <div>
        <Switch>
        <Route exact path="/">
        <Shop />
        <SearchBar searchBar={this.searchBar} searchText={this.state.searchText}/>
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
