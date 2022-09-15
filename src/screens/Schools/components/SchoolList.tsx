import React from 'react';
import {School} from '@/src/types/School';
import SchoolItem from './SchoolItem';
import {FlatList} from 'react-native-gesture-handler';

export type SchoolListProps = {
  data: School[];
};

const SchoolList = ({data}: SchoolListProps) => {
  const keyExtractor = (item: School) => item.school_id.toString();
  const renderItem = ({item}: {item: School}) => (
    <SchoolItem key={item.school_id} school={item} />
  );
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default SchoolList;
