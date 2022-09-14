import {takeLatest} from 'redux-saga/effects';
import {getAllSchoolsRequest} from '../slices/Schools';
import {getAllUserInfo} from './Schools';

/**
 * Create root saga to include all sagas from different redux
 */
export default function* root() {
  yield takeLatest(getAllSchoolsRequest, getAllUserInfo);
}
