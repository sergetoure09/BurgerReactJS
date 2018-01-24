import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './containers/burgerbuilder'
import Aux from './components/aux'
import {Toolbar} from './components/Navigation/Toolbar/toolbar'
import SideDrawer from './components/Navigation/sidedrawer/sidedrawer'
import Card from './card'
 import Checkoutform from './components/checkoutform'
 import {Route,Switch} from 'react-router-dom'


class App extends Component {
  
  render() {
     return (
    <Aux classes={classes.App}>
    <Toolbar/>
    <Switch>
    <Route exact path="/" component={BurgerBuilder}/>
    <Route exact path="/checkout" component={Checkoutform}/> 
    </Switch>
    </Aux>
    
    );
  }
}

export default App;
