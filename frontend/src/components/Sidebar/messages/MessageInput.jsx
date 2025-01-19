import React from 'react'
import { IoMdSend } from "react-icons/io";

function MessageInput() {
  return (
    <div className='px-4 my-3'>
        <form >
            <div className='w-full relative'>
                <input
                type='text'
                className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                placeholder='Send a message'
                />
                <button 
                type='submit'
                className='absolute inset-y-0 right-1 flex items-center pe-3'
                >
                    <IoMdSend />
                </button>
            </div>
        </form>
    </div>
  )
}

export default MessageInput