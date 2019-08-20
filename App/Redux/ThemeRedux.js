import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Constants ------------- */
export const LIGHT_THEME = 'light';
export const DIM_THEME = 'dim';

/* ------------- Types and Actions ------------- */

const {Types, Creators} = createActions({
  useLightTheme: null,
  useDimTheme: null,
});

export const ThemeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  currentTheme: LIGHT_THEME,
});

/* ------------- Selectors ------------- */

export const ThemeSelectors = {
  selectTheme: state => state.theme,
};

/* ------------- Reducers ------------- */

export const useLightTheme = state => state.merge({currentTheme: LIGHT_THEME});
export const useDimTheme = state => state.merge({currentTheme: DIM_THEME});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USE_LIGHT_THEME]: useLightTheme,
  [Types.USE_DIM_THEME]: useDimTheme,
});
