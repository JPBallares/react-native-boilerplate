import {combineReducers} from 'redux';
import schoolReducer from './slices/Schools';

/* combine all reducers into single root reducer */
export default combineReducers({
  schools: schoolReducer,
});
