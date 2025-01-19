import React from 'react'

function Conversation() {
  return (
    <div className='flex gap-5 items-center hover:bg-sky-500 rounded p-2 cursor-pointer'>
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt='user avatar' />
            </div>
        </div>
        <div className='flex flex-1'>
            <div className='flex'>
                <p className='font-bold w-full'>Hakeem Nazri</p>
            </div>
        </div>
      
    </div>
  )
}

export default Conversation
