import { NextRequest, NextResponse } from "next/server";
export async function GET() {
    return new Response('nice');
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    console.log('This is from server: ' + data.username)

    return new NextResponse(JSON.stringify(data.username), {
        status: 201,
      });
}
