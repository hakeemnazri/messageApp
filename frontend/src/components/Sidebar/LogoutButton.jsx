import React from 'react'
import { MdLogout } from "react-icons/md";
import useLogout from '../../../hooks/useLogout.js';

function LogoutButton() {
  const {loading, logoutHook} = useLogout();


  return (
    <div  className='mt-auto mr-auto py-2'>

      {loading ? (
        <span className="loading loading-spinner"></span>
      ) 
      : (
        <MdLogout 
        className=' w-6 h-6 text-white cursor-pointer'
        onClick={()=>logoutHook()}
        />
      )}
    </div>
  )
}

export default LogoutButton
