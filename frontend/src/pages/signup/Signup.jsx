import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md border-2 border-red-300'>
            <h1 className='text-center text-3xl font-semibold'>Sign Up</h1>

            <form>
                <div>
                <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' 
                    placeholder="Hakeem Nazri" className='input input-bordered w-full max-w-xs'/>
                </div>
                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' 
                    placeholder="hakeemnazri" className='input input-bordered w-full max-w-xs'/>
                </div>
                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' 
                    placeholder="Enter Password" className='input input-bordered w-full max-w-xs'/>
                </div>

                <GenderCheckbox/>

                <a href='#' className='text-sm hover:underline hover:text-blue-500 pb-2 inline-block'>
                    Already have an account?
                </a>

                <div>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </div>

                
            </form>
        </div>

    </div>
  )
}

export default Signup
