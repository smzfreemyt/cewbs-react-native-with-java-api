import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',

  initialState: {
    refresh: false,
  },
  reducers: {
    setRefresh: (state, action) => {
      state.refresh = action.payload;
    },
  },
});

export const {setRefresh} = appSlice.actions;

export default appSlice.reducer;
