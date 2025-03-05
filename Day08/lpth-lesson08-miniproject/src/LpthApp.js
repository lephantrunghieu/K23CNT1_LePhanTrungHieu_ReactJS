import React, { Component } from 'react'
import LpthControl from './components/LpthControl'
import LpthStudentList from './components/LpthStudentList'
import LpthForm from'./components/LpthForm';

 class LpthApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      lpthStudents:[
        {lpthId:"VIP001",lpthStudentNam:"Le Phan Trung Hieu",lpthAge:22,lpthGender:"Nam",lpthBirthday:"104/11/2003",lpthPlace:"Vinh Phuc",lpthAddress:"Ha Dong"},
        {lpthId:"VIP002",lpthStudentNam:"Le Phan Trung ",lpthAge:23,lpthGender:"Nam",lpthBirthday:"04/10/2003",lpthPlace:"Vinh",lpthAddress:"Hoang Mai"},
        {lpthId:"VIP003",lpthStudentNam:"Le Phan ",lpthAge:21,lpthGender:"Nam",lpthBirthday:"04/1/2003",lpthPlace:"Vinh Yen",lpthAddress:"Tan Trieu, Yen Xa"},
        {lpthId:"VIP004",lpthStudentNam:"Leee ",lpthAge:23,lpthGender:"Nam",lpthBirthday:"04/10/2003",lpthPlace:"Vinh",lpthAddress:"Hoang Mai Linh"},
      ],
      lpthStudent:"",
    }
  }

  //ham xu ly su kien view Student
  lpthHandleView = (lpthStudent)=>{
    this.setState({
      lpthStudent:lpthStudent,
    })
  }
  render() {
    //log
    console.log("view student:",this.state.lpthStudent);
    
    return (
      <div>
        <h1 className='text-center'>Le Phan Trung Hieu - Mini Project</h1>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* header */}
              <LpthControl/>
              {/* Danh sach sinh vien */}
              <LpthStudentList renderLpthStudents={this.state.lpthStudents} onLpthHandleView={this.lpthHandleView}/>
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* form */}
            <LpthForm renderLpthStudent = {this.state.lpthStudent}/>
          </div>
        </div>

      </div>
    )
  }
}
export default LpthApp;