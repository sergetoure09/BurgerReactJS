import React from 'react'
import Aux from './aux'
import classes from './modal.css'
import Backdrop from './backdrop'



const Modal=props=>{
    return(
    
            
        <Aux>
            <Backdrop show={props.show} clicked={props.clickdrop}/>
             <div className={classes.modal} style={{transform: props.show ? 'translateY(0)':'translateY(-100px)',opacity:props.show ? '1':'0'}}>
            {props.children}
             </div>
            
        </Aux>
        
    )
}
export default Modal