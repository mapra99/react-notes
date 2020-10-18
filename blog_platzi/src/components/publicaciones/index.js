import React, {Component} from 'react';
import { connect } from 'react-redux';

import UsuariosActions from '../../actions/UsuariosActions';
import PublicacionesActions from '../../actions/PublicacionesActions';

const {traerDatos: traerDatosUsuarios} = UsuariosActions;
const {traerPorUsuario: traerPublicacionesPorUsuario} = PublicacionesActions;

class Publicaciones extends Component {
  async componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      await this.props.traerDatosUsuarios();
    }
    this.props.traerPublicacionesPorUsuario(this.props.match.params.usuario_id);
  }

  render() {
    console.log(this.props.publicacionesReducer.publicaciones);
    return (
      <div>
        PUBLICACIONES DE USUARIO {this.props.match.params.usuario_id}
      </div>
    );
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
