"use client"

import Link from 'next/link'
import React from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { Bounce, toast } from 'react-toastify'
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        toast.info("Submitting...")

        try {
            const response = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })
            if (response.ok) {
                toast.success('Sign In Successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                })
                router.push('/')
                form.reset()
            } else {
                alert('Invalid Email or Password')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex-grow flex justify-center items-start '>
            <div className="border border-gray-300 rounded-md p-8 max-w-md w-full shadow-sm">
                <h2 className="font-bold text-xl mb-6 text-[#F9A51A]">Sign In</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            name='email'
                            type="email"
                            className="border-b border-gray-300 w-full py-1 focus:outline-none focus:border-[#F9A51A]"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <input
                            name="password"
                            type="password"
                            className="border-b border-gray-300 w-full py-1 focus:outline-none focus:border-[#F9A51A]"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#F9A51A] text-white font-semibold py-2 rounded mt-4 hover:bg-[#d88c16] transition"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center my-4 text-gray-500">or</div>

                <SocialLogin/>

                <div className="text-center text-sm mt-4">
                    Don't have an account?{' '}
                    <Link href={'/Register'} className='text-[#F9A51A]'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
