import React, { Component } from 'react'

export default class LpthStudent extends Component {
    constructor(props){
        super(props);
    }

    //ham xu ly chuc nang xem
    lpthHandleView = (lpthStudent)=>{
        //chuyen len student list 
        this.props.onLpthHandleView(lpthStudent);
    }
    render() {
        //lay du lieu chuyen tu LpthStudentList
        let {renderLpthStudent, key} = this.props
        console.log("Student:",renderLpthStudent);
        
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderLpthStudent.lpthId}</td>
                    <td>{renderLpthStudent.lpthStudentName}</td>
                    <td>{renderLpthStudent.lpthAge}</td>
                    <td>{renderLpthStudent.lpthGender}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={()=>this.lpthHandleView(renderLpthStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}

