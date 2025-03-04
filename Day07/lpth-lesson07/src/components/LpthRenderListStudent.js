import React, { Component } from 'react'

 class LpthRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            lpthStudents:[
                {lpthId:"SV001",lpthName:"Le Phan Trung Hieu", lpthAge:22, lpthClass:"K23CNT1"},
                {lpthId:"SV002",lpthName:"Le Phan Trung", lpthAge:45, lpthClass:"K23CNT1"},
                {lpthId:"SV003",lpthName:"Le Phan", lpthAge:14, lpthClass:"K23CNT1"},
            ],
        }
    }

  render() {
        // render data
        const lpthElement = this.state.lpthStudents.map((lpthItem, index)=>{
        
        return (
            <tr>
                    <td>{index+1}</td>
                    <td>{lpthItem.lpthId}</td>
                    <td>{lpthItem.lpthName}</td>
                    <td>{lpthItem.lpthAge}</td>
                    <td>{lpthItem.lpthClass}</td>
                    <td>
                        <button className=''>Sua</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
            </tr>
        )
    })
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2>Danh sách sinh viên</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>lpthID</th>
                                <th>lpthName</th>
                                <th>lpthAge</th>
                                <th>lpthClass</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lpthElement}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default LpthRenderListStudent