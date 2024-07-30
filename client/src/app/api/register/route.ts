import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

import createRegistrationResponse from '@/lib/createRegistrationResponse';
import hashPassword from '@/lib/hashPassword';

const db = new PrismaClient();

export async function GET() {
    return createRegistrationResponse(false, 'Method not allowed', 'Unsupported Method', 405);
}

export async function POST(request: NextRequest) {
	try {
		const {username, email, password } = await request.json();
		if (!username || !email || !password )
			return createRegistrationResponse(false, 'All fields are required', 'validation error', 400);

		const existingAccount = await db.accounts.findFirst({
			where: {
				OR: [{ email: email }, { username: username }]
			}
		});

		if (existingAccount)
			return createRegistrationResponse(false, 'Username or email already in use', 'Duplicate email or username error', 409);

		const hash = await hashPassword(password);
		const newAccount = await db.accounts.create({
			data: {
				email: email,
				username: username,
				password: hash
			}
		});

		if (newAccount)
			return createRegistrationResponse(true, 'Successfully created user', null, 201);

	} catch (error) {
		console.log(error);
		return createRegistrationResponse(false, 'Failed to create new user', 'unknown error', 500);
	}
}
