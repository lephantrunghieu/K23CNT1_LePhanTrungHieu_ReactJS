import React from 'react'
import LpthLogoutComp from './LpthLogoutComp'
import LpthLoginComp from './LpthLoginComp'

export default function LpthLoginControl(props) {
    const lpthElement = props.isLoggedIn ?<LpthLoginComp /> : <LpthLogoutComp />
    // consrt lpthLogin =()=>
    //     if (props.isLogin)
    //  return <LpthLogoutComp /> 
    //      else
    // return
  return (
    <div>
      {lpthElement}
    </div>
  )
}
