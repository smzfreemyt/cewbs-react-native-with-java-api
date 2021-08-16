import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isAuthenticated: false,
    initializing: false,
    errorMessage: '',
    currentUser: null,
    token: '',
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.errorMessage = '';
      state.currentUser = {
        ...action.payload,
      };
      console.log('loginn');
    },
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.errorMessage = '';
      state.token = '';
      console.log('logout');
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {login, error, logout, setToken} = authSlice.actions;

export default authSlice.reducer;
