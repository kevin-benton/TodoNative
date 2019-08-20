import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

import MaterialDimTheme from 'TodoNative/App/Theme/MaterialDimTheme';
import MaterialLightTheme from 'TodoNative/App/Theme/MaterialLightTheme';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  useLightTheme: null,
  useDimTheme: null,
});

export const ThemeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentTheme: MaterialLightTheme,
});

/* ------------- Selectors ------------- */

export const ThemeSelectors = {
  selectTheme: state => state.theme,
};

/* ------------- Reducers ------------- */

export const useLightTheme = state =>
  state.merge({currentTheme: MaterialLightTheme});
export const useDimTheme = state =>
  state.merge({currentTheme: MaterialDimTheme});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USE_LIGHT_THEME]: useLightTheme,
  [Types.USE_DIM_THEME]: useDimTheme,
});
