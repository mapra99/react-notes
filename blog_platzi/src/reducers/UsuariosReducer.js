import {TRAER_TODOS, CARGANDO, ERROR, RESET_DATOS} from '../types/UsuariosTypes';

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, usuarios: action.payload, cargando: false};
    case CARGANDO:
      return { ...state, cargando: true};
    case ERROR:
      return { ...state, error: action.payload, cargando: false }
    case RESET_DATOS:
      return { ...state, usuarios: INITIAL_STATE.usuarios};
    default:
      return state;
  }
}
