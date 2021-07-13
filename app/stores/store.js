import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});
