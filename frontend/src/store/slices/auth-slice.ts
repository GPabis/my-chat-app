import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../types';
import { RootState } from '../store';

const initialState: AuthState = {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export const {} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
