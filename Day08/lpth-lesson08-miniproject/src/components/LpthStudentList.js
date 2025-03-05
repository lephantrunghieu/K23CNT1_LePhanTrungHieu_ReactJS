import React, { Component } from 'react'
import LpthStudent from './LpthStudent'

export default class LpthStudentList extends Component {
    constructor(props){
        super(props);

    }
    render() {
        //lay du lieu trong props tu LpthApp chuyen xuong 
        let {renderLpthStudents} = this.props;
        console.log("List",renderLpthStudents);
        
        //chuyen du lieu vao lpthStudent de hien thi 
        let lpthElementStudent = renderLpthStudents.map((lpthItem,index)=>{
            return <LpthStudent key={index} renderLpthStudent={lpthItem} onLpthHandleView={this.lpthHandleView}/>
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lpthElementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
