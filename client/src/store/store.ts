import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registrationReducer from './registration/registration_reducers';

const registration = combineReducers({
  registration: registrationReducer,
});

const store = configureStore({
  reducer: registration,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
