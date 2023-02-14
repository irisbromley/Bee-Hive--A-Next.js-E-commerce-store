import postgres from 'postgres';

export const sql = postgres({
  host: 'localhost',
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
}); // will use psql environment variables
