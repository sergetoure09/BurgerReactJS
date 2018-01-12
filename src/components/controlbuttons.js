import React from 'react'


export const ButtonAdd=props=>{
    return(
        <button onClick={()=>props.ClickAdd}>+</button>
    )
}

export const ButtonRemove=props=>{
    return(
        <button onClick={()=>props.ClickRemove}>-</button>
    )
}



