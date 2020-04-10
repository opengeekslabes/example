import React, { Component } from 'react'
import Info from './Info';
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

export default Example;




