import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useGetConversations from '../../../hooks/useGetConversations';
import { useDispatch } from 'react-redux';
import { isSelected } from '../../../redux/userSlice';
import toast from 'react-hot-toast';

function SearchInput() {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!search) return

    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      dispatch(isSelected(conversation))
      setSearch('')
    }else toast.error('No Such User found')
  
  }

  return (
    <div className='flex items-center justify-center'>

        <form className='flex gap-2' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Search...' 
            className='input input-bordered w-full rounded-full'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearch className='w-6 h-6'/>
            </button>
        </form>
        
      
    </div>
  )
}

export default SearchInput
