import query from './db';

async function testConnection() {
  try {
    const res = await query('SELECT NOW()', []);
    console.log('Database connection test successful:', res.rows);
  } catch (err) {
    console.error('Database connection test failed:', err);
  }
}

testConnection();
