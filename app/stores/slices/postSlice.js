import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',

  initialState: {
    initializing: false,
    posts: [],
    category: 'all',
    filterPost: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = [...action.payload];
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {setPosts, setCategory} = postSlice.actions;

export default postSlice.reducer;
