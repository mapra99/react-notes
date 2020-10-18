import axios from 'axios';
import {
  TRAER_PUBLICACIONES,
  CARGANDO_PUBLICACIONES,
  ERROR_CARGANDO_PUBLICACIONES,
  TRAER_POR_USUARIO,
  RESET_PUBLICACIONES
} from '../types/PublicacionesTypes';

const PublicacionesActions = {
  traerDatos: () => async (dispatch) => {
    dispatch({type: CARGANDO_PUBLICACIONES})
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: TRAER_PUBLICACIONES,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_CARGANDO_PUBLICACIONES,
        payload: error
      })
    }
  },

  traerPorUsuario: (userId) => async (dispatch) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    dispatch({
      type: TRAER_PUBLICACIONES,
      payload: response.data
    })
  }
}

export default PublicacionesActions;
