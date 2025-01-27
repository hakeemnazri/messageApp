import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { NavLink } from 'react-router'
import useSignup from '../../../hooks/useSignup.js'
import toast from "react-hot-toast";


function Signup() {

    const [inputs, setInputs] = useState({
        fullName: '', 
        userName: '', 
        password: '', 
        confirmedPassword: '', 
        gender: '',
    })

    const {loading, signup} = useSignup()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await signup(inputs);
    }

    const handleCheckboxChange = (gender) =>{
        setInputs({...inputs, gender: gender})
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md border-2 border-red-300'>
            <h1 className='text-center text-3xl font-semibold'>Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <div>
                <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' 
                    placeholder="Hakeem Nazri" className='input input-bordered w-full max-w-xs'
                    value={inputs.fullName}
                    onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                </div>
                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' 
                    placeholder="hakeemnazri" className='input input-bordered w-full max-w-xs'
                    value={inputs.userName}
                    onChange={(e)=>setInputs({...inputs, userName: e.target.value})}
                    />
                </div>
                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' 
                    placeholder="Enter Password" className='input input-bordered w-full max-w-xs'
                    value={inputs.password}
                    onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>

                <div>
                    <label className='label p-2 mt-2'>
                        <span className='text-base label-text'>Confirmed Password</span>
                    </label>
                    <input type='password' 
                    placeholder="Confirm Password" className='input input-bordered w-full max-w-xs'
                    value={inputs.confirmedPassword}
                    onChange={(e) => setInputs({...inputs, confirmedPassword: e.target.value})}
                    />
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} 
                selectedGender = {inputs.gender} />

                <NavLink to="/login" className='text-sm hover:underline hover:text-blue-500 pb-2 inline-block'>
                    Already have an account?
                </NavLink>

                <div>
                    <button className='btn btn-block btn-sm mt-2'
                    disabled = {loading}
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-xs"></span>
                        ) : (
                            "Sign Up"
                        ) }
                    </button>
                </div>

                
            </form>
        </div>

    </div>
  )
}

export default Signup
