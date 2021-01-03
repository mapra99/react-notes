const reducer = (state, action) => {
  switch (action.type) {
    case ('SET_FAVORITE'):
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case ('REMOVE_FAVORITE'):
      return {
        ...state,
        mylist: state.mylist.filter(item => item.id !== action.payload),
      };
    case ('LOGIN_REQUEST'):
      return {
        ...state,
        user: action.payload,
      };
    case ('LOGOUT_REQUEST'):
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;
