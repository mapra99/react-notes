import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      badges: undefined
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const badges = await api.badges.list();
      this.setState({ loading: false, badges })
    } catch (error) {
      this.setState({ loading: false, error })
    }
  }

  render() {
    const {loading, error} = this.state;
    if (loading) {
      return 'Loading...';
    }

    if (error) {
      return `Error: ${error.message}`
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.badges} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges;
