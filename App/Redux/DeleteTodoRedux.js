import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  deleteTodoRequest: null,
  deleteTodoSuccess: null,
  deleteTodoFailure: ['error'],
});

export const DeleteTodoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoading: false,
  error: null,
});

/* ------------- Reducers ------------- */

export const deleteTodoRequest = state => state.merge({isLoading: true});
export const deleteTodoSuccess = state =>
  state.merge({isLoading: false, error: null});
export const deleteTodoFailure = (state, error) =>
  state.merge({isLoading: false, error: error});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DELETE_TODO_REQUEST]: deleteTodoRequest,
  [Types.DELETE_TODO_SUCCESS]: deleteTodoSuccess,
  [Types.DELETE_TODO_FAILURE]: deleteTodoFailure,
});
