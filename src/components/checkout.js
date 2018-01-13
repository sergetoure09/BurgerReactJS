import React, { Component } from 'react'
import Aux from './aux'
import classes from './checkout.css'



class Checkoutbtn extends Component{
    render(){
        return(
            <Aux>
                <button className={classes.checkoutbtn} disabled={this.props.btnstate} onClick={this.props.clickShowModal}>ORDER NOW!<br/>${this.props.totalPrice}</button>
            </Aux>
        )
    }
}
export default Checkoutbtn