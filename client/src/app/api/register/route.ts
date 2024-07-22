import { NextRequest, NextResponse } from "next/server";
export async function GET() {
    return new Response('nice');
}

export async function POST(request: NextRequest) {
    const {username, email, password} = await request.json();
    return NextResponse.json({username, email, password}, {status: 201});
}
