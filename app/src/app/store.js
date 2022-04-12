import { configureStore } from '@reduxjs/toolkit';
import comicSlice from '../features/comic/comicSlice';

export const store = configureStore({
  reducer: {
    comic: comicSlice,
  },
});
