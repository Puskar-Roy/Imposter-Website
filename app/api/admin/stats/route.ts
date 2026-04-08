import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Analytics from '@/models/Analytics';

export async function GET() {
  try {
    await dbConnect();
    const stats = await Analytics.findOne({});

    if (!stats) {
      return NextResponse.json({
        total: 0,
        windows: 0,
        mac: 0,
        linux: 0,
        lastUpdated: new Date()
      });
    }

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Stats retrieval error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
