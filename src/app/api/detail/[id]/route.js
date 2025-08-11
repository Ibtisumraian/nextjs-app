import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => { 
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const query = { _id: new ObjectId(p.id) }
    const session = await getServerSession(authOptions)
    const currentBooking = await hotelsCollections.findOne(query)
    const isOwnerOk = session?.user?.email == currentBooking.posted_by
    if (isOwnerOk) {
        const deleteResponse = await hotelsCollections.deleteOne(query)
        // revalidatePath('/Dashboard/items')
        return NextResponse.json(deleteResponse)
        
    } else {
        return NextResponse.json({success: false, message: "Forbidden Access"}, { status: 401})
    }

    

}

export const GET = async (req, { params }) => {
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const hotel = await hotelsCollections.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(hotel)
}