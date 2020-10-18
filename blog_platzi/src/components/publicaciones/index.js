import React, {Component} from 'react';
import { connect } from 'react-redux';

import UsuariosActions from '../../actions/UsuariosActions';
import PublicacionesActions from '../../actions/PublicacionesActions';

import Spinner from '../Spinner';
import Fatal from '../Fatal'

const {traerDatos: traerDatosUsuarios} = UsuariosActions;
const {traerPorUsuario: traerPublicacionesPorUsuario} = PublicacionesActions;

class Publicaciones extends Component {
  async componentDidMount() {
    const {traerPublicacionesPorUsuario, traerDatosUsuarios} = this.props;

    if (this.props.usuariosReducer.usuarios.length === 0) {
      await traerDatosUsuarios();
    }

    const {usuario_id} = this.props.match.params;
    if (!('publicacionesIndex' in this.usuario())) {
      traerPublicacionesPorUsuario(usuario_id);
    }
  }

  usuario() {
    const {usuario_id} = this.props.match.params;
    return this.props.usuariosReducer.usuarios.filter(usuario => usuario.id == usuario_id)[0]
  }

  ponerUsuario() {
    const {
      cargando: cargandoUsuarios,
      error: errorUsuarios,
      usuarios
    } = this.props.usuariosReducer;

    if (usuarios.length === 0 || cargandoUsuarios) {
      return <Spinner />
    }

    if (errorUsuarios) {
      return <Fatal errorMessage={errorUsuarios.message} />
    }

    return `PUBLICACIONES DE ${this.usuario().name}`
  }

  render() {
    console.log(this.usuario())
    return (
      <div>
        {this.ponerUsuario()}
      </div>
    )
  }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
  return {
    usuariosReducer,
    publicacionesReducer
  };
};

const mapDispatchToProps = {
  traerDatosUsuarios,
  traerPublicacionesPorUsuario
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
