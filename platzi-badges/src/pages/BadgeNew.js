import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitterHandle: ''
    }
  };

  handleChange = event => {
    
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    const {form} = this.state;
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                {...form}
                avatarUrl="https://www.gravatar.com/avatar/" />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                {...form} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;
