import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LpthListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://67dab98b35c87309f52db836.mockapi.io/k23cnt1_lephantrunghieu/lpth_users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.lpth_name}</td>
              <td>{user.lpth_email}</td>
              <td>{user.lpth_phone}</td>
              <td>{user.lpth_active ? 'Hoạt động' : 'Khóa'}</td>
              <td>
                <Link to={`/edit-user/${user.id}`}>Edit</Link>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LpthListUsers;