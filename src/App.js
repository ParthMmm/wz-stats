import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/LandingPage';

//I want Warzone Data


class App extends Component {
  render(){
  return (
    <Router>
      <div id="parent">
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>

        </Switch>
      </div>

    </Router>
  );
}
}

export default App;
