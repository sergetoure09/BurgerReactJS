import React, { Component } from 'react'
import Modal from './modal'
import Aux from'./aux'  
import axios from 'axios'

// const Errorhandler=(Wrappedcomponent)=>{
//     return (props)=>{
//         return(
//         <Aux>
//              <Modal >Something goes wrong ...</Modal>
//              <Wrappedcomponent {...props}/>
//         </Aux>
//         )
//     }
// }
// export default Errorhandler


const Errorhandler=(Wrappedcomponent,axios)=>{
    return class extends Component{
        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use(request=>{this.setState({error:null})
        
        return request
    })
            axios.interceptors.response.use(null,error=>{this.setState({error:error})
        return error})
        }
        errorConfirmedHandler=()=>{
            this.setState({
                error:false
            })
        }

    render(){
        return(<Aux>
                      <Modal show={this.state.error} clickdrop={this.errorConfirmedHandler}>{this.state.error?this.state.error.message:null}</Modal>
                        <Wrappedcomponent {...this.props}/>
                        </Aux>)
    }
    }
}

export default Errorhandler