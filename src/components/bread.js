import React, { Component } from 'react'
import * as Bun from './bun'



class Bread extends Component{

    render(){
        return(
            
            <React.Fragment>
                <Bun.Top />
                {this.props.children}
                <Bun.Bottom />
            </React.Fragment>
           
        )
    }
}


export default Bread