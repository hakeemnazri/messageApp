import React from 'react'
import { useSelector } from 'react-redux'
import { isSelectedUser, selectUser } from '../../../../redux/userSlice'
import timing from '../../../utils/timing'

function Message({message}) {
  const selectedUser = useSelector(isSelectedUser)
  const user = useSelector(selectUser)
  const fromMe = user._id === message.senderId;
  const time = timing(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? user.profilePic : selectedUser?.profilePic
  const bgColor = fromMe ? 'bg-blue-500' : ''

  return (
    <div className={`chat ${chatClassName}`}>
    <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic} />
        </div>
    </div>

    <div className={`chat-bubble text-white ${bgColor}`}>{message.message}</div>
    <div className="chat-footer opacity-50">{time}</div>
    </div>
  )
}

export default Message