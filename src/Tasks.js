import React, { Component } from 'react'
import './index.css'

class Tasks extends Component {
  state = { value: "", arr: [] };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleAdd = (event) => {
    const {value, arr} = this.state;
    if(!value) {
      alert(this.props.errorMessage)
      return
    }
    arr.push(value)

    this.setState({ arr });
    document.querySelector('textarea').value = "";
    this.setState({value: ""});
  };

  handleRemove = (event) => {
    let result;
    const {arr} = this.state;
    let i = event.target.parentElement.getAttribute('attr');

    result = arr.filter((item, index) => {
    return +i !== index
    });

    this.setState({ arr: result });
  };

  handleEdit = (event) => {
    let listItem = event.target.parentElement.firstElementChild;

    if (listItem.tagName === "LI") {
        let text = listItem.textContent;
        listItem.outerHTML = `<textarea className="h6" id="exampleFormControlTextarea1" rows="2">${text}</textarea>`;
        event.target.textContent = "Save";
      } else {
        let text = listItem.value;
        listItem.outerHTML = `<li className="h6">${text}</li>`;
        event.target.textContent = "Edit";
      };
  };

  render() {
  return  (
    <div className="form-group">
      <label className="h6" htmlFor="example">Add new tasks</label>
      <textarea className="form-control" id="example" rows="2" onChange={this.handleChange}></textarea>
      <button type="button" className="btn btn-light" onClick={this.handleAdd}>Add</button>
      <ul>
          {this.state.arr.map((item, index) => (
            <div key={index} attr={index} className="p-2 mt-2 border border-light">
              <li className="h6">{item}</li><hr/>
              <button type="button" className="btn btn-light mr-4">Done</button>
              <button type="button" className="btn btn-light mr-4" onClick={this.handleEdit}>Edit</button>
              <button type="button" className="btn btn-light" onClick={this.handleRemove}>Remove</button>
            </div>
          ))}
      </ul>
    </div>
    );
  }
};

export default Tasks;