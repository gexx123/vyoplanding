import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || 'vyop2026';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passcode } = body;

    if (!passcode) {
      return NextResponse.json({ error: 'Passcode is required' }, { status: 400 });
    }

    if (passcode === ADMIN_PASSCODE) {
      return NextResponse.json({
        success: true,
        message: 'Admin authenticated successfully',
        token: `admin_session_${Date.now()}`,
      });
    }

    return NextResponse.json({ error: 'Invalid admin passcode' }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
