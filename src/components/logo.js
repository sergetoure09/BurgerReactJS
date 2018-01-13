import React from 'react'
import logo from '../assets/logo.png'
import Aux from './aux'
import classes from './logo.css'


export const Logo=props=>{
    return(
        <Aux>
            <img alt='burger logo' src={logo} className={classes.logo}/> <span className={classes.span}>BURGER MAGIC</span>
        </Aux>
    )
}