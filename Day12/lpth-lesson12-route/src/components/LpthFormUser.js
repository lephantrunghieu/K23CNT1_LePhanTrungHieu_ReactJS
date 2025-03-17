import React, { useState } from 'react'

export default function LpthFormUser({ onLpthAddNew }) {
    const [id, setLpthId] = useState('')
    const [lpthFullName, setLpthFullName] = useState('')
    const [lpthUserName, setLpthUserName] = useState('')
    const [lpthPass, setLpthPass] = useState('')

    const lpthHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id, lpthFullName, lpthUserName, lpthPass)

        onLpthAddNew({ id, lpthFullName, lpthUserName, lpthPass })
    }

    return (
        <div>
            <form>
                <p>Mã sinh viên:
                    <input type='text' name='id' value={id} onChange={(ev) => setLpthId(ev.target.value)} /> </p>
                <p>Họ và tên:
                    <input type='text' name='lpthFullName' value={lpthFullName} onChange={(ev) => setLpthFullName(ev.target.value)} /> </p>
                <p>Tài khoản:
                    <input type='text' name='lpthUserName' value={lpthUserName} onChange={(ev) => setLpthUserName(ev.target.value)} /> </p>
                <p>Mật khẩu:
                    <input type='password' name='lpthPass' value={lpthPass} onChange={(ev) => setLpthPass(ev.target.value)} /> </p>

                <p>
                    <button name='lpthSave' onClick={lpthHandleSubmit}>Save</button>
                </p>
            </form>
        </div>
    )
}
