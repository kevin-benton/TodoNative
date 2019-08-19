import { createStackNavigator } from 'react-navigation';

import TodosScreen from 'TodoNative/App/Screens/Todos/TodosScreen';

export default (TodosNavigation = createStackNavigator(
  {
    Todos: TodosScreen
  },
  {
    initialRouteName: 'Todos'
  }
));
