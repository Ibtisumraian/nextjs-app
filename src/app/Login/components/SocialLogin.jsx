"use client"

import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc"
// import { FaGithub } from "react-icons/fa"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Bounce, toast } from 'react-toastify'

export default function SocialLogin() {
    const router = useRouter()
    const { data: session, status } = useSession()

    // Detect when login is successful
    useEffect(() => {
        if (status === "authenticated") {
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
        }
    }, [status, router])

    const handleLogin = (providerName) => {
        signIn(providerName, { callbackUrl: "/" })
    }

    return (
        <div className='flex gap-3'>
            <button
                onClick={() => handleLogin("google")}
                className="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#F9A51A] text-white font-semibold py-2 rounded hover:bg-[#d88c16] transition"
            >
                <FcGoogle size={20} />
                Sign in with Google
            </button>

            {/* <button
                onClick={() => handleLogin("github")}
                className="w-full flex items-center justify-center gap-2 cursor-pointer bg-[#F9A51A] text-white font-semibold py-2 rounded hover:bg-[#d88c16] transition"
            >
                <FaGithub size={20} />
                Sign in with GitHub
            </button> */}
        </div>
    )
}
