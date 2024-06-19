import { error } from 'console';
import 'dotenv/config';
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME
});

async function query(text: string, params: any) {
    try {
        const result = await pool.query(text, params);
        return result;
    } catch (e: any) {
        console.log('Error executing query', e.stack);
        throw e;
    }
}

export default query;