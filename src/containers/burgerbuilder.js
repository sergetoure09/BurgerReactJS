import  React, { Component } from 'react'
import  Burger from '../components/burger'
import  Plate from '../components/plate'
import  BurgerControl from '../components/burgercontrol'
import  BurgerInfo from '../components/burgerinfo'
import  * as Ingredient from '../components/ingredient'
import  Modal from '../components/modal'
import  {OrderSummary} from '../components/ordersummary' 
import  Aux from '../components/aux'
import axios from '../components/axios-order-instace'
import {Spinner} from '../components/spinner'
import Errorhandler from '../components/errorhandler_hoc'



class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredientList: [
                { id: 'ches', name: 'cheese', uprice: 4, quant: 0, item: <Ingredient.Cheese /> },
                { id: 'toma', name: 'tomato', uprice: 1, quant: 0, item: <Ingredient.Tomato /> },
                { id: 'paty', name: 'patty', uprice: 5, quant: 0, item: <Ingredient.Patty /> },
                { id: 'pick', name: 'pickle', uprice: 1, quant: 0, item: <Ingredient.Pickle /> },
                { id: 'onio', name: 'oignon', uprice: 1, quant: 0, item: <Ingredient.Onion /> },
                { id: 'meat', name: 'meatball', uprice: 3, quant: 0, item: <Ingredient.Meatball /> }],


            burger_ingredients: [],
           
            showmodal:false,
            purchased: false,
            notpurchasable:true,
            totalPrice:null,
            showspinner:false
        }
    }

    clickRemoveDrop=()=>{
        this.setState({
            showmodal:false
          
        })

    }

    clickShowModal=()=>{
        this.setState({
            showmodal:true
          
        })
    }
    ispurchasabled=(totalprice)=>{
        if (totalprice>0){
            this.setState({
                notpurchasable:false
            })
        } else{
            this.setState({
                notpurchasable:true
            })

        }

    }
    purchaseHandler=()=>{
        // const queryParams=[] // empty array in witch we push params as list items
        // for (let i in this.state.burger_ingredients){
        //     queryParams.push(encodeURIComponent(i.name)+'='+encodeURIComponent(i.quant))
        // } // encode params with the special method encodeURIComponent and push items in queryParams 
        // const queryString=queryParams.join('&')
    this.props.history.push({
        pathname:this.props.match.url+'checkout',
        hash:'',
        ingredients:this.state.burger_ingredients
        // //alert("sent to firebase...")
        // this.setState({
        //     showspinner:true
        // })
        // const order={
        //     ingredients:this.state.ingredientList,
        //     price:this.state.totalPrice,
        //     customer:"Serge Toure",
        //     address:{
        //         street:"Maarif casablanca Res Meryem Bd Anfa",
        //         zipcode:'200610',
        //         country:'Ivory Coast'   
        //     },
        //     email:'sergetoure09@gmail.com',
        //     deliverymethod:'fastest'

        // }
        // axios.post('Orders.json',order).then(resp=>{this.setState({
        //     showspinner:false,showmodal:false
        // })}).catch(err=>{this.setState({showspinner:false,showmodal:false})})

    })
}
    clickReset = () => {
        let ingredientList = [...this.state.ingredientList]
        ingredientList.forEach(ing => ing.quant = 0)
        this.setState({
            ingredientList: ingredientList,
            burger_ingredients: [],
            notpurchasable:true,
            showmodal:false
        })
    }
    clickAdd = (id) => {
        let totalPrice = 0
        const max = 5
        var ingredientList = [...this.state.ingredientList]
        var ingredients = [...this.state.burger_ingredients]
        var index = ingredientList.findIndex(ing => ing.id === id)
        if (ingredientList[index].quant < max) {
            ingredients.push(ingredientList[index])
            ingredientList[index].quant += 1
        } else { ingredientList[index].quant = 5 }
       
        this.state.ingredientList.map((ing) => { 
            totalPrice += ing.quant * ing.uprice 
        })
        this.setState({
            ingredientList: ingredientList,
            burger_ingredients: ingredients,
            notpurchasable:false,
            totalPrice:totalPrice
        })
       
    }

    clickRemove = (id) => {

        var ingredientList = [...this.state.ingredientList]
        var ingredients = [...this.state.burger_ingredients]
        var index = ingredients.findIndex(ing => ing.id === id)
        if (index !== -1) {
            ingredients.splice(index, 1)
            ingredientList[ingredientList.findIndex(ing => ing.id === id)].quant -= 1
            this.setState({
                ingredientList: ingredientList,
                burger_ingredients: ingredients
            })
        }

        let totalPrice = 0
        this.state.ingredientList.map((ing) => { totalPrice += ing.quant * ing.uprice })
        this.ispurchasabled(totalPrice)


    }
    componentDidMount(){
        console.log(this.props)
    }


    render() {
        
        let modal=this.state.showmodal===true ? <Modal show={this.state.showmodal} clickdrop={this.clickRemoveDrop}>
                                                                <h1>Your Order Summary!</h1>
                                                                {!this.state.showspinner ?
                                                                <OrderSummary purchasehandler={this.purchaseHandler} 
                                                                                reset={this.clickReset} clickdrop={this.clickRemoveDrop} 
                                                                                ingredients={this.state.ingredientList} 
                                                                                totalPrice={this.state.totalPrice}/>:<Spinner/>}
                                                </Modal>
                                                :null
      

        return (
            <Aux >
                {modal}
                <BurgerInfo name="BURGER MAGIC" price={this.state.totalPrice} />
                <Burger ingredients={[...this.state.burger_ingredients]} />
                <Plate />
                <button onClick={this.clickReset}>Reset</button>
                <BurgerControl  clickShowModal={this.clickShowModal} btnstate={this.state.notpurchasable} ingredientsList={this.state.ingredientList} total={this.state.totalPrice} handleAdd={this.clickAdd} handleRemove={this.clickRemove}/>
              
            </Aux>
        )
    }
}
export default Errorhandler(BurgerBuilder,axios)