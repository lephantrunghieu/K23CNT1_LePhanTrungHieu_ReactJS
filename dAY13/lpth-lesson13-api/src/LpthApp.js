import React from 'react'
import LpthReadApiLocal from './components/LpthReadApiLocal'
import LpthReadMockAPI from './components/LpthReadMockAPI'
import LpthCreateMockAPI from './components/LpthCreateMockAPI';

console.log("LpthReadApiLocal:", LpthReadApiLocal);
console.log("LpthReadMockAPI:", LpthReadMockAPI);

export default function LpthApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1>React js Lpth K23cnt1</h1>
      <hr />
      <LpthReadApiLocal />
      <hr />
      <h2> Doc du lieu tu mockapi</h2>
      <LpthReadMockAPI />
      <LpthCreateMockAPI />
    </div>
  )
}
