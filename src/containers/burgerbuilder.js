import React, { Component } from 'react'
import Burger from '../components/burger'
import Plate from '../components/plate'
import BurgerControl from '../components/burgercontrol'
import BurgerInfo from '../components/burgerinfo'
import * as Ingredient from '../components/ingredient'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientList: [
                { id: 'ches', name: 'cheese', uprice: 4, quant: 0, item: <Ingredient.Cheese /> },
                { id: 'toma', name: 'tomato', uprice: 1, quant: 0, item: <Ingredient.Tomato /> },
                { id: 'paty', name: 'patty', uprice: 5, quant: 0, item: <Ingredient.Patty /> },
                { id: 'pick', name: 'pickle', uprice: 1, quant: 0, item: <Ingredient.Pickle /> },
                { id: 'onio', name: 'oignon', uprice: 1, quant: 0, item: <Ingredient.Onion /> },
                { id: 'meat', name: 'meatball', uprice: 3, quant: 0, item: <Ingredient.Meatball /> }],


            burger_ingredients: [],
          

            purchased: false,
        }
    }
    clickReset = () => {
        let ingredientList = [...this.state.ingredientList]
        ingredientList.forEach(ing => ing.quant = 0)
        this.setState({
            ingredientList: ingredientList,
            burger_ingredients: []
        })
    }
    clickAdd = (id) => {
        const max = 5
        var ingredientList = [...this.state.ingredientList]
        var ingredients = [...this.state.burger_ingredients]
        var index = ingredientList.findIndex(ing => ing.id === id)
        if (ingredientList[index].quant < max) {
            ingredients.push(ingredientList[index])
            ingredientList[index].quant += 1
        } else { ingredientList[index].quant = 5 }
        this.setState({
            ingredientList: ingredientList,
            burger_ingredients: ingredients
        })
    }

    clickRemove = (id) => {

        var ingredientList = [...this.state.ingredientList]
        var ingredients = [...this.state.burger_ingredients]
        var index = ingredients.findIndex(ing => ing.id === id)
        if (index !== -1) {
            ingredients.splice(index, 1)
            ingredientList[ingredientList.findIndex(ing => ing.id === id)].quant -= 1
            this.setState({
                ingredientList: ingredientList,
                burger_ingredients: ingredients
            })
        }


    }


    render() {
        let totalPrice = 0
        this.state.ingredientList.map((ing) => { totalPrice += ing.quant * ing.uprice })

        return (
            <React.Fragment>
                <BurgerInfo name="Best Whooper" price={totalPrice} />
                <Burger ingredients={[...this.state.burger_ingredients]} />
                <Plate />
                <button onClick={this.clickReset}>Reset</button>
                <BurgerControl ingredientsList={this.state.ingredientList} total={totalPrice} handleAdd={this.clickAdd} handleRemove={this.clickRemove} />
            </React.Fragment>
        )
    }
}
export default BurgerBuilder