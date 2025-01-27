import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, setOnlineUsers } from '../redux/userSlice'
import io from "socket.io-client"
import { addMessages, selectedMessages } from '../redux/messageSlice';
import { setSocket } from '../redux/socketSlice';

function useSocket() {
    const user = useSelector(selectUser);
    const message = useSelector(selectedMessages)
    const dispatch = useDispatch()

    useEffect(()=>{
        
        if(user){
            const socket = io("https://messaging-wqm5.onrender.com/",{
                query: {
                    userId: user._id,
                }
            }) 

            socket?.on("getOnlineUsers", (users)=>{
            dispatch(setOnlineUsers(users))
            })

            socket?.on("newMessage", (data)=>{
                dispatch(addMessages(data))
            })

            return () => {
                if(!user) {socket?.close()}
                socket?.off("newMessage")
            }
            }
        }, [user, dispatch, message])

        }

export default useSocket