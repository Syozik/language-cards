import pool from "@/app/api/db_config";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest){
    try{
        const {en_word, dk_word} = await request.json();
        await pool.query(`INSERT INTO WORDS ("en_word", "dk_word") VALUES ($1, $2);`, [en_word, dk_word]);
        return NextResponse.json({message: "The word has been inserted successfully."}, {status: 200});
    } catch(err){
        return NextResponse.json({error: "There's been an error", details: err.message}, {status: 500})
    }
}