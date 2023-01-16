/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import registrationThunks from './registration_thunks';

interface IRegistrationState {
  firstName: string | null;
  lastName: string | null;
}

const initialState: IRegistrationState = {
  firstName: null,
  lastName: null,
};

const { registrNewUser } = registrationThunks;

const registrationReducer = createReducer(initialState, {
  [registrNewUser.fulfilled.type]: (
    state,
    action: PayloadAction<IRegistrationState>,
  ) => {
    state.firstName = action.payload.firstName;
    state.lastName = action.payload.lastName;
  },
});

export default registrationReducer;
