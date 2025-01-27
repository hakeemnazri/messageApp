import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { isSelectedUser } from '../redux/userSlice'
import { sendMessages } from '../redux/messageSlice'
// import { selectedMessages, sendMessages } from '../redux/messageSlice'

function useGetMessages() {
    const [loading, setLoading] = useState(false)
    const selectedUser = useSelector(isSelectedUser)
    const dispatch = useDispatch()

    useEffect(() =>{

        const getMessages = async() =>{
            setLoading(true)    
            try {
                const response = await fetch(`/api/messages/${selectedUser._id}`)
                const data = await response.json()
                if(data.error) throw new Error(data.error)
                dispatch(sendMessages(data))

            } catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }
        
        if(selectedUser?._id) getMessages()
    },[selectedUser?._id, dispatch])

    return {loading}
}

export default useGetMessages