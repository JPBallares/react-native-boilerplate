import React from 'react';
import {School} from '@/src/types/School';
import SchoolItem from './SchoolItem';
import {FlatList} from 'react-native-gesture-handler';
import {Skeleton, Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

export type SchoolListProps = {
  data: School[];
  fetching: boolean;
  error: boolean | null;
};

const SchoolList = ({data, fetching, error}: SchoolListProps) => {
  const keyExtractor = (item: School) => item.school_id.toString();
  const renderItem = ({item}: {item: School}) => (
    <SchoolItem key={item.school_id} school={item} />
  );

  if (fetching) {
    return (
      <View style={styles.skeletonContainer}>
        <Skeleton style={styles.skeleton} animation="wave" />
        <Skeleton style={styles.skeleton} animation="wave" />
        <Skeleton style={styles.skeleton} animation="wave" />
        <Skeleton style={styles.skeleton} animation="wave" />
      </View>
    );
  }

  if (error) {
    return <Text>Failed to fetch schools</Text>;
  }

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {flex: 1, flexDirection: 'column', padding: 5},
  skeleton: {height: 80, marginBottom: 5},
});

export default SchoolList;
