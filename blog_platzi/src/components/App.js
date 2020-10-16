import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './Menu';
import Usuarios from './usuarios/index';
import Tareas from './tareas/index';

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Usuarios} />
      <Route exact path="/tareas" component={Tareas} />
    </div>
  </BrowserRouter>
);

export default App;
