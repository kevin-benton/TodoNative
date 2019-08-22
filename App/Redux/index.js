import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

export const reducers = combineReducers({
  theme: require('./ThemeRedux').reducer,
  todos: require('./TodosRedux').reducer,
});

export default () => {
  return createStore(reducers, applyMiddleware(thunk));
};
