import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

const db = new PrismaClient();

export async function POST(request: NextRequest) {
	try {
		const { username, password } = await request.json();
		if (!username || !password) {
			return NextResponse.json({
					didLogin: false,
					message: 'Did not supply username and/or password',
					error: 'Error: missing fields'
			}, { status: 400 })
		}

		const existingAccount = await db.accounts.findUnique({
				where: { username: username }
		})

		if (!existingAccount) {
			return NextResponse.json({
					didLogin: false,
					message: 'Did not find account with username',
					error: 'Error: No account with username and password'
			}, { status: 401 });
		}

		const { password: hashedPassword } = existingAccount;
		const areMatchingPasswords = await bcrypt.compare(password, hashedPassword);

		if (!areMatchingPasswords) {
			return NextResponse.json({
					didLogin: false,
					message: 'Incorrect password',
					error: 'Error: Wrong password entered'
			}, { status: 401 })
		}

		return NextResponse.json({
				didLogin: true,
				message: 'Successfully logged in',
				error: null
		}, { status: 200 })

	} catch (error) {
		console.log(error);
		return NextResponse.json({
				didLogin: false,
				message: 'failed to login',
				error: 'Error. Unknown reason for failing to login.'
		}, { status: 500 })
	}
}