import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import MaterialDimTheme from 'TodoNative/App/Theme/MaterialDimTheme';
import MaterialLightTheme from 'TodoNative/App/Theme/MaterialLightTheme';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  useLightTheme: null,
  useDimTheme: null
});

export const ThemeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  theme: MaterialLightTheme
});

/* ------------- Selectors ------------- */

export const ThemeSelectors = {
  selectTheme: state => state.theme
};

/* ------------- Reducers ------------- */

export const useLightTheme = (state) => state.merge({ theme: MaterialLightTheme });
export const useDimTheme = (state) => state.merge({ theme: MaterialDimTheme });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USE_LIGHT_THEME]: useLightTheme,
  [Types.USE_DIM_THEME]: useDimTheme
});
