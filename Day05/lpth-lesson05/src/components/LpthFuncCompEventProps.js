import React from 'react'

export default function LpthFuncCompEventProps(lpthProps) {
    // hàm xử lý sự kiện
    const lpthHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + lpthProps.lpthRenderName);
        console.log("Xin chao:",lpthProps.lpthRenderName);
    }

    const lpthHanldeButtonClick2 = (param)=>{
        // Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click):" + lpthProps.lpthRenderName);
        // Dữ liệu từ tham số
        console.log('====================================');
        console.log("Hi:",param);
        console.log('====================================');
    }
  return (
    <div className="alert alert-info">
        <button className='btn btn-primary mx-1'
            onClick={lpthHanldeButtonClick1}>Button 1</button>

        <button className='btn btn-success mx-1'
            onClick={()=>lpthHanldeButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
