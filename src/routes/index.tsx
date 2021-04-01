import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/search';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator headerMode="none" initialRouteName="Characters">
    <App.Screen name="Characters" component={Search} />
  </App.Navigator>
);
export default Routes;
