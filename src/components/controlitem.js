import React, { Component } from 'react'
import{ButtonAdd,ButtonRemove} from './controlbuttons'

class ControlItem extends Component{
    
  render(){
      return(
          
             <tbody>
            <tr>
             <td>{this.props.name}</td>
             <td><ButtonAdd ClickAdd={()=>this.props.handleAdd(this.props.key)} keey={this.props.keey}/></td>
             <td><ButtonRemove ClickRemove={()=>this.props.handleRemove(this.props.key)} keey={this.props.keey}/></td>
             <td>{this.props.quant}</td>
             <td>${this.props.uprice}</td>
            </tr>
            </tbody>
            
      
      )
  }
}


export default ControlItem