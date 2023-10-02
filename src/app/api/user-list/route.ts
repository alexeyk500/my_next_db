import { sql } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // const users = await sql`SELECT * FROM Users;`;
  const client = await db.connect();
  const users = await client.sql`SELECT * FROM Users;`;
  return NextResponse.json({ users, status: 200 });
}