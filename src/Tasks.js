import React, { Component } from 'react'
import './index.css'

class Tasks extends Component {
  state = { value: "", 
    arr: [], 
    taskValue: true, 
    editareaValue: "" };

  handleChange = (event) => {
    if(event.target.name === "example") {
    this.setState({value: event.target.value});
  } else if (event.target.name === "editArea") {
    this.setState({editareaValue: event.target.value});
  };
};

  handleAdd = () => {
    const {value, arr} = this.state;
    if(!value) {
      alert(this.props.errorMessage)
      return
    }
    arr.push(value)
    this.setState({ arr });
    this.setState({value: ""});
  };

  handleRemove = (ind) => {
    const {arr} = this.state;
 
    let result = arr.filter((item, index) => {
    return ind !== index
    });

    this.setState({ arr: result });
  };

  handleEdit = (index, item) => {
    let taskValue = this.state.taskValue;
    this.setState({taskValue : !(taskValue)})
    console.log(index + " " + item)
  };

  handleSave = (index, item) => {
    let {arr, editareaValue} = this.state;
    let value = !editareaValue ? item : editareaValue;
    let taskValue = this.state.taskValue;
    this.setState({taskValue : !(taskValue)})

    arr[index] = value;
    this.setState({arr})
  };

  render() {
  const {arr, value, taskValue} = this.state;
  return  (
    <div className="form-group">
      <div className="h6">Add new tasks</div>
      <textarea 
        className="form-control" 
        value={value} 
        name="example" 
        rows="2" 
        onChange={this.handleChange}></textarea>
      <button 
        type="button" 
        className="btn btn-light" 
        onClick={this.handleAdd}>Add</button>
      <ul>
          {arr.map((item, index) => (
            <div key={index} className="p-2 mt-2 border border-light">
              <LiElement 
                item = {item} 
                taskValue = {taskValue}
                handleChange = {this.handleChange.bind(this)}/> <hr/>
              <button 
                type="button" 
                className="btn btn-light mr-4"
                onClick={this.handleDone}>Done</button>
              <EditButton 
                item = {item} 
                index = {index} 
                handleEdit = {this.handleEdit.bind(this)} 
                handleSave = {this.handleSave.bind(this)} 
                taskValue = {taskValue}/>
              <button 
                type="button" 
                className="btn btn-light" 
                onClick={() => this.handleRemove(index)}>Remove</button>
            </div>
          ))}
      </ul>
    </div>
    );
  }
};

function LiElement (props) {
  return props.taskValue === true ? <li className="h6">{props.item}</li> :
  <textarea 
    className="h6" 
    name="editArea" 
    id="editArea" 
    rows="2" 
    defaultValue={props.item} 
    onChange={props.handleChange}></textarea>
}

function EditButton (props) {
  return props.taskValue === true ? 
  <button type="button" 
    className="btn btn-light mr-4" 
    onClick={() => props.handleEdit(props.index, props.item)}>Edit</button> :
  <button type="button" 
    className="btn btn-light mr-4" 
    onClick={() => props.handleSave(props.index, props.item)}>Save</button>
}

export default Tasks;