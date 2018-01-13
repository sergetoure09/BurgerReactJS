import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './containers/burgerbuilder'
import Aux from './components/aux'


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"Best Whoooper!",
      price:"$19,99",
      description:"The favorite burger of business man!"
    }

  }
 
  render() {
   
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
              <Ingredient.Onion />
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
