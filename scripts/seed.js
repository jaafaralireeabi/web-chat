const { Pool } = require('pg');
require('dotenv').config();

export const pool = new Pool({
  connectionString: "postgres://default:FgyNupSQx16H@ep-ancient-bar-a19ejon6-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require",
});


export default async function DbConnect() {
    try {
      const client = await pool.connect();
      console.log('Connected to the database successfully');
      client.release();
      return client;
    } catch (error) {
      console.error('Error connecting to the database', error);
      throw error;
    }
  }
