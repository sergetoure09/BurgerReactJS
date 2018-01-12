import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './containers/burgerbuilder'

class App extends Component {
  
  render() {
     return (
    <div class={classes.App}>
    <BurgerBuilder />
    </div>
    );
  }
}

export default App;
