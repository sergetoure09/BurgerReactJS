import React,{Component} from 'react'
import Bread from'../components/bread'


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
            <React.Fragment>
            <Bread> 
            {ingredients}
            </Bread>
            </React.Fragment>
        )
    }


}
export default Burger