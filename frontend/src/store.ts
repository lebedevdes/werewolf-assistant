import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import characterReducer from './features/characterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    characters: characterReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
