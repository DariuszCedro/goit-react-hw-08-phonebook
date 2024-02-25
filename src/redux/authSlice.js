import { createSlice } from "@reduxjs/toolkit";
import {register, login, logout, current} from "./operations";
import { handlePending, handleRejected, handleRefreshing } from '../redux/operations';
const initialState = {
    isLoggedIn: false,
        user: null,
        token: null,
        isLoading: false,
        isRefreshing: false,
}


export const authSlice = createSlice({ 
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.pending, handlePending)
        .addCase(register.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            }).addCase(register.rejected, handleRejected)
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            }).addCase(login.rejected, handleRejected)
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, () => initialState)
            .addCase(logout.rejected, handleRejected)
            .addCase(current.pending, handleRefreshing)
            .addCase(current.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user; 
            state.isRefreshing = false;           
            }).addCase(current.rejected, ()=> initialState);
    }

});

