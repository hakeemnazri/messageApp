import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/userSlice';
import toast from 'react-hot-toast';

function useLogout() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    const logoutHook = async() =>{
        setLoading(true)
        try {
            const response = await fetch("/api/auth/logout",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
             })
             const data = await response.json();
             if(data.error){
                throw new Error (data.error)
             }

             localStorage.removeItem("user")
             dispatch(logout())

        } catch (error) {
          toast.error(error.message)
            
        }finally{
            setLoading(false)
        }
    }

    return {loading, logoutHook}
}

export default useLogout