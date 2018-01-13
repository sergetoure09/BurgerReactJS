import React, { Component } from 'react'
import Aux from './aux'
import classes from './control.css'
import Controlpanel from './controlpanel'
import Checkoutbtn from './checkout'

class BurgerControl extends Component{
  
    render(){
        
        return(
           <Aux classes={classes.boxControl}>
            <Controlpanel ingredients={this.props.ingredientsList} handleAdd={this.props.handleAdd} handleRemove={this.props.handleRemove}/>
            <Checkoutbtn clickShowModal={this.props.clickShowModal} totalPrice={this.props.total} btnstate={this.props.btnstate}/>
           </Aux>
        )
    }
}
export default BurgerControl