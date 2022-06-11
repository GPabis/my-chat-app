import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import roomsReducer from './slices/rooms-slice';
import usersReducer from './slices/users-slice';
import messagesReducer from './slices/messages-slice';
import authSlice from './slices/auth-slice';

export const store = configureStore({
    reducer: { rooms: roomsReducer, users: usersReducer, messages: messagesReducer, auth: authSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
