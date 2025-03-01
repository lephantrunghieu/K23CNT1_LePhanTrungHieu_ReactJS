import React, { Component } from 'react'
import LpthEventForm1 from './components/LpthEventForm1';
import LpthEventForm2 from './components/LpthEventForm2';
import LpthEventForm3 from './components/LpthEventForm3';
import LpthEventForm4 from './components/LpthEventForm4';
import LpthEventForm5 from './components/LpthEventForm5';

 class LpthApp extends Component {
  //Ham xu ly du lieu tu form student
  LpthHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }
  
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <LpthEventForm1 />
        <LpthEventForm2 />
        <LpthEventForm3 />
        <LpthEventForm4 />
        <LpthEventForm5 onLpthHandleSubmit={this.LpthHandleSubmitForm} />

        </div>
    );
  }
}
export default LpthApp;