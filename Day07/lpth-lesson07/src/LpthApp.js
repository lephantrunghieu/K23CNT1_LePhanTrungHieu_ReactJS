import React, { Component } from 'react'
import LpthRenderCondition from './components/LpthRenderCondition';
import LpthRenderList from './components/LpthRenderList';
import LpthRenderListStudent from './components/LpthRenderListStudent';
import LpthProductList from "./components/LpthProductList"; 

 class LpthApp extends Component {
  render() {
    return (
      <div className='container border mt-3'> 
      <h1>Le Phan Trung Hieu - Lesson 07 - Render Condition -Render List Key</h1>
        <LpthRenderCondition />

        <LpthRenderList />

        <LpthRenderListStudent />

        <LpthProductList />
      </div>
    )
  }
}
export default LpthApp;