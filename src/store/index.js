import { createStore, applyMiddleware , compose } from 'redux';
import reducer from './reducer';
import mySaga from './sagas.js';

import createSagaMiddleware from 'redux-saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)
export default store;