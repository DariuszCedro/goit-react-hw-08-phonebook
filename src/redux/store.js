import { configureStore} from '@reduxjs/toolkit';
import {contactsSlice} from '../redux/contactsSlice';
import {filterSlice} from '../redux/filterSlice';
import { authSlice } from '../redux/authSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
  };

export const { setFilter } = filterSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
export const { fetchingError, fetchingInProgress, fetchingSuccess } =
  contactsSlice.actions;
  export const authReducer = authSlice.reducer;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const storePersist = persistStore(store);