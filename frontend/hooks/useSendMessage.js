import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isSelectedUser } from '../redux/userSlice'
import { addMessages } from '../redux/messageSlice'
import toast from 'react-hot-toast'

function useSendMessage() {
    const [loading, setLoading] = useState(false)
    const selectedUser = useSelector(isSelectedUser)
    const dispatch = useDispatch()

    const sendMessage = async(message) =>{
        setLoading(true)

        try {
            const response = await fetch(`/api/messages/send/${selectedUser._id}`,{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({message})                
            })

            const data  = await response.json()
            if(data.error){
                throw new Error(data.error)
            }
            dispatch(addMessages(data))
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading, sendMessage}
}

export default useSendMessage