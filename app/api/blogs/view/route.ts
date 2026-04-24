import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, updateDoc, increment, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const { id, slug } = await req.json();
    
    let docId = id;
    
    // If we only have slug, find the doc ID
    if (!docId && slug) {
      const q = query(collection(db, 'blogs'), where('slug', '==', slug));
      const snap = await getDocs(q);
      if (!snap.empty) {
        docId = snap.docs[0].id;
      }
    }
    
    if (!docId) return NextResponse.json({ error: "No ID or slug provided" }, { status: 400 });

    const blogRef = doc(db, 'blogs', docId);
    await updateDoc(blogRef, {
      views: increment(1)
    });

    const updated = await getDoc(blogRef);
    return NextResponse.json({ views: updated.data()?.views || 0 });
  } catch (error) {
    console.error("Error incrementing blog views:", error);
    return NextResponse.json({ error: "Failed to increment views" }, { status: 500 });
  }
}
