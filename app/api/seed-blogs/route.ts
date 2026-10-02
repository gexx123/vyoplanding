import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { staticBlogs } from '@/lib/staticBlogs';

export async function GET() {
  try {
    const promises = staticBlogs.map(async (blog) => {
      const docRef = doc(db, 'blogs', blog.slug);
      await setDoc(docRef, blog, { merge: true });
    });

    await Promise.all(promises);

    return NextResponse.json({
      success: true,
      message: `Seeded ${staticBlogs.length} blogs successfully!`,
      blogs: staticBlogs.map((b) => b.slug),
    });
  } catch (error) {
    console.error('Seed blogs error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
