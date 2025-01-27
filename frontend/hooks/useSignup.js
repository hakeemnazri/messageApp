import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";


const useSignup = () => {
    const[loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const signup = async({fullName, userName, password, confirmedPassword, gender}) =>{
        const success = handleInputError(fullName, userName, password, confirmedPassword, gender);
        if(!success) {return}

        setLoading(true)
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({fullName, userName, password, confirmedPassword, gender})
            })

            const data = await response.json();
            if(data.error){
                throw new Error(data.error)
            }
            dispatch(login(data))
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return {loading, signup}
}

export default useSignup

const handleInputError = (fullName, userName, password, confirmedPassword, gender) => {
    if(!fullName || !userName || !password || !confirmedPassword || !gender){
        toast.error("please fill all the fields")
        return false
    }

    if(password != confirmedPassword){
        toast.error("Password do not match")
        return false
    }

    if(password.length < 6){
        toast.error("Password ")
        return false
    }
    return true
}
