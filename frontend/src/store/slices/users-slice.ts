import { createSlice } from '@reduxjs/toolkit';
import { UsersResponse } from '../../types';
import { RootState } from '../store';

const initialState: UsersResponse[] = [];

export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const {} = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
