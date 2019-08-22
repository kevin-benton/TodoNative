import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  createTodoRequest: null,
  createTodoSuccess: ['todo'],
  createTodoFailure: ['error'],
});

export const CreateTodoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  isLoading: false,
  data: null,
  error: null,
});

/* ------------- Reducers ------------- */

export const createTodoRequest = state => state.merge({isLoading: true});
export const createTodoSuccess = (state, action) =>
  state.merge({isLoading: false, data: action.todo, error: null});
export const createTodoFailure = (state, error) =>
  state.merge({isLoading: false, data: null, error: error});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_TODO_REQUEST]: createTodoRequest,
  [Types.CREATE_TODO_SUCCESS]: createTodoSuccess,
  [Types.CREATE_TODO_FAILURE]: createTodoFailure,
});
