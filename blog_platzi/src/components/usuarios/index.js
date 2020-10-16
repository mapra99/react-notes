import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UsuariosActions from '../../actions/UsuariosActions';

class Usuarios extends Component {
  componentDidMount() {
    this.props.traerDatos();
  }
  
  ponerFilas = () => [
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ))
  ]

  render() {
    return (
      <div>
        <table className="tabla">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {this.ponerFilas()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
