import RegistrationResponse from "@/types/registrationResponse";
import { NextResponse } from "next/server";

export default function createRegistrationResponse(isCreatedUser: boolean, message: string, error: string | null, status: number) {
    const response: RegistrationResponse = { isCreatedUser, message, error };
    return NextResponse.json(response, { status: status })
}
