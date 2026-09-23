import { NextResponse } from 'next/server';
import { raviMehmiData } from '@/data/ravi_data';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    records: raviMehmiData.internetRecords,
    summary: {
      location: raviMehmiData.location,
      education: raviMehmiData.education,
      labels: ["Hawk Records", "RM Media"],
      specialization: ["YouTube Ads", "Punjabi Songs Promotion", "Shayari & Lyric Writing", "Actor/Model"]
    }
  });
}
