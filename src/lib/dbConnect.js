import { MongoClient, ServerApiVersion } from "mongodb"

export const collectionNameObject = {
    hotelsCollection: "hotels",
    bookingsCollection: "bookings",
    usersCollection: "users",
}

export default function dbConnect(collectionName) {
    
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    return client.db(process.env.DB_NAME).collection(collectionName)
}