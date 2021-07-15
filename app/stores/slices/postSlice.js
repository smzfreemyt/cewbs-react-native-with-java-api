import {createSlice} from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',

  initialState: {
    initializing: false,
    posts: [],
    category: 'all',
    filterPosts: [],
  },
  reducers: {
    setPost: (state, action) => {
      state.posts = [...action.payload];
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    filterPost: (state, action) => {
      if (action.payload === 'all') {
        state.filterPosts = state.posts;
      } else {
        state.filterPosts = state.posts.filter(
          post => post.category === action.payload,
        );
      }
    },
  },
});

export const {setPost, setCategory, filterPost} = postSlice.actions;

export default postSlice.reducer;
