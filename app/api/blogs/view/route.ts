import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, increment, getDoc, collection, query, where, getDocs, setDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const { id, slug } = await req.json();
    const target = slug || id;
    if (!target) return NextResponse.json({ error: "No ID or slug provided" }, { status: 400 });

    let blogRef;

    if (id && id !== slug) {
      blogRef = doc(db, 'blogs', id);
    } else {
      const q = query(collection(db, 'blogs'), where('slug', '==', target));
      const snap = await getDocs(q);
      if (!snap.empty) {
        blogRef = doc(db, 'blogs', snap.docs[0].id);
      } else {
        blogRef = doc(db, 'blogs', target);
      }
    }

    await setDoc(blogRef, {
      slug: target,
      views: increment(1),
    }, { merge: true });

    const updated = await getDoc(blogRef);
    return NextResponse.json({ views: updated.data()?.views || 1 });
  } catch (error) {
    console.error("Error incrementing blog views:", error);
    return NextResponse.json({ error: "Failed to increment views" }, { status: 500 });
  }
}
