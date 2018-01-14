import React from 'react'


export const ButtonAdd=props=>{
    return(
        <button onClick={()=>props.ClickAdd(props.keey)}>+</button>
    )
}

export const ButtonRemove=props=>{
    return(
        <button onClick={()=>props.ClickRemove(props.keey)}>-</button>
    )
}



