import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: { 
    messages: [],
    },
  reducers: {
    sendMessages: (state, action) =>{
        state.messages = action.payload;
    },
    addMessages: (state, action) =>{
      state.messages.push(action.payload);
  },
  },
});

export const { sendMessages, addMessages } = messagesSlice.actions;
export const selectedMessages = (state) => state.messages.messages;
export default messagesSlice.reducer;  