import { createSlice } from '@reduxjs/toolkit';
import { RoomsState } from '../../types';
import { RootState } from '../store';

const initialState: RoomsState = {};

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {},
});

export const {} = roomsSlice.actions;

export const selectRooms = (state: RootState) => state.rooms;

export default roomsSlice.reducer;
