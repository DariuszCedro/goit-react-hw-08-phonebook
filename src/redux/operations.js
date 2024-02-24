import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d48d493f1ab8c634356d82.mockapi.io';
const setAuthHeader = (token) => {axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(
          '/phonebook/contacts'
        );
  
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ( {newContact} , thunkAPI) => {
      try {
        const response = await axios.post(
          '/phonebook/contacts',
          newContact
          
        );
  
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(
          `/phonebook/contacts/${contactId}`
        );
  
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("https://connections-api.herokuapp.com/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  })

  export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("https://connections-api.herokuapp.com/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  })

  export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post("https://connections-api.herokuapp.com/users/logout");
         } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  })