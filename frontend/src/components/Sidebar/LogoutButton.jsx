import React from 'react'
import { MdLogout } from "react-icons/md";

function LogoutButton() {
  return (
    <div  className='mt-auto mr-auto py-2'>
      <MdLogout className=' w-6 h-6 text-white cursor-pointer'/>
    </div>
  )
}

export default LogoutButton
