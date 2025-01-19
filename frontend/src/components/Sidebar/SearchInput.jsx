import React from 'react'
import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <div className='flex items-center justify-center'>

        <form className='flex gap-2'>
            <input type='text' placeholder='Search...' className='input input-bordered w-full rounded-full'/>
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearch className='w-6 h-6'/>
            </button>
        </form>
        
      
    </div>
  )
}

export default SearchInput
