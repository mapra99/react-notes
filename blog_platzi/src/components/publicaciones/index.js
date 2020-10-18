import React, {Component} from 'react';
import { connect } from 'react-redux';

import UsuariosActions from '../../actions/UsuariosActions';
import PublicacionesActions from '../../actions/PublicacionesActions';

const {traerDatos: traerDatosUsuarios} = UsuariosActions;
const {traerDatos: traerDatosPublicaciones} = PublicacionesActions;

class Publicaciones extends Component {
  componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      this.props.traerDatosUsuarios();
    }
  }

  render() {
    console.log(this.props);
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
  traerDatosPublicaciones
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
