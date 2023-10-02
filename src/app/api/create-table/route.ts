import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Users ( Name varchar(255), Email varchar(255) );`;
    return NextResponse.json({ result: result, status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error, status: 500});
  }
}