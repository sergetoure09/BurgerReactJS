import React ,{Component} from 'react'
import classes from '../ingredient.css'


export class Bottom extends Component{
    render(){
        return(
        <div class={classes.bunbottom}></div>
        )
    }
}

export class Top extends Component{
    render(){
        return(
        <div class={classes.buntop}></div>
        )
    }
}

