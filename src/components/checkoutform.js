import React ,{Component}from 'react'
import CheckoutSummary from './checkoutsummary'
import Aux from './aux'
import classes from './checkform.css'
import * as Ingredient from './ingredient'




class Checkoutform extends Component{
    constructor(props){
        super(props);
   
    this.state={
        ingredients:[
            { id: 'ches', name: 'cheese', uprice: 4, quant: 0, item: <Ingredient.Cheese /> },
            { id: 'toma', name: 'tomato', uprice: 1, quant: 0, item: <Ingredient.Tomato /> },
            { id: 'paty', name: 'patty', uprice: 5, quant: 0, item: <Ingredient.Patty /> },
            { id: 'pick', name: 'pickle', uprice: 1, quant: 0, item: <Ingredient.Pickle /> },
            { id: 'onio', name: 'oignon', uprice: 1, quant: 0, item: <Ingredient.Onion /> },
            { id: 'meat', name: 'meatball', uprice: 3, quant: 0, item: <Ingredient.Meatball /> }]

    }
}

    componentDidMount(){
        console.log(this.props)
         this.setState({
             ingredients:this.props.location.state.ingredients
        })
        // console.log(this.props.location.setate.burger_ingredients)
        //     let data=new URLSearchParams(decodeURIComponent(this.props.location.search))
        //     for (let params in data.entries()){
        //         console.log(params) then set the state 
            
        // }
        
    }
    success=()=>{
        this.props.history.replace({pathname:'/checkout/contact-info'})
    
        // redirection same as <Redirect to='checkout/contact-info/>
        

    }
    cancel=()=>{
        this.props.history.goBack()

    }



    render(){
        return(
                    <Aux classes={classes.checkform}>
                        <CheckoutSummary 
                            ingredients={[...this.state.ingredients]}
                            successHandler={this.props.success}
                            cancelHandler={this.props.cancel}/>
                     </Aux>
        )
    }
}


export default Checkoutform