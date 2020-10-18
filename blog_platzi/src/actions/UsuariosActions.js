import axios from 'axios';
import {TRAER_USUARIOS, CARGANDO_USUARIOS, ERROR_CARGANDO_USUARIOS, RESET_USUARIOS} from '../types/UsuariosTypes';

const UsuariosActions = {
  traerDatos: () => async (dispatch) => {
    dispatch({ type: CARGANDO_USUARIOS })
    try {
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: TRAER_USUARIOS,
        payload: respuesta.data
      })
    } catch (error) {
      console.error(error.message)
      dispatch({
        type: ERROR_CARGANDO_USUARIOS,
        payload: error
      })
    }
  },

  resetDatos: () => (dispatch) => {
    dispatch({type: RESET_USUARIOS})
  }
}
export default UsuariosActions;
