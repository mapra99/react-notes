import axios from 'axios';
import {TRAER_TODOS, RESET_DATOS} from '../types/UsuariosTypes';

const UsuariosActions = {
  traerDatos: () => async (dispatch) => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: TRAER_TODOS,
      payload: respuesta.data
    })
  },

  resetDatos: () => (dispatch) => {
    dispatch({type: RESET_DATOS})
  }
}
export default UsuariosActions;
