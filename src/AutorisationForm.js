import React, { Component } from 'react'
import './index.css';


class AutorisationForm extends Component {
  state = {email: "", password: ""};

  handleChange = (event) => {
    if(event.target.name === "inputEmail") {
    this.setState({email: event.target.value});
  } else if (event.target.name === "inputPassword") {
    this.setState({password: event.target.value});
  } 
};
  
  handleSubmit = (e) => {
    e.preventDefault()
    let {email, password} = this.state;

    if(email.includes('@') && password.length > 8) { 
      console.log(`${JSON.stringify(this.state)}`)
    } else {
      return alert('Fail') 
    }

    this.setState({email: "", password: ""})
    window.location.href = "/example";
  };

  render() {
    let {email, password} = this.state;
    return (
      <div className="container mt-5">
        <div className="display-4 mb-5">Autorisation form</div>
        <form className="border border-light rounded p-4">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              autoComplete="username"
              name="inputEmail"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              autoComplete="current-password"
              name="inputPassword"
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Password must be at least 8 characters long.
            </small>
          </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
              Submit
            </button>
        </form>
      </div>
    );
  }
}

export default AutorisationForm;