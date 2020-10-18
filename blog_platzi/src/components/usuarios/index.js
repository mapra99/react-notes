import React, {Component} from 'react';
import {connect} from 'react-redux';
import UsuariosActions from '../../actions/UsuariosActions';
import Spinner from '../Spinner';

class Usuarios extends Component {
  componentDidMount() {
    this.props.traerDatos();
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return (<Spinner />)
    }

    return (
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
    )
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
        {this.ponerContenido()}
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
