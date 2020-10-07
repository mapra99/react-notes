import React from 'react';

class BadgeForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const {firstName, lastName, email, jobTitle, twitterHandle} = this.props;
    const {onChange} = this.props;
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={onChange} className="form-control" type="text" name="firstName" value={firstName} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input onChange={onChange} className="form-control" type="text" name="lastName" value={lastName} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input onChange={onChange} className="form-control" type="email" name="email"  value={email} />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input onChange={onChange} className="form-control" type="text" name="jobTitle"  value={jobTitle} />
          </div>

          <div className="form-group">
            <label>Twitter Handle</label>
            <input onChange={onChange} className="form-control" type="text" name="twitterHandle"  value={twitterHandle} />
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
