import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LpthCreateUser() {
    const lpthUser = {
        'lpth_name': '',
        'lpth_email': '',
        'lpth_phone': '',
        'lpth_active': true
    }

    const [lpth_user, setLpth_User] = useState(lpthUser);
    const lpthApi = "https://67e0ab187635238f9aae068c.mockapi.io/lpth-k23cnt1-2310900036/lpth_user"
    const navigate = useNavigate();

    const lpthHandlSubmit = (ev) => {
        ev.preventDefault();
        console.log("Dữ liệu gửi đi:", lpth_user);

        axios
            .post(lpthApi, lpth_user)
            .then(() => {
                navigate('/lpth-list-user')
            })
            .catch((error) => {
                console.log('Lỗi khi thêm user:', error.response?.data || error.message);
            });
    }

    return (
        <div>
            <h2>Thêm mới user</h2>
            <form onSubmit={lpthHandlSubmit}>
                <div className="mb-3 row">
                    <label htmlFor="lpth_name" className="col-sm-2 col-form-label">FullName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lpth_name"
                            name="lpth_name"
                            value={lpth_user.lpth_name}
                            onChange={(ev) => setLpth_User({ ...lpth_user, lpth_name: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="lpth_email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lpth_email"
                            name="lpth_email"
                            value={lpth_user.lpth_email}
                            onChange={(ev) => setLpth_User({ ...lpth_user, lpth_email: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="lpth_phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="lpth_phone"
                            name="lpth_phone"
                            value={lpth_user.lpth_phone}
                            onChange={(ev) => setLpth_User({ ...lpth_user, lpth_phone: ev.target.value })}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="lpth_active" className="col-sm-2 col-form-label">Active</label>
                    <div className="col-sm-10">
                        <input type="radio" id="lpth_active_true" className="mx-3"
                            onChange={(ev) => setLpth_User({ ...lpth_user, lpth_active: ev.target.value === "true" })}
                            value="true"
                            name="lpth_active"
                            checked={lpth_user.lpth_active === true}
                        />
                        <label htmlFor="lpth_active_true">Hoạt động</label>

                        <input type="radio" id="lpth_active_false" className="mx-3"
                            onChange={(ev) => setLpth_User({ ...lpth_user, lpth_active: ev.target.value === "true" })}
                            value="false"
                            name="lpth_active"
                            checked={lpth_user.lpth_active === false}
                        />
                        <label htmlFor="lpth_active_false">Tạm khóa</label>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className="btn btn-primary mx-2 px-3" type="submit">Create</button>
                        <button className="btn btn-secondary mx-2 px-3" type="button" onClick={() => navigate('/lpth-list-user')}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
