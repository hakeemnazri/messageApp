import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js'; // Example slice
import messagesReducer from './messageSlice.js'
import socketReducer from './socketSlice.js'

const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
    messages: messagesReducer,
    socket: socketReducer,
  },
});

export default store;