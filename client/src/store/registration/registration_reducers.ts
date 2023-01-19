/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import registrationThunks from './registration_thunks';

interface IRegistrationState {
  success: boolean | null;
  message: string | null;
}

const initialState: IRegistrationState = {
  success: null,
  message: null,
};

const { registrNewUser } = registrationThunks;

const registrationReducer = createReducer(initialState, {
  [registrNewUser.fulfilled.type]: (
    state,
    action: PayloadAction<IRegistrationState>,
  ) => {
    state.success = action.payload.success;
    state.message = action.payload.message;
  },
});

export default registrationReducer;
