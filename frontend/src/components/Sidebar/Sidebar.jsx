import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className=' p-4 flex flex-col items-center w-5/12 overflow-auto'>
        <SearchInput />
        <div className='divider'></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar
