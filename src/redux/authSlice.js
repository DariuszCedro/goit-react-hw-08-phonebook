import { createSlice } from "@reduxjs/toolkit";
import {register, login, logout} from "./operations";

const initialState = {
    isLoggedIn: false,
        user: null,
        token: null,
        isLoading: false
}


export const authSlice = createSlice({ 
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            });
        builder.addCase(logout.fulfilled, () => initialState)
    }

});

