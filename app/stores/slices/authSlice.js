import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isAuthenticated: false,
    initializing: false,
    errorMessage: '',
    currentUser: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.errorMessage = '';
      state.currentUser = {
        ...action.payload,
      };
    },
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.errorMessage = '';
    }
  },
});

export const {login, error, logout} = authSlice.actions;

export default authSlice.reducer;
