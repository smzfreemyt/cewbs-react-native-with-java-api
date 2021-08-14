import {configureStore} from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import authReducer from './slices/authSlice';
import postSlice from './slices/postSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    post: postSlice,
    app: appSlice,
  },
});
