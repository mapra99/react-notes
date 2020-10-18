import React, {Component} from 'react';
import { connect } from 'react-redux';

import UsuariosActions from '../../actions/UsuariosActions';

class Publicaciones extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerDatos();
    }
  }

  render() {
    console.log(this.props.usuarios);
    return (
      <div>
        PUBLICACIONES DE USUARIO {this.props.match.params.usuario_id}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps, UsuariosActions)(Publicaciones);
