/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import authThunks from './auth_thunks';

interface IAuthState {
  firstName: string | null;
  lastName: string | null;
}

const initialState: IAuthState = {
  firstName: null,
  lastName: null,
};

const { auth } = authThunks;

const authReducer = createReducer(initialState, {
  [auth.fulfilled.type]: (
    state,
    action: PayloadAction<IAuthState>,
  ) => {
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
  },
});

export default authReducer;
