import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LpthNavNar from './components/LpthNavNar'
import LpthHome from './components/LpthHome'
import LpthAbout from './components/LpthAbout'
import LpthContact from './components/LpthContact'
import LpthListUser from './components/LpthListUser'
import LpthFormUser from './components/LpthFormUser'

export default function LpthApp() {
  const listUsers  = [
    {id:"SV001", lpthFullName:"Lê Phan Trung Hiếu", lpthUserName:"lpth", lpthPass:"123456a@"},
    {id:"SV002", lpthFullName:"Trịnh Quan Quang", lpthUserName:"QuanTrinh", lpthPass:"123456a@"},
    {id:"SV003", lpthFullName:"Nguyễn Quang A", lpthUserName:"QuangA", lpthPass:"123456a@"},
  ]

  const [lpthUsers, setLpthUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const lpthHandleAdd = (lpthParam) => {
    console.log("lpthHandleAdd:", lpthParam);
    
    setLpthUsers(prev => [
      ...prev,
      lpthParam
    ])
  }

  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Lê Phan Trung Hiếu K23 CNt1]</h1>
        <hr/>
        <Router>
            <LpthNavNar />
            <Routes>
                <Route path='/' element={<LpthHome />} />
                <Route path='/about' element={<LpthAbout />} />
                <Route path='/contact' element={<LpthContact />} />
                <Route path='/list-user' element={<LpthListUser renderLpthUsers={lpthUsers}/>} />
                <Route path='/create-user' element={<LpthFormUser onLpthAddNew={lpthHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}
