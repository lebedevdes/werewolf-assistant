import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { FETCHING_STATE } from './constants';

export interface ICharacterLight {
  id: number;
  name: string;
  auspice: number;
  tribe: number
}

// interface ICharacter extends ICharacterLight {
//   harmony: number
// }

// interface ICharacterState {
//   list: ICharacterLight[],
//   currentCharacter: ICharacter | null
//   listState: number;
// }

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await fetch('/api/character/');
  return response.json();
});

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    list: [],
    currentCharacter: null,
    listState: FETCHING_STATE.IDLE
  },
  reducers: {
    add: (state, action: PayloadAction<ICharacterLight>) => {
      state.list.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.list.findIndex(item => item.id === action.payload);
      if (indexToRemove > -1) {
        state.list.splice(indexToRemove, 1);
      }
    },
    updateList: (state, action: PayloadAction<ICharacterLight[]>) => {
      state.list = action.payload;
    }
  },
  extraReducers: {
    [fetchCharacters.pending.toString()]: (state) => {
      state.currentCharacter = FETCHING_STATE.LOADING;
    },
    [fetchCharacters.fulfilled.toString()]: (state, action: PayloadAction<ICharacterLight[]>) => {
      state.currentCharacter = FETCHING_STATE.SUCCESS;
      state.list = action.payload;
    },
    [fetchCharacters.rejected.toString()]: (state) => {
      state.currentCharacter = FETCHING_STATE.FAIL;
    }
  }
});

// Action creators are generated for each case reducer function
export const { add, remove, updateList } = characterSlice.actions;

export const selectList = (state: any): ICharacterLight[] => state.characters.list;

export default characterSlice.reducer;
