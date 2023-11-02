import { MongodbConnection } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email,password } = await req.json();
    const hashPassword = await bcrypt.hash(password, 10);

    await MongodbConnection();
    await User.create({ email, password: hashPassword });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user.", error },
      { status: 500 }         
    );
  }
}
     