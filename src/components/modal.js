import React from 'react'
import Aux from './aux'
import classes from './modal.css'



const Modal=props=>{
    return(
    <Aux classes={classes.modal}>
    {props.children}
    </Aux>
    )
}
export default Modal