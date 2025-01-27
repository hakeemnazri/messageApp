import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSocket from './useSocket.js'
import { addMessages, selectedMessages } from '../redux/messageSlice'
import { useSocketState } from '../redux/socketSlice.js'

function useSocketMessage() {
    const dispatch = useDispatch()
    const socket = useSelector(useSocketState)

    useEffect(()=>{

        socket?.on("newMessage", (data)=>{
            dispatch(addMessages(data))
        })

        return () => socket?.off("newMessage")
    }, [socket, dispatch])

}

export default useSocketMessage