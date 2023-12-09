// slices/blogSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initialPosts } from '../types/data';
import { BlogState } from '../types/inteface';


const initialState: BlogState = {
  posts: [],
  status: 'idle',
  error: null,
};


export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  try {
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { posts: initialPosts };
  } catch (error) {
    throw new Error('Error fetching posts');
  }
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    editPost: (state, action) => {
      const { id, title } = action.payload;
      const postToEdit = state.posts.find((post) => post.id === id);
      if (postToEdit) {
        postToEdit.name = title;
      }
    },
    deletePost: (state, action) => {
      const postIdToDelete = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postIdToDelete);
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.posts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Error fetching posts';
      });
  },
});

export default blogSlice.reducer;
export const { editPost, deletePost } = blogSlice.actions;
