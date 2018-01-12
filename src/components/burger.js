import React,{Component} from 'react'
import * as Ingredient from '../components/ingredient'
import Bread from'../components/bread'
import Plate from '../components/plate'
import Aux from './aux'

class Burger extends Component{
 
    render(){
        let ingredients=[]
        this.props.ingredients.map((ing,index) => { 
            for(var i=1;i<=ing.quant;i++){ 
            ingredients.push(ing.item)
            } 
            }
            )

        return(
            <Aux>
            <Bread> 
            {ingredients}
             </Bread>
            <Plate/>
      </Aux>
        )
    }


}
export default Burger