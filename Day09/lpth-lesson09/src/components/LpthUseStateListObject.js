import React, { useState } from 'react'

export default function LpthUseStateListObject() {
    // Mock data
    const listStudent = [
        {lpthId: "SV001", lpthName: "Le Phan Trung Hieu", lpthAge: 23, lpthClass: "K23CNT1"},
        {lpthId: "SV002", lpthName: "Nguyen Van A", lpthAge: 22, lpthClass: "K23CNT2"},
        {lpthId: "SV003", lpthName: "Tran Thi B", lpthAge: 21, lpthClass: "K23CNT3"},
    ];

    // Khai báo state
    const [lpthStudents, setLpthStudents] = useState(listStudent);

    // Render dữ liệu
    let lpthElement = lpthStudents.map((lpthItem, index) => {
        return (
            <tr key={lpthItem.lpthId}>
                <td>{index + 1}</td>
                <td>{lpthItem.lpthId}</td>
                <td>{lpthItem.lpthName}</td>
                <td>{lpthItem.lpthAge}</td>
                <td>{lpthItem.lpthClass}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table border="1">
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
    );
}
