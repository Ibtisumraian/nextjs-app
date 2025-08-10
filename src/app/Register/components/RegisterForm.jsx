"use client"
import { registerUser } from '@/app/actions/auth/registerUser'
import LoginButton from '@/components/LoginButton'
import React from 'react'

export default function RegisterForm() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        registerUser({name,email,password});
        
    }
  return (
    <div className='flex-grow flex justify-center items-start '>
         <div className="border border-gray-300 rounded-md p-8 max-w-md w-full shadow-sm">
            <h2 className="font-bold text-xl mb-6 text-[#F9A51A]">Create an account</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm mb-1" htmlFor="fullName">
                
                </label>
                <input
                name='name'
                type="text"
                className="border-b border-gray-300 w-full py-1 focus:outline-none focus:border-[#F9A51A]"
                placeholder="Full Name"
                />
            </div>

            <div>
                <label className="block text-sm mb-1" htmlFor="usernameOrEmail">
                
                </label>
                <input
                name='email'
                type="email"
                className="border-b border-gray-300 w-full py-1 focus:outline-none focus:border-[#F9A51A]"
                placeholder="Email"
                />
            </div>

            <div>
                <label className="block text-sm mb-1" htmlFor="password">
                
                </label>
                <input
                name="password"
                type="password"
                className="border-b border-gray-300 w-full py-1 focus:outline-none focus:border-[#F9A51A]"
                placeholder="Password"
                />
            </div>

            <button
                type="submit"
                className="w-full cursor-pointer bg-[#F9A51A] text-black py-2 rounded mt-4 hover:bg-[#d88c16] transition"
            >
                Sign Up
            </button>
            </form>

            <div className="text-center text-sm mt-4">
            Already have an account?{' '}
            <LoginButton/>
            </div>
        </div>
       </div>
  )
}
