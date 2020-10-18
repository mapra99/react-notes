import {combineReducers} from 'redux';
import usuariosReducer from './UsuariosReducer';
import publicacionesReducer from './PublicacionesReducer';

export default combineReducers({
  usuariosReducer,
  publicacionesReducer
})
