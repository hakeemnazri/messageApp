import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../../../hooks/useSendMessage.js';

function MessageInput() {
  const[message, setMessage] = useState("")

  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <div className='px-4 my-3'>
        <form onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input
                type='text'
                className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                placeholder='Send a message'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
                <button 
                type='submit'
                className='absolute inset-y-0 right-1 flex items-center pe-3'
                >
                    {loading ? (
                      <span className="loading loading-spinner"></span>
                    ):(
                      <IoMdSend />
                    )}
                </button>
            </div>
        </form>
    </div>
  )
}

export default MessageInput