import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice';

function useLogin() {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    const loginHook = async({userName, password}) =>{
        const success = handleInputError(userName, password)
        if(!success) return

        setLoading(true)
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({userName, password})
            })
            const data = await response.json()
            if(data.error){
                throw new Error (data.error)
            }

            localStorage.setItem("user", JSON.stringify(data))
            dispatch(login(data))
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading, loginHook}
}

export default useLogin

const handleInputError = (userName, password) => {
    if(!userName || !password){
        toast.error("Please fill in inputs")
        return false
    }

    return true
}