import React, { Component } from 'react';

class LpthClassCompEventProps extends Component {

    // Hàm xử lý sự kiện
    lpthEventHandleClick1 = ()=>{
        alert("Hello...." + this.props.lpthRenderTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.lpthEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default LpthClassCompEventProps;