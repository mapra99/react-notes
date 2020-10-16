const INITIAL_STATE = {
  usuarios: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'traer_usuarios':
      return { ...state, usuarios: action.payload};
    case 'reset_usuarios':
      return { ...state, usuarios: INITIAL_STATE.usuarios};
    default:
      return state;
  }
}
