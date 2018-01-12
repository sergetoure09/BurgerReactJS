import React, { Component } from 'react'
import Aux from './aux'
import ControlItem from './controlitem'



class Controlpanel extends Component{
  render(){
      let items=this.props.ingredients.map((ing,index)=> <ControlItem 
                                                                    key={ing.id} 
                                                                    name={ing.name} 
                                                                    uprice={ing.uprice} 
                                                                    quant={ing.quant} 
                                                                    handleAdd={()=>this.props.handleAdd(ing.id)} 
                                                                    handleRemove={()=>this.props.handleRemove(ing.id)}/>)
      
      return (
          <Aux>  
              <table>
                  <thead>
          <tr>
              <th>Ingredients</th>
              <th>Add</th>
              <th>Remove</th>
              <th>Quantity</th>
              <th>Unit price</th>
          </tr>
          </thead>
              {items}
              </table>
        </Aux>
      )
  }
}


export default Controlpanel