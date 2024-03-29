import React from 'react';
import {Link} from 'react-router-dom';

class BadgesList extends React.Component {
  render() {
    const {badges} = this.props;

    if (badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningún badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled">
        {badges.map(badge => (
          <li key={badge.id}>
            <p>{badge.firstName} {badge.lastName}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default BadgesList;
