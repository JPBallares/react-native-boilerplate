import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {DrawerItem} from './NavItems';
import screenNames from './screenNames';

const SideBar: React.ComponentType<any> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <DrawerItem
        title="Home"
        icon="home"
        onPress={() => navigation.navigate(screenNames.Home)}
      />
      <DrawerItem
        title="Schools"
        icon="school"
        onPress={() => navigation.navigate(screenNames.Schools)}
      />
    </SafeAreaView>
  );
};

export default SideBar;
