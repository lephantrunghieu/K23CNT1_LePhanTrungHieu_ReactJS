import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function LpthReadMockAPI() {
    // khởi tạo state 
    const [lpthListUser, setLpthListUser] = useState([])
    // api
    const lpthApiOnline = "https://67d96db100348dd3e2ab0794.mockapi.io/k23cnt1_lephantrunghieu/lpth_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(lpthApiOnline)
            .then((lpth_response)=>{
                setLpthListUser(lpth_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const lpthElementUser = lpthListUser.map((lpth_item, index)=>{
        return(
            <tr key={index}>
                <td>{lpth_item.lpthId}</td>
                <td>{lpth_item.lpthFullName}</td>
                <td>{lpth_item.lpthAge}</td>
                <td>{lpth_item.lpthActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   lpthElementUser
                }
            </tbody>
        </table>
    </div>
  )
}