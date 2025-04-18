import { createSlice } from '@reduxjs/toolkit';

const checkSlice = createSlice({
  name: 'check',
  initialState: { value: false },
  reducers: {
    toggle: state => { state.value = !state.value },
  }
});

export const { toggle } = checkSlice.actions;
export default checkSlice.reducer;
