import React from 'react'
import classes from './spinner.css'

export const Spinner=props=>(<div className={classes.spinner}>
<div className={classes.bounce1}></div>
<div className={classes.bounce2}></div>
<div className={classes.bounce3}></div>
<h5>Loading your order...</h5>
</div>)