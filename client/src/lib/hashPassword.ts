import bcrypt from 'bcrypt';
export default async function hashPassword(password: string): Promise<string> {
    const saltRounds = parseInt(process.env.SALT_ROUNDS || '12', 10);

    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}
