import {TRAER_TODOS, RESET_DATOS} from '../types/UsuariosTypes';

const INITIAL_STATE = {
  usuarios: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, usuarios: action.payload};
    case RESET_DATOS:
      return { ...state, usuarios: INITIAL_STATE.usuarios};
    default:
      return state;
  }
}
