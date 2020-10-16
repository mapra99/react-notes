import React from 'react';

import {connect} from 'react-redux'
import UsuariosActions from '../../actions/UsuariosActions';

class Tareas extends React.Component {
  componentWillMount() {
    this.props.resetDatos();
  }

  componentDidMount() {
    
  }

  render() {
    console.log(this.props)
    return (
      <div>HOLA</div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(mapStateToProps, UsuariosActions)(Tareas);