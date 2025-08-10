"use client"
import React from 'react';
import { signIn } from "next-auth/react"

const LoginButton = () => {
    return (
        <div>
            <button
                onClick={()=> signIn()}
                className=" text-[#F9A51A] cursor-pointer">Sign In</button>
        </div>
    );
};

export default LoginButton;