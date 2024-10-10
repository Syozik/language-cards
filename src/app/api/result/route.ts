import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/api/db_config";

export async function POST(request: NextRequest) {
    try {
        const { en_word, res } = await request.json();
        
        if (res == 1) {
            await pool.query(
                'UPDATE words SET """right""" = """right""" + 1 WHERE en_word = $1',
                [en_word]
            );
        } else {
            await pool.query(
                'UPDATE words SET wrong = wrong + 1 WHERE en_word = $1',
                [en_word]
            );
        }

        const r = await pool.query('SELECT * FROM words');

        return NextResponse.json({ message: "Success." }, { status: 200 });
    } catch (err) {
        console.error('Error updating word count:', err);
        return NextResponse.json({ error: 'Error updating word count', details: err.message }, { status: 500 });
    }
}