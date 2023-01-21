/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import loginThunks from './login_thunks';

interface IAuthState {
  success: boolean | null;
  message: string | null;
}

const initialState: IAuthState = {
  success: null,
  message: null,
};

const { auth } = loginThunks;

const authReducer = createReducer(initialState, {
  [auth.fulfilled.type]: (
    state,
    action: PayloadAction<IAuthState>,
  ) => {
    state.success = action.payload.success;
    state.message = action.payload.message;
  },
});

export default authReducer;
