import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const p = await params;
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const hotel = await hotelsCollections.findOne({ _id: new ObjectId(p.id) });

    return NextResponse.json(hotel)
}