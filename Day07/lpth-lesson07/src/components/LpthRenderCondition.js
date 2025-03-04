import React, { Component } from 'react'
import LpthLoginControl from './LpthLoginControl';

class LpthRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }

    //ham xu ly su kien login

    lpthHandleLogin =(ev)=>{
      ev.preventDefault();
      this.setState({
        isLoggedIn:true
      })
    }

    // Ham xu ly su kien logout
    lpthHandleLogout =(event)=>{
      event.preventDefault();
      this.setState({
        isLoggedIn:false
      })
    }

  render() {
    return (
      <div className='alert alert-danger'>
            <LpthLoginControl isLoggedIn={this.state.isLoggedIn} />
            {
              this.state.isLoggedIn ? 
              <button className='btn btn-danger' onClick={this.lpthHandleLogout}>Logout</button>
               : <button className='btn btn-primary' onClick={this.lpthHandleLogin}>Login</button>
            }
      </div>
    )
  }
}
export default LpthRenderCondition;
