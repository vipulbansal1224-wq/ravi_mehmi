import { NextResponse } from 'next/server';
import { raviMehmiData } from '@/data/ravi_data';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    services: raviMehmiData.services,
  });
}
