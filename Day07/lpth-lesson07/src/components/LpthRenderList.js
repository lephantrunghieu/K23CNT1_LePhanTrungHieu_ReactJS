import React from 'react'

export default function LpthRenderList() {
    const lpthNames = ["Hung", "Dung", "Hieu", "Trong"];
    //hien thi gia tri cua mang 
    const lpthElementName = lpthNames.map((item)=>{
        return <li>{item}</li>
    })
    return (
    <div>
      <h2>Danh sach </h2>
      {lpthElementName}
    </div>
  )
}
