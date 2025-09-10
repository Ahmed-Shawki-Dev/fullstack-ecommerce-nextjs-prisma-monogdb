import { v2 as cloudinary } from 'cloudinary'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    paramsToSign: Record<string, string>
  }

  const signature = cloudinary.utils.api_sign_request(
    body.paramsToSign,
    process.env.CLOUDINARY_API_SECRET as string,
  )

  return NextResponse.json({ signature })
}
