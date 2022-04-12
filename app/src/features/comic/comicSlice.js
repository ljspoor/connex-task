import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  comic: null,
  status: 'idle',
  error: null,
};

export const loadLatestComic = createAsyncThunk(
  'comic/getLatest',
  async (arg, thunkAPI) => {
    const response = await fetch('/api/latest');
    const data = await response.json();
    return data;
  }
);

export const loadComicById = createAsyncThunk(
  'comic/getById',
  async (id, thunkAPI) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

    return data;
  }
);

export const loadRandomComic = createAsyncThunk(
  'comic/getRandom',
  async (arg, thunkAPI) => {
    const response = await fetch(`/api/random`);
    const data = await response.json();
    return data;
  }
);

const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    setID: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: {
    [loadLatestComic.pending]: (state) => {
      state.status = 'loading';
    },
    [loadLatestComic.fulfilled]: (state, action) => {
      state.comic = action.payload;
      state.status = 'complete';
    },
    [loadLatestComic.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.error;
    },
    [loadComicById.pending]: (state) => {
      state.status = 'loading';
    },
    [loadComicById.fulfilled]: (state, action) => {
      state.comic = action.payload;
      state.status = 'complete';
    },
    [loadComicById.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [loadRandomComic.pending]: (state) => {
      state.status = 'loading';
    },
    [loadRandomComic.fulfilled]: (state, action) => {
      state.comic = action.payload;
      state.status = 'complete';
    },
    [loadRandomComic.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { setID } = comicSlice.actions;

export const selectID = (state) => state.comic.id;
export const selectComic = (state) => state.comic.comic;
export const selectStatus = (state) => state.comic.status;
export const selectError = (state) => state.comic.error;

export default comicSlice.reducer;
