import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => { 
    const session = await getServerSession(authOptions)
    if (session) {
        const email = session?.user?.email
        const bookingsCollections = dbConnect(collectionNameObject.hotelsCollection);
        const result = await bookingsCollections.find({ posted_by: email }).toArray()
        
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}