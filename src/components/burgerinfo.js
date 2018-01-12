import React, { Component } from 'react'


class BurgerInfo extends Component{
    render(){
        return(
            <div>
                <h1>The {this.props.name}</h1>
                <h2>Only {this.props.price}</h2>
              
            </div>
        )
    }
}
export default BurgerInfo