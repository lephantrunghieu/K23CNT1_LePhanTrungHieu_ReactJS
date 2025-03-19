// Component thêm người dùng
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LpthCreateUser() {
  const [formData, setFormData] = useState({ lpth_name: '', lpth_email: '', lpth_phone: '', lpth_active: false });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('https://67dab98b35c87309f52db836.mockapi.io/k23cnt1_lephantrunghieu/lpth_users', formData)
      .then(() => navigate('/list-user'))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h2>Thêm mới người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="lpth_name" placeholder="Tên" onChange={handleChange} required />
        <input type="email" name="lpth_email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="lpth_phone" placeholder="Số điện thoại" onChange={handleChange} required />
        <label>
          <input type="checkbox" name="lpth_active" onChange={handleChange} /> Hoạt động
        </label>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

export default LpthCreateUser;