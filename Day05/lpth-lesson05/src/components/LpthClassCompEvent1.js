import React, { Component } from 'react';

class LpthClassCompEvent1 extends Component {
    // Hàm xử lý sự kiện
    lpthEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }

    lpthEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }

    render() {
        return (
            <div className="alert alert-danger">
                <button className='btn btn-primary mx-1' onClick={this.lpthEventHandleClick1}>Button 1</button>
                <button className='btn btn-success mx-1' 
                    onClick={()=>this.lpthEventHandleClick2("Hiếu Lê")}>Button 2</button>
            </div>
        );
    }
}

export default LpthClassCompEvent1;