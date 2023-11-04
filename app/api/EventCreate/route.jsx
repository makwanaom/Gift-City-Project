import { MongodbConnection } from "../../../lib/mongodb";
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await MongodbConnection();
    const { formData } = await req.json();
    await Event.create({ formData });
   

    console.log(" form data is :",formData);

    return NextResponse.json({ formData });
  } catch (error) {
    console.log(error);
  }
}
