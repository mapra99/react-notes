import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Error404 from '../containers/Error404';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
