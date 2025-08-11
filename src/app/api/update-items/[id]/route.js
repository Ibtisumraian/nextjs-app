import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const query = { _id: new ObjectId(p.id) }
    const hotel = await hotelsCollections.findOne(query);

    return NextResponse.json(hotel)
}

export const PATCH = async (req, { params }) => { 
    
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const query = { _id: new ObjectId(p.id) }
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
