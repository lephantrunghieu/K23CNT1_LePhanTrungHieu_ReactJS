import React, { useState } from 'react'

export default function LpthUseEffect1() {
  const [count, setCount ] = useState(0);
    useEffect(
        ()=>{
            console.log("useEffect (callback)");
            
        }
    )

    useEffect(()=>{
        console.log("useEffect(callback,[]); chi mot lan duy nhat")
    })
  return (
    <div className='alert alert-danger'>
      <h2>useEffect</h2>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}
