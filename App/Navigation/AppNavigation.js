import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import SideBar from 'TodoNative/App/Components/SideBar';
import TodosNavigation from 'TodoNative/App/Navigation/TodosNavigation';
import SettingsNavigation from 'TodoNative/App/Navigation/SettingsNavigation';

const AppNavigator = createDrawerNavigator(
  {
    Todos: { screen: TodosNavigation },
    Settings: { screen: SettingsNavigation }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(AppNavigator);
