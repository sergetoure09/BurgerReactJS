import React     from 'react'
import Aux from './aux'
import Burger from './burger'
import Button from './button'
import classes from './checkoutsummary.css'

const CheckoutSummary=props=>{
        return(
            <Aux classes={classes.summary}>
                <h1>Hope it tatste well!</h1><hr/>
                <div style={{width:'100%',height:'300px',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
                <Button btnType='success' clicked={props.successHandler}>CONTINUE</Button>
                <Button btnType='danger' clicked={props.cancelHandler}>CANCEL</Button>
                </div>
                </Aux>
        )
}


export default CheckoutSummary