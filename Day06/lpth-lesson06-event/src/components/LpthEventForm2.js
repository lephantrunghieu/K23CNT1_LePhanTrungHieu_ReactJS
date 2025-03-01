import React, { Component } from 'react'

 class LpthEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
          lpthCourse: 'CSS',
        }
      }

      //Ham xu ly su kien khi thay doi 
      lpthHandleChange = (event)=>{
        //cap nhat state 
        this.setState({
            lpthCourse:event.target.value,
        })
      }

      //ham xu ly su kien khi submit form 
      lpthHandleSubmit = (event)=>{
        alert("Khoa hoc ban chon:" + this.state.lpthCourse);
        event.preventDefault();
      }
  render() {
    return (
      <div className='alert alert-danger'>
                        <h2>Form Select</h2>
                <form>
                    <label htmlFor=''>
                        <select name='lpthCourse' id='lpthCourse' 
                        value={this.state.lpthCourse}
                        onChange={this.lpthHandleChange}
                        >
                            <option value={'HTML5'}>HTML5</option>
                            <option value={'CSS3'}>CSS3</option>
                            <option value={'JAVASCRIPT'}>Java</option>
                            <option value={'Jquery'}>Jquery</option>
                            <option value={'Bootstrap'}>Bootstrap</option>
                        </select>

                    </label>
                    <button className='btn btn-primary' onClick={this.lpthHandleSubmit}>
                        Click here
                    </button>
                </form>
      </div>
    );
  }
}
export default LpthEventForm2