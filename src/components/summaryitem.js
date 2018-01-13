import React, { Component } from 'react'


class SummaryItem extends Component{
    
  render(){
      return(
          
             <tbody>
            <tr>
             <td>{this.props.name}</td>
             <td>{this.props.quant}</td>
             <td>{this.props.uprice}</td>
            </tr>
            </tbody>
            
      
      )
  }
}


export default SummaryItem