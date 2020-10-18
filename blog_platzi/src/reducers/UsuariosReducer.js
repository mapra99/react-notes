import {TRAER_USUARIOS, CARGANDO_USUARIOS, ERROR_CARGANDO_USUARIOS, RESET_USUARIOS} from '../types/UsuariosTypes';

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_USUARIOS:
      return { ...state, usuarios: action.payload, cargando: false, error: false};
    case CARGANDO_USUARIOS:
      return { ...state, cargando: true};
    case ERROR_CARGANDO_USUARIOS:
      return { ...state, error: action.payload, cargando: false }
    case RESET_USUARIOS:
      return { ...state, usuarios: INITIAL_STATE.usuarios};
    default:
      return state;
  }
}
