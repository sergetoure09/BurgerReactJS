import React ,{Component}from 'react'
import CheckoutSummary from './checkoutsummary'
import Aux from './aux'
import classes from './checkform.css'
import * as Ingredient from './ingredient'




class Checkoutform extends Component{
    constructor(props){
        super(props);
   
    this.state={
        ingredients:[]

    }
}

    componentDidMount(){

        console.log(this.props)
        let ingredients=this.props.location.ingredients
        if(ingredients){
            this.setState({
                ingredients:ingredients

            })
        }
        // console.log(this.props)
        //  this.setState({
        //      ingredients:this.props.location.state.ingredients
        // })
        // // console.log(this.props.location.setate.burger_ingredients)
        //     let data=new URLSearchParams(decodeURIComponent(this.props.location.search))
        //     for (let params in data.entries()){
        //         console.log(params) then set the state 
            
        }
        
    
    success=()=>{
        this.props.history.replace({pathname:this.props.match.url+'/contact-data'})
    
        // redirection same as <Redirect to='checkout/contact-info/>
        

    }
    cancel=()=>{
        this.props.history.goBack()

    }

    render(){
        let data=<h1>No Data!</h1>
        if(this.state.ingredients){
            data=<CheckoutSummary 
            ingredients={this.state.ingredients}
            successHandler={this.success}
            cancelHandler={this.cancel}/>
        }
        return(
                    <Aux classes={classes.checkform}>
                        {data}
                     </Aux>
        )
    }
}


export default Checkoutform