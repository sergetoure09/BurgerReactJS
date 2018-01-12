import React from 'react'


export const ButtonAdd=props=>{
    return(
        <button onClick={()=>props.ClickAdd(props.key)}>+</button>
    )
}

export const ButtonRemove=props=>{
    return(
        <button onClick={()=>props.ClickRemove(props.key)}>-</button>
    )
}



