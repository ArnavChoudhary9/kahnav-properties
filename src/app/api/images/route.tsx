// src/app/api/images/route.ts
import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false // Only for development, should be true in production
    }
});

export const GET = async () => {
    try {
        const client = await pool.connect();
        const { rows } = await client.query('SELECT id, image_data FROM images');
        client.release();

        // Ensure image_data is a string
        const formattedRows = rows.map((row) => ({
            ...row,
            image_data: row.image_data.toString() // Convert buffer to string
        }));
        return NextResponse.json(formattedRows, { status: 200 });
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Internal Server Error', message: (error as Error).message }, { status: 500 });
    }
};
