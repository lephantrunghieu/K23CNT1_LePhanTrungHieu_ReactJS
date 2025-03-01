import React, { Component } from 'react'

export default class LpthEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            lpthName:'Hieu',
            lpthAge:22,
            lpthGender:'Female',
            lpthCourse:'CSS3'
        }
    }

    lpthHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }

        // Sự kiện khi submit form
        lpthHandleSubmit = (ev)=>{
            ev.preventDefault();
            alert(this.state.lpthName + "\n" + this.state.lpthAge);
    
            // Chuyển dữ liệu trên form lên App component (TvcApp);
            this.props.onlpthHandleSubmit(this.state);
        }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Student Info</h2>
        <form>
            <div>
                <label htmlFor='lpthName'>Student Name: </label>
                <input type='text' name='lpthName' id='lpthName'
                value={this.state.lpthName}
                onChange={this.lpthHandleChange}/>
            </div>
            <div>
                <label htmlFor='lpthAge'>Student Age </label>
                <input type='text' name='lpthAge' id='lpthAge'
                    value={this.state.lpthAge}
                    onChange={this.lpthHandleChange}/>
            </div>
            <div>
                <label htmlFor='lpthGender'>Student Gender </label>
                <input type='radio' name='lpthGender' id='lpthMale' className='mx-2'
                    value={'Male'}
                    onChange={this.lpthHandleChange}
                    checked={this.state.lpthGender === 'Male'}/>
                <label htmlFor='lpthMale'>Male</label>
            </div>
            <div>
        
                <input type='radio' name='lpthGender' id='lpthFemale' className='mx-2'
                    value={'Female'}
                    onChange={this.lpthHandleChange}
                    checked={this.state.lpthGender === 'Female'}/>
                <label htmlFor='lpthFemale'>Female</label>
            </div>
            <div>
                
                <input type='radio' name='lpthGender' id='lpthNone' className='mx-2'
                    value={'None'}
                    onChange={this.lpthHandleChange}
                    checked={this.state.lpthGender === 'None'}/>
                <label htmlFor='lpthNone'>None</label>
            </div>
            <div>
            <label htmlFor='lpthCourse'>
                        <select name='lpthCourse' id='lpthCourse' 
                        value={''}
                        onChange={this.lpthHandleChange}
                        >
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'CSS3'}>CSS3</option>
                            <option value={'JAVASCRIPT'}>Java</option>
                            <option value={'Jquery'}>Jquery</option>
                            <option value={'Bootstrap'}>Bootstrap</option>
                        </select>
                    </label>
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
