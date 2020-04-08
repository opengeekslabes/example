import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Example extends Component {
    constructor(props) {
    super(props);
    this.state = { 
        cards: []
    }
};

  render() {  
   let cards = this.state;
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
    this.state = { count: 0, value: "" };

  };

  onClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
    
  }

  onChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() { 
   let value = this.state.value; 
   return (
    <div className="container mt-5">
        <form className="form-group">
            <input type="text" className="form-control" placeholder="some text" onChange={this.onChange}/>
            <button type="button" className="btn btn-light" onClick={this.onClick}>Add</button>
        </form>
        {[...Array(this.state.count)].map(() => <li>{value}</li>)}
    </div>
    )
  }
}

export default Example;
