import React,{Component} from 'react'
import Burger from '../components/burger'
import Aux from '../components/aux'
import BurgerControl from '../components/burgercontrol'
import BurgerInfo from'../components/burgerinfo'
import * as Ingredient from '../components/ingredient'


class BurgerBuilder extends Component{
    constructor(props){
        super(props);
        this.state={
            ingredients:[
                {id:'ches',name:'cheese',uprice:10,quant:1,item:<Ingredient.Cheese/>},
                {id:'tom',name:'tomato',uprice:10,quant:2,item:<Ingredient.Tomato/>},
                {id:'pat',name:'patty',uprice:10,quant:1,item:<Ingredient.Patty/>},
                {id:'pick',name:'pickle',uprice:10,quant:1,item:<Ingredient.Pickle/>},
                {id:'oign',name:'oignon',uprice:10,quant:1,item:<Ingredient.Oignon/>},
                {id:'meat',name:'meatball',uprice:10,quant:2,item:<Ingredient.Meatball/>}],
            purchased:false,

        }
    }
 
    render(){
        return(
            <Aux>
            <BurgerInfo name="Best Whooper" price="$19,99"/>
            <Burger ingredients={this.state.ingredients}/>
            <BurgerControl/>
            </Aux>
        )
    }


}
export default BurgerBuilder