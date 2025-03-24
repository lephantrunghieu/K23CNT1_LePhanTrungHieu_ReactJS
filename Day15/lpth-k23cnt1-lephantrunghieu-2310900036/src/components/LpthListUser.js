import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LpthListUser() {
    const [lpthListUser, setLpthListUser] = useState([])
    const lpthApi = "https://67e0ab187635238f9aae068c.mockapi.io/lpth-k23cnt1-2310900036/lpth_user"

    useEffect(() => {
        axios.get(lpthApi)
            .then(lpth_response => {
                console.log(lpth_response.data);
                setLpthListUser(lpth_response.data)
            })
            .catch(error => console.error('Có lỗi xảy ra:', error));
    }, [])

    const lpthHandleDelete = async (lpthId) => {
        if (window.confirm('Bạn có muốn xóa không?')) {
            try {
                await axios.delete(`${lpthApi}/${lpthId}`);
                setLpthListUser(lpthListUser.filter(x => x.id !== lpthId));
            } catch (error) {
                console.error("Lỗi khi xóa:", error);
            }
        }
    }

    const navigate = useNavigate();
    const lpthHandleUpdate = (lpthId) => {
        navigate(`/lpth-edit-user/${lpthId}`);
    }

    return (
        <div>
            <h2>Danh sách user</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {lpthListUser.map((lpthUserItem) => (
                        <tr key={lpthUserItem.id}>
                            <td>{lpthUserItem.id}</td>
                            <td>{lpthUserItem.lpth_name}</td>
                            <td>{lpthUserItem.lpth_email}</td>
                            <td>{lpthUserItem.lpth_phone}</td>
                            <td>
                                {lpthUserItem.lpth_active ? 
                                    <span className='badge text-bg-success'>Hoạt động</span> :
                                    <span className='badge text-bg-danger'>Tạm khóa</span>}
                            </td>
                            <td>
                                <button className="btn btn-warning mx-2" onClick={() => lpthHandleUpdate(lpthUserItem.id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => lpthHandleDelete(lpthUserItem.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
