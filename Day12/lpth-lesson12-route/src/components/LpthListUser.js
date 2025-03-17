import React from 'react'

export default function LpthListUser({ renderLpthUsers }) {
    const lpthElements = renderLpthUsers.map((lpthItem, index) => {
        return (
            <tr key={index}> 
                <td>{index + 1}</td>
                <td>{lpthItem.id}</td>
                <td>{lpthItem.lpthFullName}</td>
                <td>{lpthItem.lpthUserName}</td>
                <td>{lpthItem.lpthPass}</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {lpthElements}
                </tbody>
            </table>
        </div>
    );
}
