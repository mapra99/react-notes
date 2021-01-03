import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user } = props;
  const isLoggedIn = Object.keys(user).length !== 0;

  const handleLogout = () => {
    const { logoutRequest } = props;
    logoutRequest();
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={isLoggedIn ? gravatar(user.email) : userIcon} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                <Link to='/'>Cuenta</Link>
              </li>
              <li>
                <a href='#logout' onClick={handleLogout}>Cerrar Sesión</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
