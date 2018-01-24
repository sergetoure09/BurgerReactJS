import React from 'react'
import classes from './button.css'



const Button=props=><button className={classes[props.btnType]} onClick={props.clicked}>{props.children}</button>


export default Button