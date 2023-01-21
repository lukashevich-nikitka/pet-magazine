/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import autharization from './profile_thunks';

interface IProfile {
  success: boolean,
  id: string | null,
  firstName: string | null,
  lastName: string | null,
  age: number | null,
  role: string | null,
}

const initialState: IProfile = {
  success: false,
  id: null,
  firstName: null,
  lastName: null,
  age: null,
  role: null,
};

const profileReducer = createReducer(initialState, {
  [autharization.fulfilled.type]: (state, action: PayloadAction<IProfile>) => {
    const {
      success, firstName, lastName, age, role, id,
    } = action.payload;
    if (success) {
      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.age = age;
      state.role = role;
    } else {
      state.firstName = null;
      state.lastName = null;
      state.age = null;
      state.role = null;
    }
  },
});

export default profileReducer;
