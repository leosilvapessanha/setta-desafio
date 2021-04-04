import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator headerMode="none" initialRouteName="Characters">
    <App.Screen name="Characters" component={Home} />
  </App.Navigator>
);
export default Routes;
