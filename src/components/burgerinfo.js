import React, { Component } from 'react'
import classes from './info.css'
import Aux from './aux'


class BurgerInfo extends Component{
    render(){
        return(
            <Aux classes={classes.info}>
                
                <h2>Only ${this.props.price}</h2>
              
            </Aux>
        )
    }
}
export default BurgerInfo