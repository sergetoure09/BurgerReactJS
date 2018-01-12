import React, { Component } from 'react'
import Aux from './aux'



class Checkoutbtn extends Component{
    render(){
        const style={
            width:'150px',
            height:'75px',
            backgroundColor:'#9999FF',
            border:'1px solid',
            borderRadius:'10    px',
            cursor:'pointer',
            marginTop:'50px',
            fontSize:'1em', 
            color:'white'
        }
        return(
            <Aux>
                <button style={style}>Checkout here ${this.props.total}</button>
            </Aux>
        )
    }
}
export default Checkoutbtn