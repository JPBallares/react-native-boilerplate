import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getAllSchoolsRequest} from '../../redux/slices/Schools';
import type {RootState} from '../../redux/store';
import SchoolList from './components/SchoolList';

const Schools = () => {
  const {data, fetching, error} = useAppSelector((state: RootState) => {
    return state.schools;
  });
  const dispatch = useAppDispatch();

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
      <SchoolList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Schools;
