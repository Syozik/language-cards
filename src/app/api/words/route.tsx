import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/api/db_config";

export async function GET(){
    try{
        const res = await pool.query(`select * from words order by wrong desc;`);
        return NextResponse.json(res.rows, {status: 200});
    }
    catch(err){
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
