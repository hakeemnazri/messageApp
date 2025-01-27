import React, { useState } from 'react'
import { NavLink } from 'react-router'
import useLogin from '../../../hooks/useLogin'

function Login() {
    const[inputs, setInputs] = useState({
        userName: '',
        password:''
    })

    const {loading, loginHook}= useLogin()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        await loginHook(inputs)
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md border-2 border-red-300'>
            <h1 className='text-3xl font-semibold text-center'>
            Login
            <span className='text-gray-50'> Messaging
            </span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' 
                    placeholder="Enter Username" className='input input-bordered w-full max-w-xs'
                    value={inputs.userName}
                    onChange={(e) => setInputs({...inputs, userName: e.target.value})}
                    />

                </div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' 
                    placeholder="Enter Password" className='input input-bordered w-full max-w-xs'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                <div>
                <NavLink to="/signup" className='text-sm hover:underline hover:text-blue-500 p-2 inline-block mt-2'>
                    Don't have an account?
                </NavLink>

                <div>
                    <button className='btn btn-block btn-sm mt-2'
                    disabled = {loading}
                    >
                        {loading ? (
                            <span className="loading loading-spinner"></span>
                        ): (
                            "Log in"
                        )}
                    </button>
                </div>
                </div>
            </form>

        </div>
      
    </div>
  )
}

export default Login
