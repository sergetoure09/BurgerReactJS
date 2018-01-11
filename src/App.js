import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ingredient.css'
import './style.css'
import Bread from'./components/bread'
import Cheese from'./components/cheese'
import Patty from'./components/patty'
import Meatball from'./components/meatball'
import Oignon from'./components/oignon'
import Plate from'./components/plate'
import Tomato from'./components/tomato'
import Pickle from './components/pickle'
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
              <Patty/>  
              <Patty/>
              <Cheese />
              <Tomato />
              <Cheese/>
              <Cheese/>
              <Cheese/>
              <Oignon />
              <Meatball />
              <Meatball />
              <Meatball />
              <Pickle/>
              <Patty/>
      </Bread>
      
      <Plate/>
      </div>
    );
  }
}

export default App;
