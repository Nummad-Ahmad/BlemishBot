import { configureStore } from '@reduxjs/toolkit';
import checkReducer from './slice';

export const store = configureStore({
  reducer: {
    check: checkReducer
  }
});
