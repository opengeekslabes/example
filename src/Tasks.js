import React, { Component } from "react";
import EditButton from './EditButton';

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

  handleAdd = () => {
    const { value, arr } = this.state;
    if (!value) {
      alert(this.props.errorMessage);
      return;
    }
    arr.push({key: Date.now(), value: value})
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
    this.setState({ editIndex: index });
  };

  handleSave = (item, index) => {
    let { arr, editAreaValue } = this.state;
    let value = !editAreaValue ? item : editAreaValue;
    arr[index].value = value;

    this.setState({
      arr, 
      editIndex: ""
    });
  };

  handleDone = index => {
    let { arr, doneIndexArr } = this.state;
    let id = arr[index].key;
    let del = doneIndexArr.indexOf(id);

    doneIndexArr.includes(id)
      ? doneIndexArr.splice(del, 1)
      : doneIndexArr.push(id);

    this.setState({doneIndexArr});
  };

  render() {
    const { arr, value, doneIndexArr, editIndex, editAreaValue } = this.state;
    let arrValues = [];
    let arrKeys = [];
    for (let item of arr) {
      arrValues.push(item.value);
      arrKeys.push(item.key);
    }

    return (
      <div className="form-group">
        <div className="h6">Add new tasks</div>
        <textarea
          className="form-control"
          value={value}
          name="value"
          rows="2"
          onChange={(e) => { this.setState({value: e.target.value} )}}
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
                  onChange={(e) => { this.setState({editAreaValue: e.target.value} )}}
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

export default Tasks;