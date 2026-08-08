import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'runout',
  password: process.env.DB_PASSWORD || 'runout_password',
  database: process.env.DB_NAME || 'runout_db',
});

export default pool;
