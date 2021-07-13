import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    isAuthenticated: false,
    initializing: false,
  },
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
  },
});

export const {login} = authSlice.actions;

export default authSlice.reducer;
