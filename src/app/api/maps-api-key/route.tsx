import { NextResponse } from "next/server";

export const GET = async () => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY as string;

  if (!apiKey) return NextResponse.json(
    { error: "Missing Google Maps API Key" },
    { status: 500 }
  )

  return NextResponse.json(
    { apiKey },
    { status: 200 }
  )
}
