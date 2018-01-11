import React, { Component } from 'react'
import BunTop from './bun-top'
import BunBottom from './bun-bottom'


class Bread extends Component{

    render(){
        return(
            <div class="burger">
                <BunTop />
                {this.props.children}
                <BunBottom />
            </div>
        )
    }
}


export default Bread