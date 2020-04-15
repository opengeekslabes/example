import React, { Component } from "react";
import "./index.css";

class Tasks extends Component {
  state = {
    value: "",
    arr: [],
    isEditing: true,
    editAreaValue: "",
    isDone: false,
    editIndex: ""
  };

  handleChange = event => {
    if (event.target.name === "example") {
      this.setState({ value: event.target.value });
    } else if (event.target.name === "editArea") {
      this.setState({ editAreaValue: event.target.value });
    }
  };

  handleAdd = () => {
    const { value, arr } = this.state;
    if (!value) {
      alert(this.props.errorMessage);
      return;
    }
    arr.push(value);
    this.setState({ arr, value: "" });
  };

  handleRemove = ind => {
    const { arr } = this.state;

    let result = arr.filter((item, index) => {
      return ind !== index;
    });

    this.setState({ arr: result });
  };

  handleEdit = (item, index) => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing,
      editIndex: index
    }));
  };

  handleSave = (item, index) => {
    let { arr, editAreaValue } = this.state;
    let value = !editAreaValue ? item : editAreaValue;
    arr[index] = value;

    this.setState(prevState => ({
      arr,
      editIndex: "",
      isEditing: !prevState.isEditing
    }));
  };

  handleDone = () => {
    let { isDone } = this.state;
    this.setState({ isDone: !isDone });
  };

  render() {
    const { arr, value, isEditing, isDone, editIndex } = this.state;
    return (
      <div className="form-group">
        <div className="h6">Add new tasks</div>
        <textarea
          className="form-control"
          value={value}
          name="example"
          rows="2"
          onChange={this.handleChange}
        />
        <button
          type="button"
          className="btn btn-light"
          onClick={this.handleAdd}
        >
          Add
        </button>
        <ul>
          {arr.map((item, index) => (
            <div key={index} className="p-2 mt-2 border border-light">
              {editIndex !== index ? (
                <li className="h6">
                  {isDone === true
                    ? `${item} ${String.fromCharCode(9745)} is done`
                    : item}
                </li>
              ) : (
                <textarea
                  className="h6"
                  name="editArea"
                  id="editArea"
                  rows="2"
                  defaultValue={item}
                  onChange={this.handleChange}
                />
              )}
              <hr />
              <button
                type="button"
                className="btn btn-light mr-4"
                onClick={this.handleDone}
              >
                {String.fromCharCode(10004)}
              </button>
              <EditButton
                item={item}
                index={index}
                handleEdit={() => this.handleEdit(item, index)}
                handleSave={() => this.handleSave(item, index)}
                isEditing={isEditing}
              />
              <button
                type="button"
                className="btn btn-light"
                onClick={() => this.handleRemove(index)}
              >
                {String.fromCharCode(10007)}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function EditButton(props) {
  return props.isEditing === true ? (
    <button
      type="button"
      className="btn btn-light mr-4"
      onClick={() => props.handleEdit()}
    >
      {String.fromCharCode(9998)}
    </button>
  ) : (
    <button
      type="button"
      className="btn btn-light mr-4"
      onClick={() => props.handleSave()}
    >
      {String.fromCharCode(10000)}
    </button>
  );
}

export default Tasks;