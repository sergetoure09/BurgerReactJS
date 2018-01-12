import React, { Component } from 'react'
import style from '../style.css'
import * as Bun from './bun'
import Aux from './aux'


class Bread extends Component{

    render(){
        return(
            <Aux classes={style.burger}>
                <Bun.Top />
                {this.props.children}
                <Bun.Bottom />
            </Aux>
        )
    }
}


export default Bread