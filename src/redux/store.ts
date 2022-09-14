import createSagaMiddleware from 'redux-saga';
import reducer from './index';
import sagas from './sagas';

import {configureStore} from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

/* configure store with all the reducers, and sagas */
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    /* disable redux-thunk to use redux-saga */
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

/* add root saga to the middleware */
sagaMiddleware.run(sagas);

/* use for hot reloading during development build */
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./index', () => store.replaceReducer(reducer));
}

/* type to use for useAppSelector */
export type RootState = ReturnType<typeof store.getState>;
/* type to use for useAppDispatch */
export type AppDispatch = typeof store.dispatch;

export default store;
