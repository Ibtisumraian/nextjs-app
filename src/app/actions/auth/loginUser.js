"use server"

import bcrypt from "bcrypt"
import dbConnect, { collectionNameObject } from "@/lib/dbConnect"

export const loginUser = async (payload) => {
    const { email, password } = payload
    if (!email || !password) return null

    const userCollection = dbConnect(collectionNameObject.usersCollection)
    const user = await userCollection.findOne({ email: email.toLowerCase() })
    if (!user) return null
    
    const isPasswordOk = await bcrypt.compare(password, user.password)
    if (!isPasswordOk) return null
    
    // Remove password before returning to client
    const { password: _, ...safeUser } = user
    return {
        ...safeUser,
        _id: safeUser._id.toString()
    }
}
