import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { 
    user: (JSON.parse(localStorage.getItem("user")) || null),
    isSelectedUser: null,
    onlineUsers: [],
    },
  reducers: {
    login: (state, action) =>{
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null
        state.isSelectedUser = null;
    },
    isSelected: (state, action) =>{
      state.isSelectedUser = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    }
  },
});

export const { login, logout, isSelected, setOnlineUsers } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const isSelectedUser = (state) => state.user.isSelectedUser;
export const getOnlineUsers = (state) => state.user.onlineUsers;

export default userSlice.reducer;  