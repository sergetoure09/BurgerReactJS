import React, { Component } from 'react'
import{ButtonAdd,ButtonRemove} from './controlbuttons'




class ControlItem extends Component{
    
  render(){
      return(
          
             <tbody>
            <tr>
             <td>{this.props.name}</td>
             <td><ButtonAdd ClickAdd={()=>this.props.handleAdd}/></td>
             <td><ButtonRemove ClickRemove={()=>this.props.handleRemove}/></td>
             <td>{this.props.quant}</td>
             <td>{this.props.uprice}</td>
            </tr>
            </tbody>
            
      
      )
  }
}


export default ControlItem