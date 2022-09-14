import React from 'react';
// import Icon from 'react-native-vector-icons/Feather';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@/src/screens/Home';
import Login from '@/src/screens/Login';
import Schools from '@/src/screens/Schools';

// import {BackButton} from './NavItems';
// import styles from './styles';
// import SideBar from './SideBar';
import screenNames from './screenNames';

const Stack = createNativeStackNavigator();

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.Home} component={Home} />
        <Stack.Screen name={screenNames.Login} component={Login} />
        <Stack.Screen name={screenNames.Schools} component={Schools} />
      </Stack.Navigator>
      {/* <Scene key="root" hideNavBar>
        <Drawer
          key="drawer"
          drawerIcon={<Icon name="menu" style={styles.navIcon} />}
          contentComponent={SideBar}>
          <Scene key="home" title="Home" component={Home} initial />
          <Scene key="schools" title="Schools" component={Schools} />
        </Drawer>
        <Scene
          key="login"
          title="Login"
          component={Login}
          renderLeftButton={BackButton}
        />
      </Scene> */}
    </NavigationContainer>
  );
};

export default NavigationRouter;
