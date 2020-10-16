import axios from 'axios';
import {TRAER_TODOS, CARGANDO, ERROR, RESET_DATOS} from '../types/UsuariosTypes';

const UsuariosActions = {
  traerDatos: () => async (dispatch) => {
    dispatch({ type: CARGANDO })
    try {
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: TRAER_TODOS,
        payload: respuesta.data
      })
    } catch (error) {
      console.error(error.message)
      dispatch({
        type: ERROR,
        payload: error
      })
    }
  },

  resetDatos: () => (dispatch) => {
    dispatch({type: RESET_DATOS})
  }
}
export default UsuariosActions;
