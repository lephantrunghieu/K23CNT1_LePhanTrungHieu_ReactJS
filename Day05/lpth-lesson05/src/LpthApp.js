import React, { Component } from 'react';
import LpthFuncCompEvent1 from './components/LpthFuncCompEvent1';
import LpthClassCompEvent1 from './components/LpthClassCompEvent1';
import LpthFuncCompEventProps from './components/LpthFuncCompEventProps';
import LpthClassCompEventProps from './components/LpthClassCompEventProps';
import LpthClassCompEventState from './components/LpthClassCompEventState';
import LpthClassCompEventPostData from './components/LpthClassCompEventPostData';

class LpthApp extends Component {
  constructor(props){
      super(props);
      this.state = {
          lpthNoiDung:"Chưa có gì",
      }
  }
  // Hàm xử lý sự kiện khi component con chuyển dữ liệu lên
  lpthHandleDataToApp = (content)=>{
      alert(content);
      this.setState({
          lpthNoiDung:content,
      })
  }
  render() {
      return (
          <div className='container border mt-3'>
              <h1 className='text-center alert alert-info my-2'>K23CNT1 - Lê Phan Trung Hiếu - Event and Form</h1>
              <hr/>
              <div>
                  <h2>Function Component  - Event</h2>
                  <LpthFuncCompEvent1 />
              </div>
              <hr/>
              <div>
                  <h2>Class Component - Event</h2>
                  <LpthClassCompEvent1 />
              </div>
              <hr/>
              <div>
                  <h2>Function Component - Event; props</h2>
                  <LpthFuncCompEventProps lpthRenderName="Lê Phan Trung Hiếu" />
              </div>
              <hr/>
              <div>
                  <h2>Class Component - Event; props</h2>
                  <LpthClassCompEventProps lpthRenderTitle = "Welcome to Hiếu Lê"/>
              </div>

              <div>
                  <h2>Class Component - Event; state</h2>
                  <LpthClassCompEventState />
              </div>
              <div>
                  <h1>{this.state.lpthNoiDung}</h1>
                  <h2>Class Component - Event; Post Data to App </h2>
                  <LpthClassCompEventPostData onLpthDataToApp={this.lpthHandleDataToApp} />
              </div>
          </div>
      );
  }
}

export default LpthApp;