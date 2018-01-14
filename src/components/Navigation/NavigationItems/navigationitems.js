import React, { Component } from 'react'
import {NavItem} from './NavigationItem/navigationitem'
import classes from './navitems.css'



export class NavItems extends Component{
    constructor(props){
        super(props);
        this.state={
            links:[
                {label:'Builder',ref:'#'},
                {label:'Checkout', ref:'#'},
                {label:'Story',ref:'#'},
               
                    ]
        }
    }
    render(){
        let items=this.state.links.map((link,index)=>(
            <NavItem key={index} label={link.label} reef={link.ref} />
    
        ))
        return(
        <ul className={classes.navitems}>
           {items}
        </ul>
    )
    }
}
