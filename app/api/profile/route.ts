import { NextResponse } from 'next/server';
import { raviMehmiData } from '@/data/ravi_data';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    data: {
      name: raviMehmiData.name,
      agencyName: raviMehmiData.agencyName,
      tagline: raviMehmiData.tagline,
      bio: raviMehmiData.bio,
      location: raviMehmiData.location,
      education: raviMehmiData.education,
      experience: raviMehmiData.experience,
      roles: raviMehmiData.roles,
      socialLinks: raviMehmiData.socialLinks,
    }
  });
}
