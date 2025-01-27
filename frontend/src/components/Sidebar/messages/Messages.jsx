import React from 'react'
import Message from './Message'
import { useSelector } from 'react-redux'
import useGetMessages from '../../../../hooks/useGetMessages'
import { selectedMessages } from '../../../../redux/messageSlice'
import { useSocketContext } from '../../../../context/socketContext'
import useSocketListenMessages from '../../../../hooks/useSocketListenMessages'

function Messages() {
  const {loading} = useGetMessages()
  const messages = useSelector(selectedMessages)
  useSocketListenMessages()

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading && (
        <p className='text-center'>Conversation is Loading, Please wait!</p>
      )}

      {!loading && messages.length === 0 && (
        <p className='text-center'>Start conversation now!</p>
      )}

      {!loading && messages.length > 0 && (
        messages.map((messages)=>(
          <Message
          key={messages._id}
          message={messages}
          />
        ))
      )}
    </div>
  )
}

export default Messages