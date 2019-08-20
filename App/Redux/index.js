import {combineReducers, createStore} from 'redux';

export const reducers = combineReducers({
  theme: require('./ThemeRedux').reducer,
});

export default () => {
  return createStore(reducers);
};
