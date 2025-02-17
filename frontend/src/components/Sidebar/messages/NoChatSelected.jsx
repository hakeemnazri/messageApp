import React from 'react'
import { FaMessage } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/userSlice';


function NoChatSelected() {
  const user = useSelector(selectUser)
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-xl md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Hi {user.fullName}!</p>
            <p>Select a chat to Start Messaging</p>
            <FaMessage className='text-3xl  text-center'/>
        </div>
    </div>
  )
}

export default NoChatSelected