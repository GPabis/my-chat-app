import { Pool } from 'pg';
import { config } from 'dotenv';
config();

console.log(process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
});

export default pool;
