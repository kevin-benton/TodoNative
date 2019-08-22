import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  readTodosRequest: null,
  readTodosSuccess: ['todos'],
  readTodosFailure: ['error'],
});

export const ReadTodoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoading: false,
  data: [],
  error: null,
});

/* ------------- Reducers ------------- */

export const readTodosRequest = state => state.merge({isLoading: true});
export const readTodosSuccess = (state, action) =>
  state.merge({isLoading: false, data: action.todos, error: null});
export const readTodosFailure = (state, error) =>
  state.merge({isLoading: false, data: [], error: error});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.READ_TODOS_REQUEST]: readTodosRequest,
  [Types.READ_TODOS_SUCCESS]: readTodosSuccess,
  [Types.READ_TODOS_FAILURE]: readTodosFailure,
});
