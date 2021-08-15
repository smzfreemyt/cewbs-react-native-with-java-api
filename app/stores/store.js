import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appSlice from './slices/appSlice';
import authReducer from './slices/authSlice';
import postSlice from './slices/postSlice';

const rootReducers = combineReducers({
  auth: authReducer,
  post: postSlice,
  app: appSlice,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
