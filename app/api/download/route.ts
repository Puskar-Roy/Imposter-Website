import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Analytics from '@/models/Analytics';

export async function POST(request: Request) {
  try {
    const { platform } = await request.json();
    
    if (!['windows', 'mac', 'linux'].includes(platform)) {
      return NextResponse.json({ error: 'Invalid platform' }, { status: 400 });
    }

    await dbConnect();

    const update: any = { $inc: { total: 1 } };
    update.$inc[platform] = 1;
    update.lastUpdated = new Date();

    // Find the one and only analytics doc, or create it if it doesn't exist
    await Analytics.findOneAndUpdate(
      {},
      update,
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Download tracking error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
