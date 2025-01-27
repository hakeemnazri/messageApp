import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setOnlineUsers } from "../redux/userSlice";
import { io } from "socket.io-client";


const SocketContext = createContext()

export const useSocketContext = () =>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) =>{
    const [socket, setSocket] = useState(null)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(()=>{
        if(user){
            const socket = io("http://localhost:5000",{
                query: {
                    userId: user._id,
                }
            }) 
            setSocket(socket)

            socket?.on("getOnlineUsers", (users)=>{
            dispatch(setOnlineUsers(users))
            })


            return () => socket?.close()
            }
    },[user])
    
    return (
    <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
)
}