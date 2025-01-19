import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected';

function MessageContainter() {
  const noChatSelected = true;
  return (
    <div className='flex flex-col w-7/12'>
      {noChatSelected 
      ? 
      <NoChatSelected/>
      :
      <>
          <div className='bg-slate-500 px-4 py-7 '>
          <span className='label-text font-bold text-2xl'>To: </span>
          <span className='label-text font-bold text-2xl text-white'>Hakeem Nazri</span>
        </div>

        <Messages/>
        <MessageInput/>

      </>
    }

    </div>
  )
}

export default MessageContainter