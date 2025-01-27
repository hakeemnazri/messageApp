import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOnlineUsers, isSelected, isSelectedUser} from '../../../redux/userSlice'

function Conversation({conversation, lastIndex}) {
    const dispatch = useDispatch();
    const selectedUser = useSelector(isSelectedUser);
    const selected = selectedUser?._id === conversation?._id;
    const onlineUser = useSelector(getOnlineUsers)
    const isOnline = onlineUser.includes(conversation?._id)

    const handleSelectedUser = () =>{
        dispatch(isSelected(conversation))
    }
  return (
    <>
    <div className={`flex gap-5 items-center text-white hover:bg-sky-500 rounded p-2 cursor-pointer ${selected && 'bg-sky-500'}`}
    onClick={handleSelectedUser}
    >
        <div className={`avatar ${isOnline ? "online" : 'offline'}`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt='user avatar' />
            </div>
        </div>
        <div className='flex flex-1'>
            <div className='flex'>
                <p className='font-bold w-full'>{conversation.fullName}</p>
            </div>
        </div>
    </div>
    {!lastIndex && <div className='divider m-1'></div>}
    </>
  )
}

export default Conversation
