import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss';

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { loginRequest, history } = props;
    loginRequest(form);
    history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form classNameName='login__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Correo'
            name='email'
            onChange={handleInput}
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Iniciar sesión</button>
          <div className='login__container--remember-me'>
            <label>
              <input
                type='checkbox'
                id='cbox1'
                value='first_checkbox'
              />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
  No tienes ninguna cuenta
          <Link to='/signup'>Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
