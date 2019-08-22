import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  getTodosRequest: null,
  getTodosSuccess: ['todos'],
  getTodosFailure: ['error'],
});

export const TodoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoading: false,
  data: [],
  error: null,
});

/* ------------- Reducers ------------- */

export const getTodosRequest = state => state.merge({isLoading: true});
export const getTodosSuccess = (state, action) =>
  state.merge({isLoading: false, data: action.todos, error: null});
export const getTodosFailure = (state, error) =>
  state.merge({idLoading: false, data: [], error: error});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TODOS_REQUEST]: getTodosRequest,
  [Types.GET_TODOS_SUCCESS]: getTodosSuccess,
  [Types.GET_TODOS_FAILURE]: getTodosFailure,
});
