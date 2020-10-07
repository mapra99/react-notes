import React from 'react';

class BadgeForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {firstName, lastName, email} = this.state;
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={firstName} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={lastName} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input onChange={this.handleChange} className="form-control" type="email" name="email"  value={email} />
          </div>

          <button className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm;
