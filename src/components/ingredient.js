import React, {Component} from 'react'
import classes from '../ingredient.css'


export class Tomato extends Component{
    render(){
        return(
        <div class={classes.tomato}></div>
    )
    }
}


export class Pickle extends Component{
    render(){
        return(
        <div class={classes.pickle}></div>
        )
    }
}
export class Patty extends Component{
    render(){
        return(
        <div class={classes.patty}></div>
        )
    }
}
export class Oignon extends Component{
    render(){
        return(
        <div class={classes.onion}></div>
        )
    }
}
export class Meatball extends Component{
    render(){
        return(
        <div class={classes.meatball}></div>
        )
    }
}
export class Cheese extends Component{
    render(){
        return(
        <div class={classes.cheese}></div>
        )
    }
}
