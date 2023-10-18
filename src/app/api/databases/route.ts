import { NextResponse } from "next/server";
import dbConnect from "@/libs/mongodb";

export const GET = async (request: any) => {
  try {
    await dbConnect();
    return NextResponse.json("Hello World");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
