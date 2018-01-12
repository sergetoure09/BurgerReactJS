import React, { Component } from 'react'
import style from '../style.css'
import * as Bun from './bun'


class Bread extends Component{

    render(){
        return(
            <div class={style.burger}>
                <Bun.Top />
                {this.props.children}
                <Bun.Bottom />
            </div>
        )
    }
}


export default Bread