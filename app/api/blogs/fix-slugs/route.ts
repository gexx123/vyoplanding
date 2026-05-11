import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import slugify from 'slugify';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const blogsRef = collection(db, 'blogs');
    const snapshot = await getDocs(blogsRef);
    const existingSlugs = snapshot.docs.map(d => d.data().slug).filter(Boolean);

    let updatedCount = 0;

    for (const document of snapshot.docs) {
      const data = document.data();
      
      // If slug is missing or slug is the document ID (meaning it's not a real slug)
      if (!data.slug || data.slug === document.id) {
        let baseSlug = slugify(data.title || 'untitled-post', { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
        let newSlug = baseSlug;
        
        let counter = 1;
        while (existingSlugs.includes(newSlug)) {
          newSlug = `${baseSlug}-${counter}`;
          counter++;
        }
        
        existingSlugs.push(newSlug);
        
        const docRef = doc(db, 'blogs', document.id);
        await updateDoc(docRef, { slug: newSlug });
        updatedCount++;
      }
    }

    return NextResponse.json({ success: true, updatedCount });
  } catch (error) {
    console.error('Error fixing slugs:', error);
    return NextResponse.json({ error: 'Failed to fix slugs' }, { status: 500 });
  }
}
