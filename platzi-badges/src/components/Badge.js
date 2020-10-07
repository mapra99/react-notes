import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return(
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo from Platzi Conf" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://www.gravatar.com/avatar/" alt="Avatar" />
          <h1>Miguel<br/>Prada</h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@MiguelPrada1</div>
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    );
  }
}

export default Badge;
