import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const user = process.env.BASIC_AUTH_USER;
    const pass = process.env.BASIC_AUTH_PASS;

    if (!user || !pass) {
      return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }

    const authHeader = `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const origin = req.headers.get('origin') || '';

    const response = await axios.post(`${apiUrl}/sponsorship-inquiries`, data, {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
        Origin: origin,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.response?.data || 'Unexpected error occurred' },
      { status: error?.response?.status || 500 }
    );
  }
}
