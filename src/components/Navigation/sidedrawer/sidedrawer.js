import React from 'react'
import {Logo} from '../../logo'
import {NavItems} from '../../Navigation/NavigationItems/navigationitems'
import classes from './sidedrawer.css'



const SideDrawer=props=>{


    return(
       <div className={classes.sidedrawer}>
           <Logo />
           
               <NavItems />
           

       </div>
    )
}
export default SideDrawer