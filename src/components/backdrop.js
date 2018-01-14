import React from 'react'
import Aux from './aux'
import classes from './backdrop.css'



const Backdrop=props=>props.show ? (<div className={classes.backdrop} onClick={props.clicked}></div>):null
 

export default Backdrop 