import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Example extends Component {
    constructor(props) {
    super(props);
};

  render() {  
   return (
    <div className="container mt-5">
      <div className="h1">
          <div className="h2">Add info from input</div>
          <Info />
      </div>
    </div>
    )
  }
}

class Info extends Component {
    constructor(props) {
    super(props);
    this.state = { value: "", arr: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(props) {
     this.state.arr.push(this.state.value)
     console.log(this.state.arr)
  }

  render() { 
   return (
    <div className="container mt-5">
        <form className="form-group">
            <input type="text" className="form-control" placeholder="some text" onChange={this.handleChange}/>
            <button type="button" className="btn btn-light" onClick={this.handleSubmit}>Add</button>
        </form>
        <ul>{this.state.arr.map((item) => <li>{item}</li>)}</ul>
    </div>
    )
  }
}



export default Example;




