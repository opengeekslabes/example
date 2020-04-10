import React, { Component } from 'react'
import Tasks from './Tasks';
import './index.css'

class Info extends Component {
  state = { name: "", surname: "", job: "", errorMessage: "Empty fields!", arr: [] };
  
  handleChange = (event) => {
    if(event.target.name === "name") {
    this.setState({name: event.target.value});
  } else if (event.target.name === "surname") {
    this.setState({surname: event.target.value});
  } else {
    this.setState({job: event.target.value});
  }
};

  handleSubmit = () => {
    const { arr, name, surname, job, errorMessage } = this.state;
    if(!(name && surname && job)) {
      alert(errorMessage)
      return
    }
    arr.push(`My name is ${name} ${surname}, ${job}`);
    this.setState({ arr });

    let container = document.querySelector("#infoForm");
    let inputs = container.querySelectorAll("input");
    inputs.forEach(item => item.value = "");
    this.setState({name: ""});
    this.setState({surname: ""});
    this.setState({job: ""});
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

  render() {
    return (
      <div className="container mt-5">
        <form id="infoForm" className="form-group">
          <input
            required
            name="name"
            type="text"
            className="form-control mb-3"
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            required
            name="surname"
            type="text"
            className="form-control mb-3"
            placeholder="surname"
            onChange={this.handleChange}
          />
          <input
            required
            name="job"
            type="text"
            className="form-control mb-3"
            placeholder="job"
            onChange={this.handleChange}
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </form>
        <ul>
          {this.state.arr.map((item, index) => (
            <div key={index} attr={index} className="p-2 mt-2 border border-light">
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5">{item}</span>
                <button type="button" className="btn btn-light" onClick={this.handleRemove}>Remove</button>
              </div>
              <Tasks errorMessage = {this.state.errorMessage}/>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Info;