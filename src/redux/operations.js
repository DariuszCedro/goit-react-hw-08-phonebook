import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//--------------------------------------
const setAuthHeader = (token) => {axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
//--------------------------------------
const clearAuthHeader = () => {axios.defaults.headers.common.Authorization = ``;
}
//--------------------------------------
export const handlePending = (state, _) => {
  state.isLoading = true;
}
//--------------------------------------
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}
//--------------------------------------
export const handleRefreshing = (state, _) => {
  state.isRefreshing = true;
}
//--------------------------------------
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get(
          '/contacts'
        );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
//--------------------------------------  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ( {newContact} , thunkAPI) => {
      try {
        const response = await axios.post(
          '/contacts',
          newContact
        );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
//--------------------------------------  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(
          `/contacts/${contactId}`
        );
  
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
//--------------------------------------
  export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  })
//--------------------------------------
  export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  })
//--------------------------------------
  export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
         } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  })
//--------------------------------------
  export const current = createAsyncThunk("auth/current", async (_,thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if(!token) {
      return thunkAPI.rejectWithValue("Brak tokena");
    }
    setAuthHeader(token);
    try {const res = await axios.get("/users/current");
  return res.data;
  } catch (err) {return thunkAPI.rejectWithValue(err.message)}
  })