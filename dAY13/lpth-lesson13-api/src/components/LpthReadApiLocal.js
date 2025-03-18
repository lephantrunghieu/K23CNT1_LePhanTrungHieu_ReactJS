import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function LpthReadApiLocal() {
    // khởi tạo state
    const [lpthListUser, setLpthListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho lpthListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((lpthResponse)=>{
                setLpthListUser(lpthResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    lpthListUser.map((lpthItem, index)=>{
                        return (
                            <tr key={index}>
                                <td>{lpthItem.fullName}</td>
                                <td>{lpthItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
