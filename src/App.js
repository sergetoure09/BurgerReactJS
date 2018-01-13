import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './containers/burgerbuilder'
import Aux from './components/aux'

class App extends Component {
  
  render() {
     return (
    <Aux classes={classes.App}>
    <BurgerBuilder />
    </Aux>
    
    );
  }
}

export default App;
