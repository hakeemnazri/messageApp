import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../../hooks/useGetConversations.js'

function Conversations() {
  const {loading, conversations} = useGetConversations()
  return (
    <div className=' flex flex-col overflow-y-auto w-full'>

      {conversations.map((conversation, index)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        lastIndex = {index === conversations.length - 1 }
        />
      ))}

    </div>
  )
}

export default Conversations
