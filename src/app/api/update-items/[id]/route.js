import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const query = { _id: new ObjectId(p.id) }
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    // const currentBookingData = await hotelsCollections.findOne(query)
    const hotel = await hotelsCollections.findOne(query);
    const isOwnerOk = email === hotel?.posted_by

    if (isOwnerOk) {
        return NextResponse.json(hotel)        
    }
    return NextResponse.json({ message: 'Forbidden Get Action'}, { status: 403 })
}

export const PATCH = async (req, { params }) => { 
    
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const query = { _id: new ObjectId(p.id) }

    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    const currentBookingData = await hotelsCollections.findOne(query)
    const isOwnerOk = email === currentBookingData?.posted_by
    if (isOwnerOk) {

        const body = await req.json()
        const filter = {
            $set: { ...body }
        }
        const option = {
            upsert: true
        }

        const updatedResponse = hotelsCollections.updateOne(query, filter, option)
        return NextResponse.json(updatedResponse)
    }

    return NextResponse.json({ message: 'Forbidden Update Action'}, { status: 403 })

}
