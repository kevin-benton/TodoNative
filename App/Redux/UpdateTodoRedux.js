import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  updateTodoRequest: null,
  updateTodoSuccess: null,
  updateTodoFailure: ['error'],
});

export const UpdateTodoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoading: false,
  error: null,
});

/* ------------- Reducers ------------- */

export const updateTodoRequest = state => state.merge({isLoading: true});
export const updateTodoSuccess = state =>
  state.merge({isLoading: false, error: null});
export const updateTodoFailure = (state, error) =>
  state.merge({isLoading: false, error: error});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_TODO_REQUEST]: updateTodoRequest,
  [Types.UPDATE_TODO_SUCCESS]: updateTodoSuccess,
  [Types.UPDATE_TODO_FAILURE]: updateTodoFailure,
});
