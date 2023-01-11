/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import registrationThunks from './registration_thunks';

interface IRegistrationState {
  name: string | null;
  surname: string | null;
}

const initialState: IRegistrationState = {
  name: null,
  surname: null,
};

const { registrNewUser } = registrationThunks;

const registrationReducer = createReducer(initialState, {
  [registrNewUser.fulfilled.type]: (
    state,
    action: PayloadAction<IRegistrationState>,
  ) => {
    state.name = action.payload.name;
    state.surname = action.payload.surname;
  },
});

export default registrationReducer;
