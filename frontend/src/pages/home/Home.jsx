import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainter from '../../components/Sidebar/messages/MessageContainter'


function Home() {
  return (
    <div className='flex sm:w-[550px] md:w-[650px] rounded-lg shadow-md border-2 border-red-300 h-3/5'>
      
      <Sidebar />
      <MessageContainter />

    </div>
  )
}
 
export default Home
