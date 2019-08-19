import { createStackNavigator } from 'react-navigation';

import SettingsScreen from 'TodoNative/App/Screens/Settings/SettingsScreen';
import ThemeScreen from 'TodoNative/App/Screens/Settings/ThemeScreen';

export default (SettingsNavigation = createStackNavigator(
  {
    Settings: SettingsScreen,
    Theme: ThemeScreen
  },
  {
    initialRouteName: 'Settings'
  }
));
