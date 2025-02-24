import React from "react";

export default function LpthFuncCompEvent1() {
  // Hàm xử lý sự kiện
  const lpthEventButton1Click = () => {
    alert("Button 1 - Clicked");
  };

  const lpthEventButton2Click = () => {
    alert("Button 2 - Clicked");
  };

  const lpthEventButton3Click = (name)=>{
    alert("Name:" + name)
  }
  return (
    <div className="alert alert-info">
      {/* <button className="btn btn-primary" onClick={lpthEventButton1Click()}>
        Button 1
      </button> */}
      <button className="btn btn-primary mx-1" onClick={lpthEventButton2Click}>
        Button 2
      </button>
      {/* <button className="btn btn-success" onClick={lpthEventButton3Click("Hiếu Lê")}>
        Button 3
      </button> */}
      <button className="btn btn-success  mx-1" onClick={()=>lpthEventButton3Click("Lê Phan Trung Hiếu")}>
        Button 4
      </button>
    </div>
  );
}