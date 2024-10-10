import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/api/db_config";

export async function GET(request: NextRequest) {
  try {
    const words = await pool.query(`
        SELECT * FROM words
        WHERE wrong - """right""" <= 0
        ORDER BY RANDOM() LIMIT 1;
    `);
    
    if (words.rows.length === 0) {
      return NextResponse.json({ message: "No words found" }, { status: 404 });
    }
    
    console.log(words.rows[0]);
    return NextResponse.json(words.rows[0], { status: 200 });
  } catch (err) {
    console.error("Error executing query: ", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}