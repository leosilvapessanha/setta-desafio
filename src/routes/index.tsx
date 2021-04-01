import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/search';

const Auth = createStackNavigator();

const Routes: React.FC = () => (
  <Auth.Navigator headerMode="none" initialRouteName="Characters">
    <Auth.Screen name="Characters" component={Search} />
    {/* <Auth.Screen name="Detail" component={Detail} /> */}
  </Auth.Navigator>
);
export default Routes;
