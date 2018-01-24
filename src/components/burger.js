import React,{PureComponent} from 'react'
import Bread from'../components/bread'
import style from '../style.css'
import Aux from './aux'


class Burger extends PureComponent{
 
    render(){
        let ingredients=[]
        this.props.ingredients.map((ing,index) => { ingredients.unshift(ing.item)})
        return(
            <Aux classes={style.burger}>
                <Bread> 
                    {ingredients}
                </Bread>
            </Aux>
        )
    }


}
export default Burger