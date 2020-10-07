import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Miguel"
                lastName="Prada"
                jobTitle="Frontend Engineer"
                twitterHandle="MiguelPrada1"
                avatarUrl="https://www.gravatar.com/avatar/" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;
