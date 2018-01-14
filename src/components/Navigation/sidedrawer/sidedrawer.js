import React from 'react'
import {Logo} from '../../logo'
import {NavItems} from '../../Navigation/NavigationItems/navigationitems'
import classes from './sidedrawer.css'



const sideDrawer=props=>{


    return(
       <div className={classes.sidedrawer}>
           <Logo />
           <nav>
              
               <NavItems/>
            </nav>

       </div>
    )
}
export default sideDrawer