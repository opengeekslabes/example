import React, { Component } from "react";
import "./index.css";

class Tasks extends Component {
  state = {
    value: "",
    arr: [],
    isEditing: "",
    editAreaValue: "",
    editIndex: "",
    doneIndex: "",
    doneIndexArr: []
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
    arr.push([arr.length + 1, value]);
    this.setState({ arr, value: "" });
  };

  handleRemove = ind => {
    const { arr, doneIndexArr } = this.state;
    let id = arr[ind][0];

    if (doneIndexArr.includes(id)) {
      let del = doneIndexArr.indexOf(id);
      doneIndexArr.splice(del, 1);
    }

    let result = arr.filter((item, index) => {
      return ind !== index;
    });

    this.setState({ arr: result, doneIndexArr });
  };

  handleEdit = (item, index) => {
    this.setState({
      editIndex: index
    });
  };

  handleSave = (item, index) => {
    let { arr, editAreaValue } = this.state;
    let value = !editAreaValue ? item : editAreaValue;
    arr[index][1] = value;

    this.setState({
      arr,
      editIndex: ""
    });
  };

  handleDone = index => {
    let { arr, doneIndexArr } = this.state;
    let id = arr[index][0];
    let del = doneIndexArr.indexOf(id);

    doneIndexArr.includes(id)
      ? doneIndexArr.splice(del, 1)
      : doneIndexArr.push(id);

    this.setState({doneIndexArr});
  };

  render() {
    const { arr, value, doneIndexArr, editIndex } = this.state;
    let arrValues = [];
    let arrKeys = [];
    for (let item of arr) {
      arrValues.push(item[1]);
      arrKeys.push(item[0]);
    }

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
          {arrValues.map((item, index) => (
            <div key={arrKeys[index]} className="p-2 mt-2 border border-light">
              {editIndex !== index ? (
                <li className="h6">
                  {doneIndexArr.includes(arrKeys[index])
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
                onClick={() => this.handleDone(index)}
              >
                {String.fromCharCode(10004)}
              </button>
              <EditButton
                item={item}
                index={index}
                handleEdit={() => this.handleEdit(item, index)}
                handleSave={() => this.handleSave(item, index)}
                isEditing={editIndex !== index}
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