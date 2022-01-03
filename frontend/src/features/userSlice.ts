import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 'test',
    name: 'UserName'
  },
  reducers: {
    updateUser: (state, action) => {
      state = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
