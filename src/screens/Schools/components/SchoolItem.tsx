import React from 'react';
import {ListItem, Avatar, Icon, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {School} from '../../../types/School';
import {generateAvatar} from '../../../utils/avatar';
import {TouchableOpacity} from 'react-native-gesture-handler';

export type SchoolItemProps = {
  school: School;
  onPress?: () => void;
};

const SchoolItem = ({school, onPress}: SchoolItemProps) => (
  <ListItem
    Component={TouchableOpacity}
    onPress={onPress}
    style={styles.itemContainer}>
    <Avatar
      source={{
        uri: generateAvatar(school.name, '#fff', school.color_icon),
      }}
      size="medium"
      rounded
    />
    <ListItem.Content style={styles.itemContent}>
      <ListItem.Title style={styles.title}>{school.name}</ListItem.Title>
      <View style={styles.subtitleContainer}>
        <Icon name="map-pin" type="feather" />
        <View style={styles.textContainer}>
          {school.address && <Text>{school.address}</Text>}
          <Text>
            {school.city}, {school.state} {school.zip}
          </Text>
        </View>
      </View>
    </ListItem.Content>
  </ListItem>
);

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    flex: 1,
  },
  itemContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginBottom: 10,
  },
  subtitleContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default SchoolItem;
