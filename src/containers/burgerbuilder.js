import React,{Component} from 'react'
import Burger from '../components/burger'
import Plate from '../components/plate'
import BurgerControl from '../components/burgercontrol'
import BurgerInfo from'../components/burgerinfo'
import * as Ingredient from '../components/ingredient'

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state={
            ingredients:[
                {id:'ches',name:'cheese',uprice:4,quant:0,item:<Ingredient.Cheese/>},
                {id:'toma',name:'tomato',uprice:1,quant:0,item:<Ingredient.Tomato/>},
                {id:'paty',name:'patty',uprice:5,quant:0,item:<Ingredient.Patty/>},
                {id:'pick',name:'pickle',uprice:1,quant:0,item:<Ingredient.Pickle/>},
                {id:'onio',name:'oignon',uprice:1,quant:0,item:<Ingredient.Onion/>},
                {id:'meat',name:'meatball',uprice:3,quant:0,item:<Ingredient.Meatball/>}],
            purchased:false,
        }
    }
    clickReset=()=>{
        let ingredients=[...this.state.ingredients]
        ingredients.forEach(ing=>ing.quant=0)
        this.setState({
            ingredients:ingredients
        })
    }
    clickAdd=(id)=>{
            const max=5
            let ingredients=[...this.state.ingredients]
            let index=ingredients.findIndex(ing=>ing.id===id)
            ingredients[index].quant+=1
            if(ingredients[index].quant>max){
                ingredients[index].quant=5
            }
            this.setState({
                ingredients:ingredients
            })
   }
    clickRemove=(id)=>{
        const min=0
        let ingredients=[...this.state.ingredients]
        let index=ingredients.findIndex(ing=>ing.id===id)
            ingredients[index].quant-=1
            if(ingredients[index].quant<min){
                ingredients[index].quant=0
            }
            this.setState({
                ingredients:ingredients
            })
}
    render(){
        let totalPrice=0
        this.state.ingredients.map((ing)=>{totalPrice+=ing.quant*ing.uprice})

        return(
            <React.Fragment>
            <BurgerInfo name="Best Whooper" price={totalPrice}/>
            <Burger ingredients={this.state.ingredients}/>
            <Plate/>
            <button onClick={this.clickReset}>Reset</button>
            <BurgerControl ingredientsList={this.state.ingredients} total={totalPrice} handleAdd={this.clickAdd} handleRemove={this.clickRemove}/>
            </React.Fragment>   
        )
    }
}
export default BurgerBuilder