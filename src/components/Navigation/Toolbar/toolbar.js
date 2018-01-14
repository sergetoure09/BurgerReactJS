import React from 'react'
import classes from './toolbar.css'
import {Logo} from '../../logo'
import Navitems, { NavItems } from '../NavigationItems/navigationitems'



export const Toolbar=props=>{
    return(
        <header className={classes.toolbar}>
         <div>MENU</div>
            <Logo />
            <NavItems />
         </header>
    )
}
