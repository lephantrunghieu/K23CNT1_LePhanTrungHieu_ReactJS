import React, { Component } from "react";

class LpthClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý sự kiện
    lpthEventHandleClick = ()=>{
        // Chuyển dữ liệu lên App thông qua props
        this.props.onLpthDataToApp("Dữ liệu từ component con - LpthClassCompEventPostData");
    }
  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-primary"
            onClick={this.LpthEventHandleClick}>
                Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default LpthClassCompEventPostData;