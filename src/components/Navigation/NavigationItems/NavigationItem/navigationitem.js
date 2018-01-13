import React from 'react'
import classes from './navitem.css'




export const NavItem=props=>{

    

    return(
        <li className={classes.navitem}>
                <a href={props.ref}>{props.label}</a>
        </li>
    )
  
}   