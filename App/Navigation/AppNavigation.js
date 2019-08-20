import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import SideBar from 'TodoNative/App/Components/SideBar';

import TodosScreen from 'TodoNative/App/Screens/Todos/TodosScreen';

const AppNavigator = createDrawerNavigator(
  {
    Todos: {screen: TodosScreen},
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);

export default createAppContainer(AppNavigator);
