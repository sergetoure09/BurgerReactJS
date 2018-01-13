import React from 'react'
import Aux from './aux'
import SummaryItem from './summaryitem'


export const OrderSummary=props=>{

    let items=props.ingredients.map((ing,index)=> <SummaryItem 
    key={ing.id} 
    name={ing.name} 
    uprice={ing.uprice} 
    quant={ing.quant} 
    />)
    let style={cursor:'pointer'}

    
    return(


        <Aux>
           <table>
                  <thead>
          <tr>
              <th>Ingredients</th>
              <th>Quantity</th>
              <th>Unit price</th>
            
          </tr>
          </thead>
              {items}
              </table>
              <button style={style} >CKECKOUT NOW!<br/>$ {props.totalPrice}</button>
        </Aux>
        
    )
}