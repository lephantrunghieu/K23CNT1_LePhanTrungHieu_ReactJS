import React, { Component } from 'react'

export default class LpthEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            lpthGioiTinh: 'Nam',
        }
    }

    //ham xu ly su kien change 
    lpthHandleChange = (event)=>{
        this.setState({
            lpthGioiTinh:event.target.value,
        })
    }

    //Ham xu ly su kien submit form
    lpthHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Gioi tinh cua ban la:" + this.state.lpthGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form input - radio</h2>
        <form>
            <div>
                <label htmlFor=''>Gioi tinh</label>
                <input type='radio' name='lpthGioiTinh' value="Nam" checked={this.state.lpthGioiTinh === 'Nam'} onChange={this.lpthHandleChange} id='lpthNam' className='mx-2'/> <label htmlFor='lpthNam'>Nam</label>
                <input type='radio' name='lpthGioiTinh' value="Nu" checked={this.state.lpthGioiTinh === 'Nu'} onChange={this.lpthHandleChange} id='lpthNu' className='mx-2'/> <label htmlFor='lpthNu'>Nu</label>
                <input type='radio' name='lpthGioiTinh' value="Khac" checked={this.state.lpthGioiTinh === 'Khac'} onChange={this.lpthHandleChange} id='lpthKhac' className='mx-2'/> <label htmlFor='lpthKhac'>Khac</label>
            </div>
            <button onClick={this.lpthHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
