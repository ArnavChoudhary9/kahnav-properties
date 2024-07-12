// src/app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
        rejectUnauthorized: false // Only for development, should be true in production
    }
});

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        const { imageData } = data;

        const client = await pool.connect();
        const { rows } = await client.query(
            'INSERT INTO images (image_data) VALUES ($1) RETURNING id',
            [imageData]
        );
        client.release();
        
        return NextResponse.json({ id: rows[0].id }, { status: 200 });
    } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json({ error: 'Internal Server Error', message: (error as Error).message }, { status: 500 });
    }
};
