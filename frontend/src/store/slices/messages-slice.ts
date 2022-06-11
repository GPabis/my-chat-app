import { createSlice } from '@reduxjs/toolkit';
import { MessageResponse } from '../../types';
import { RootState } from '../store';

const initialState: MessageResponse[] = [];

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
});

export const {} = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages;

export default messagesSlice.reducer;
