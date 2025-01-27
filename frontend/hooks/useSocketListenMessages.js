import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages, selectedMessages } from '../redux/messageSlice'

function useSocketListenMessages() {
    const {socket } = useSocketContext()
    const dispatch = useDispatch()
    const messages = useSelector(selectedMessages)


    useEffect(()=>{
        socket?.on("newMessage", (message)=>{
            dispatch(addMessages(message))
        })

        return () => socket?.off("newMessage")
    },[socket, dispatch, messages])
}

export default useSocketListenMessages