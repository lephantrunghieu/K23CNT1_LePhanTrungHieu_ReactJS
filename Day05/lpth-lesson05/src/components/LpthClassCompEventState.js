import React, { Component } from 'react';

class LpthClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            lpthFullName:"Lê Phan Trung Hiếu",
            lpthAge:23,
        }
    }

    // Hàm xử lý sự kiện
    lpthEventHandleClick1 = ()=>{
        // Lấy dữ liệu trong state
        alert("FullName: " +this.state.lpthFullName + "\n Age:" + this.state.lpthAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.lpthEventHandleClick1}>Button 1 - Dữ liệu trong state</button>
            </div>
        );
    }
}

export default LpthClassCompEventState;