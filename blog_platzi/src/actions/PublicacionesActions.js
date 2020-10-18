import axios from 'axios';
import {
  TRAER_PUBLICACIONES,
  CARGANDO_PUBLICACIONES,
  ERROR_CARGANDO_PUBLICACIONES,
  RESET_PUBLICACIONES
} from '../types/PublicacionesTypes';

import {TRAER_USUARIOS} from '../types/UsuariosTypes';

const PublicacionesActions = {
  traerPorUsuario: (userId) => async (dispatch, getState) => {
    const {usuarios} = getState().usuariosReducer;
    const {publicaciones} = getState().publicacionesReducer;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const publicacionesActualizadas = [
      ...publicaciones,
      response.data
    ];

    dispatch({
      type: TRAER_PUBLICACIONES,
      payload: publicacionesActualizadas
    })

    const publicacionesIndex = publicacionesActualizadas.length - 1;
    const usuariosActualizados = usuarios.map(usuario => {
      if (usuario.id == userId) {
        usuario.publicacionesIndex = publicacionesIndex;
      }

      return usuario
    });

    dispatch({
      type: TRAER_USUARIOS,
      payload: usuariosActualizados
    })
  }
}

export default PublicacionesActions;
