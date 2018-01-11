import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import Bread from'./components/bread'
import * as Ingredient from './components/ingredient'
import Plate from './components/plate'
import BurgerInfo from'./components/burgerinfo'

class App extends Component {
  state={
    name:"Best Whoooper!",
    price:"$19,99",
    description:"The favorite burger of business man!"
  }
  render() {
    let infos=this.state
    return (
    <div className="App">
    <BurgerInfo name={this.state.name} price={this.state.price} description={this.state.description}/>
  
      <Bread> 
      <Ingredient.Patty/>  
              <Ingredient.Patty/>
              <Ingredient.Cheese />
              <Ingredient.Tomato />
              <Ingredient.Cheese/>
              <Ingredient.Cheese/>
              <Ingredient.Cheese/>
              <Ingredient.Oignon />
              <Ingredient.Meatball />
              <Ingredient.Meatball />
              <Ingredient.Meatball />
              <Ingredient.Pickle/>
              <Ingredient.Patty/>
      </Bread>
      
      <Plate/>
      </div>
    );
  }
}

export default App;
