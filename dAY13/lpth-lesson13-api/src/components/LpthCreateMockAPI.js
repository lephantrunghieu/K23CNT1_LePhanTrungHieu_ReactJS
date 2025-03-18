import React, { useState } from 'react'
import axios from 'axios'

export default function LpthCreateMockAPI() {
    // khởi tạo state
    const [lpthFullName,setLpthFullName] = useState('')
    const [lpthAge,setLpthAge] = useState(0)
    const [lpthActive,setLpthActive] = useState(true)

    // api post
    const lpthCreateUserApi = "https://67d96db100348dd3e2ab0794.mockapi.io/k23cnt1_lephantrunghieu/lpth_users";

    // khi submit form
    const lpthHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("lpthActive:",lpthActive);
        let lpthNewUser = {lpthFullName,lpthAge,lpthActive};
        console.log(lpthNewUser);

        // ghi dữ liệu vào api
        axios
            .post(lpthCreateUserApi, lpthNewUser)
            .then((lpth_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label htmlFor="lpthFullName">Full Name</label>
                <input type='text' name='lpthFullName' id="lpthFullName" 
                    value={lpthFullName}
                    onChange={(ev)=>setLpthFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label htmlFor="lpthAge">Age</label>
                <input type='number' name='lpthAge' id="lpthAge" 
                    value={lpthAge}
                    onChange={(ev)=>setLpthAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label htmlFor="lpthActive">Active</label>
                <input type='radio' name='lpthActive' id="lpthActive_hd" value={'true'} 
                    onChange={(ev)=>setLpthActive(ev.target.value)} />
                    <label htmlFor="lpthActive_hd"> Hoạt động</label>
                <input type='radio' name='lpthActive' id="lpthActive_kh" value={'false'} 
                    onChange={(ev)=>setLpthActive(ev.target.value)}/>
                    <label htmlFor="lpthActive_kh"> Khóa</label>
            </div>
            <button onClick={lpthHandleSubmit}>Create</button>
        </form>
    </div>
  )
}