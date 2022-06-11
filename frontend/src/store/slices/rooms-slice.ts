import { createSlice } from '@reduxjs/toolkit';
import { RoomsResponse } from '../../types';
import { RootState } from '../store';

const initialState: RoomsResponse[] = [];

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
});

export const {} = roomsSlice.actions;

export const selectRooms = (state: RootState) => state.rooms;

export default roomsSlice.reducer;
