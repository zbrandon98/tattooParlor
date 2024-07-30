import bcrypt from 'bcrypt';

export default async function hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}
