import {TRAER_PUBLICACIONES, CARGANDO_PUBLICACIONES, ERROR_CARGANDO_PUBLICACIONES, RESET_PUBLICACIONES} from '../types/PublicacionesTypes';

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_PUBLICACIONES:
      return {
        ...state,
        publicaciones: action.payload,
        cargando: false, 
        error: false
      };
    case CARGANDO_PUBLICACIONES:
      return { ...state, cargando: true};
    case ERROR_CARGANDO_PUBLICACIONES:
      return { ...state, error: action.payload, cargando: false }
    default:
      return state;
  }
}

