import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fileBase64 = body.file;

    if (!fileBase64) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const uploadResponse = await cloudinary.uploader.upload(fileBase64, {
      folder: 'vyop_blog',
      transformation: [
        { width: 1920, crop: 'limit' },
        { quality: 'auto', fetch_format: 'auto' }
      ]
    });

    return NextResponse.json({ url: uploadResponse.secure_url });
  } catch (error: any) {
    console.error('Error uploading to Cloudinary:', error);
    return NextResponse.json({ error: 'Failed to upload image', details: error.message }, { status: 500 });
  }
}
