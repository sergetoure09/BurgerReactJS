import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './containers/burgerbuilder'
import Aux from './components/aux'
import {Toolbar} from './components/Navigation/Toolbar/toolbar'
import SideDrawer from './components/Navigation/sidedrawer/sidedrawer'


class App extends Component {
  
  render() {
     return (
    <Aux classes={classes.App}>
    <Toolbar/>
    <SideDrawer />
    <BurgerBuilder />
    </Aux>
    
    );
  }
}

export default App;
