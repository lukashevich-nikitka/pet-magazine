/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import authThunks from './auth_thunks';

interface IAuthState {
  name: string | null;
  surname: string | null;
}

const initialState: IAuthState = {
  name: null,
  surname: null,
};

const { auth } = authThunks;

const authReducer = createReducer(initialState, {
  [auth.fulfilled.type]: (
    state,
    action: PayloadAction<IAuthState>,
  ) => {
    state.name = action.payload.name;
    state.surname = action.payload.surname;
  },
});

export default authReducer;
