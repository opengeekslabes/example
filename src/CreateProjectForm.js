import React, { Component } from 'react'
import Tasks from './Tasks';

class CreateProjectForm extends Component {
  state = { title: "", description: "", errorMessage: "Empty fields!", arr: [], id: 1 };
  
  handleChange = (event) => {
    if(event.target.name === "title") {
    this.setState({title: event.target.value});
  } else if (event.target.name === "description") {
    this.setState({description: event.target.value});
  } 
};

  handleAdd = () => {
    const { arr, title, description, errorMessage} = this.state;
    let {id} = this.state;

    if(!(title && description)) {
      alert(errorMessage)
      return
    }

    let value = `Project: ${title} Description: ${description}`;
    arr.push([Date.now(), `id: ${id} ${value}`]);
    id++
    this.setState({ arr, title: "", description: "", id});
  };

  handleRemove = (ind) => {
    const {arr} = this.state;

    let result = arr.filter((item, index) => {
    return ind !== index
    });

    this.setState({ arr: result });
  };

  render() {
    const {arr, title, description} = this.state;
    let arrValues = [];
    let arrKeys = [];
    for (let item of arr) {
      arrValues.push(item[1]);
      arrKeys.push(item[0]);
    }

    return (
      <div className="container mt-5 border border-light rounded p-4">
        <form id="infoForm" className="form-group">
          <label htmlFor="title">Title of your Project</label>
          <input
            required
            name="title"
            id="title"
            type="text"
            value={title}
            className="form-control mb-3"
            placeholder="title"
            onChange={this.handleChange}
          />
          <label htmlFor="title">Description of your Project</label>
          <input
            required
            name="description"
            id="description"
            type="text"
            value={description}
            className="form-control mb-3"
            placeholder="description"
            onChange={this.handleChange}
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleAdd}
          >
            Add
          </button>
        </form>
        <ul>
          {arrValues.map((item, index) => (
            <div key={arrKeys[index]} className="p-2 mt-2 border border-light">
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5">{item}</span>
                <button type="button" className="btn btn-light" onClick={() => this.handleRemove(index)}>Remove</button>
              </div>
              <Tasks errorMessage = {this.state.errorMessage}/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default CreateProjectForm;