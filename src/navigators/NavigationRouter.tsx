import React from 'react';
// import Icon from 'react-native-vector-icons/Feather';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '@/src/screens/Home';
import Login from '@/src/screens/Login';
import Schools from '@/src/screens/Schools';

// import {BackButton} from './NavItems';
// import styles from './styles';
import SideBar from './SideBar';
import screenNames from './screenNames';

const Drawer = createDrawerNavigator();

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={() => <SideBar />}>
        <Drawer.Screen name={screenNames.Home} component={Home} />
        <Drawer.Screen name={screenNames.Login} component={Login} />
        <Drawer.Screen name={screenNames.Schools} component={Schools} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
