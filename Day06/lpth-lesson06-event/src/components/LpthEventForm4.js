import React, { Component } from 'react';

class LpthEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lpthSelectCheckBox: ["Apple"],
    };
  }

  // Hàm xử lý khi chọn checkbox
  lpthHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let selected = [...this.state.lpthSelectCheckBox];

    const selectedOptions = checked
      ? [...selected, value]
      : selected.filter(option => option !== value);

    console.log("selected:", selected, "selectedOptions:", selectedOptions);

    this.setState({
      lpthSelectCheckBox: selectedOptions,
    });
  };

   //submit form 
   lpthHandleSubmit =(ev)=>{
    ev.preventDefault();
    alert("Select:" + this.state.lpthSelectCheckBox);
   }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form Input - Checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.lpthSelectCheckBox.includes("Apple")}
              onChange={this.lpthHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.lpthSelectCheckBox.includes("Banana")}
              onChange={this.lpthHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.lpthSelectCheckBox.includes("Orange")}
              onChange={this.lpthHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.lpthHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default LpthEventForm4;
