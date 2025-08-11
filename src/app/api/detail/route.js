import dbConnect, { collectionNameObject } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const body = await req.json()
    const hotelsCollections = dbConnect(collectionNameObject.hotelsCollection);
    const result = await hotelsCollections.insertOne(body)

    return NextResponse.json(result)
}