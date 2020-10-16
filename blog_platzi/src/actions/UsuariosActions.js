import axios from 'axios';

const UsuariosActions = {
  traerDatos: () => async (dispatch) => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: "traer_usuarios",
      payload: respuesta.data
    })
  },

  resetDatos: () => (dispatch) => {
    dispatch({type: "reset_usuarios"})
  }
}
export default UsuariosActions;
