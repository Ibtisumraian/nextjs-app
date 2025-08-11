import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => { 
    const session = await getServerSession(authOptions)
    if (session) {
        const email = session?.user?.email
        const bookingsCollections = dbConnect(collectionNameObject.bookingsCollection);
        const result = await bookingsCollections.find({ email }).toArray()
        
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}

export const POST = async (req) => {
    const body = await req.json()
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const result = await hotelsCollections.insertOne(body)

    return NextResponse.json(result)
}