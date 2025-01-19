import React from 'react'

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md border-2 border-red-300'>
            <h1 className='text-3xl font-semibold text-center'>
            Login
            <span className='text-gray-50'> Messaging
            </span>
            </h1>

            <form>
                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' 
                    placeholder="Enter Username" className='input input-bordered w-full max-w-xs'/>

                </div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='text' 
                    placeholder="Enter Password" className='input input-bordered w-full max-w-xs'/>
                <div>
                <a href='#' className='text-sm hover:underline hover:text-blue-500 p-2 inline-block mt-2'>
                    Don't have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default Login
