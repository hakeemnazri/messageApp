import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected';
import { useSelector } from 'react-redux';
import { isSelectedUser } from '../../../../redux/userSlice';

function MessageContainter() {
  const chatSelected = useSelector(isSelectedUser)
  return (
    <div className='flex flex-col w-7/12'>
      {!chatSelected 
      ? 
      <NoChatSelected/>
      :
      <>
          <div className='bg-slate-500 px-4 py-7 '>
          <span className='label-text font-bold text-2xl'>To: </span>
          <span className='label-text font-bold text-2xl text-white'>{chatSelected.fullName}</span>
        </div>

        <Messages/>
        <MessageInput/>

      </>
    }

    </div>
  )
}

export default MessageContainter