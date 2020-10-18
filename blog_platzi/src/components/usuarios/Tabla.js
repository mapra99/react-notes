import React from 'react';
import {connect} from 'react-redux';

const Tabla = ({ usuarios }) => {
  const ponerFilas = () => [
    usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ))
  ]

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
        {ponerFilas()}
      </tbody>
    </table>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}

export default connect(mapStateToProps)(Tabla);
