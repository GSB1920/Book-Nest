// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Combine your slices or use directly if you're not combining
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Disable default thunk middleware
      serializableCheck: false, // Disable serializable check if you have non-serializable state
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in non-production environments
});

sagaMiddleware.run(rootSaga);

export default store;
