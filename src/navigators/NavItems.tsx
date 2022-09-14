import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon, ListItem} from '@rneui/themed';
import styles from './styles';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <View style={styles.headerIconContainer}>
        <Icon name="arrow-left" type="feather" style={styles.navIcon} />
      </View>
    </TouchableOpacity>
  );
};

export type DrawerItemProps = {
  title: string;
  icon: string;
  onPress?: () => void;
};

export const DrawerItem = ({title, icon, onPress}: DrawerItemProps) => (
  <ListItem Component={TouchableOpacity} onPress={onPress}>
    <Icon name={icon} style={styles.navIcon} />
    <ListItem.Content>
      <ListItem.Title>{title}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
);
