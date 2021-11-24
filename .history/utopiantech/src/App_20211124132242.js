import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from "./components/Shop";
import Spanish from "./components/Spanish"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {

  state = {
    searchText: ''
  }

  searchBarText = (textT)=>{
    // console.log(textT)
    this.setState({
      searchText: textT
    })
  }
  render(){
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
        <Switch>
        <Route exact path="/">
        <Shop />
        <SearchBar searchBar={this.searchBarText} searchText={this.state.searchText}/>
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


