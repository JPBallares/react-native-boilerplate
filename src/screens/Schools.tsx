import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import SchoolItem from '../components/SchoolItem';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getAllSchoolsRequest} from '../redux/slices/Schools';
import type {RootState} from '../redux/store';
import {School} from '../types/School';

const Schools = () => {
  const {data, fetching, error} = useAppSelector((state: RootState) => {
    return state.schools;
  });
  const dispatch = useAppDispatch();
  const keyExtractor = (item: School) => item.school_id.toString();
  const renderItem = ({item}: {item: School}) => (
    <SchoolItem key={item.school_id} school={item} />
  );

  useEffect(() => {
    if (dispatch) {
      dispatch(
        getAllSchoolsRequest({
          data: [],
        }),
      );
    }
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {!!data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Schools;
