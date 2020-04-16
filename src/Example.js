import React, { Component } from 'react'
import Info from './Info';
import './index.css'

class Example extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="display-4 mb-5">Create new project</div>
        <Info />
      </div>
    );
  }
}

export default Example;




