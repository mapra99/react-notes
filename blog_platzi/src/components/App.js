import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './usuarios/index';

const Tareas = () => (<div>HOLA</div>)

const App = () => (
  <BrowserRouter>
    <Menu />
    <Route exact path="/" component={Usuarios} />
    <Route exact path="/tareas" component={Tareas} />
  </BrowserRouter>
);

export default App;
