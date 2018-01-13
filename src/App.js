import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './containers/burgerbuilder'
import Aux from './components/aux'
import {Toolbar} from './components/Navigation/Toolbar/toolbar'

class App extends Component {
  
  render() {
     return (
    <Aux classes={classes.App}>
    <Toolbar/>
    <BurgerBuilder />
    </Aux>
    
    );
  }
}

export default App;
