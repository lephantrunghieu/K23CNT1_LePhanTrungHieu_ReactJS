import React, { Component } from 'react';

class LpthEventForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lpthStudentName: 'Le Hieu'
        };
    }

    // Hàm xử lý thay đổi dữ liệu input
    lpthHandleChange = (event) => {
        this.setState({ lpthStudentName: event.target.value });
    };

    // Khi submit form, lấy dữ liệu và hiển thị
    lpthHandleSubmit = (ev) => {
        ev.preventDefault();
        alert('Xin chào: ' + this.state.lpthStudentName);
    };

    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form onSubmit={this.lpthHandleSubmit}>
                    <label htmlFor='lpthStudentName'>
                        <input
                            type='text'
                            name='lpthStudentName'
                            id='lpthStudentName'
                            value={this.state.lpthStudentName}
                            onChange={this.lpthHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary' type='submit'>
                        Click here
                    </button>
                </form>
            </div>
        );
    }
}

export default LpthEventForm1;
