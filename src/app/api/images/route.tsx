// src/app/api/images/route.ts
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
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

        const formattedRows = rows.map((row) => ({
            ...row,
            image_data: row.image_data.toString() // Convert buffer to string
        }));
        
        revalidatePath('/test/images');
        const response = NextResponse.json(formattedRows, { status: 200 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    } catch (error) {
        console.error('Error fetching images:', error);
        
        const response = NextResponse.json({ error: 'Internal Server Error', message: (error as Error).message }, { status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }
};
