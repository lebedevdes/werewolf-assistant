import { configureStore } from '@reduxjs/toolkit';
import { IState } from './store/IStore';

export default configureStore<IState>({
  reducer: (state) => {
    return state;
  },
  preloadedState: {
    user: {
      id: 'test',
      name: 'UserName'
    }
  }
});
