import axios, {AxiosResponse} from 'axios';
import {call, put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {API_TOKEN, SCHOOLS_API_URL} from '@/src/config/urls';
import {getAllSchoolsFailure, getAllSchoolsSuccess} from '../slices/Schools';
import type {SchoolsActionType} from '../slices/Schools';

export function* getAllUserInfo({payload}: PayloadAction<SchoolsActionType>) {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.get(SCHOOLS_API_URL, {
        params: {
          limit: 5,
        },
        headers: {
          Authorization: `Token token=${API_TOKEN}`,
        },
      }),
    );
    yield put(
      getAllSchoolsSuccess({data: response.data?.objects || payload.data}),
    );
  } catch (err) {
    yield put(getAllSchoolsFailure({data: payload.data}));
  }
}
