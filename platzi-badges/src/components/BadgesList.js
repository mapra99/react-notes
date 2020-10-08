import React from 'react';

class BadgesList extends React.Component {
  render() {
    const {badges} = this.props;

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
