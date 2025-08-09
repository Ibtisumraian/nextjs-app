"use client"
import React from 'react';
import { signIn } from "next-auth/react"

const LoginButton = () => {
    return (
        <div>
            <button
                onClick={()=> signIn()}
                className="btn bg-[#F9A51A] border-none shadow-none rounded-lg">Sign In</button>
        </div>
    );
};

export default LoginButton;