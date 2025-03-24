import React from 'react'
import { BrowserRouter as LpthRouter, Route, Routes } from 'react-router-dom'
import LpthNavBar from './components/LpthNavBar'
import LpthHome from './components/LpthHome'
import LpthEditUser from './components/LpthEditUser'
import LpthCreateUser from './components/LpthCreateUser'
import LpthListUser from './components/LpthListUser'
export default function LpthApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT1 - Lê Phan Trung Hiếu - 2310900036</h1>
      <hr/>
      <LpthRouter>
          <LpthNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<LpthHome/>} />
              <Route path='/lpth-list-user' element={<LpthListUser/>} />
              <Route path='/lpth-create-user' element={<LpthCreateUser/>} />
              <Route path='/lpth-edit-user/:id' element={<LpthEditUser/>} />
          </Routes>
      </LpthRouter>
    </div>
  )
}
