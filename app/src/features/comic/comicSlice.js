import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  comic: null,
  status: 'idle',
  error: null,
};

export const loadLatestComic = createAsyncThunk(
  'comic/getLatest',
  async (arg, thunkAPI) => {
    const response = await fetch('/api/latest');
    const data = await response.json();

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

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

    if (data.error) {
      return thunkAPI.rejectWithValue(data.error);
    }

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
      state.id = '';
    },
    [loadLatestComic.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.error;
      state.id = '';
    },
    [loadComicById.pending]: (state) => {
      state.status = 'loading';
    },
    [loadComicById.fulfilled]: (state, action) => {
      state.comic = action.payload;
      state.status = 'complete';
      state.id = '';
    },
    [loadComicById.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.id = '';
    },
    [loadRandomComic.pending]: (state) => {
      state.status = 'loading';
    },
    [loadRandomComic.fulfilled]: (state, action) => {
      state.comic = action.payload;
      state.status = 'complete';
      state.id = '';
    },
    [loadRandomComic.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.id = '';
    },
  },
});

export const { setID } = comicSlice.actions;

export const selectID = (state) => state.comic.id;
export const selectComic = (state) => state.comic.comic;
export const selectStatus = (state) => state.comic.status;
export const selectError = (state) => state.comic.error;

export default comicSlice.reducer;
