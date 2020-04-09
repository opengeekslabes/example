import React, { Component } from 'react'
import './index.css'

class Example extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="h1">
          <div className="h2">Add info from input</div>
          <Info />
        </div>
      </div>
    );
  }
}

class Info extends Component {
  state = { value: "", arr: [] };
  handleChange = this.handleChange.bind(this);
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = () => {
    const { arr, value } = this.state;
    arr.push(value);
    this.setState({ arr });
    console.log(this.state.arr)
  };

  render() {
    return (
      <div className="container mt-5">
        <form className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="some text"
            onChange={this.handleChange}
          />
          <button
            type="button"
            className="btn btn-light"
            onClick={() => this.handleSubmit()}
          >
            Add
          </button>
        </form>
        <ul>
          {this.state.arr.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Example;




