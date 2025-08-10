"use server"
import bcrypt from "bcrypt"
import dbConnect, { collectionNameObject } from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNameObject.usersCollection)

    const { email, password } = payload
    if (!email || !password) return null


    const user = await userCollection.findOne({email: payload.email})
    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password = hashedPassword
        const result = await userCollection.insertOne(payload)

        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString()
        }
    }

    return null
    
}