import React, {Component} from 'react';
import {connect} from 'react-redux';
import UsuariosActions from '../../actions/UsuariosActions';
import Tabla from './Tabla';
import Spinner from '../Spinner';
import Fatal from '../Fatal'

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerDatos();
    }
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return (<Spinner />)
    }

    if (this.props.error) {
      return <Fatal errorMessage={this.props.error.message} />;
    }

    return <Tabla />
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Usuarios</h1>
        {this.ponerContenido()}
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(mapStateToProps, UsuariosActions)(Usuarios);
