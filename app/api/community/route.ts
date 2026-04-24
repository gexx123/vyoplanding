import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const communityRef = collection(db, 'community');
    // Fetch latest 50 messages
    const q = query(communityRef, orderBy('createdAt', 'desc'), limit(50));
    const snapshot = await getDocs(q);
    
    const messages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Handle timestamp serialization safely
      createdAt: doc.data().createdAt?.toMillis() || Date.now(),
    }));

    return NextResponse.json({ messages });
  } catch (error: any) {
    console.error('Error fetching community messages:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
    }

    const communityRef = collection(db, 'community');
    const newDoc = await addDoc(communityRef, {
      name,
      message,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: newDoc.id }, { status: 201 });
  } catch (error: any) {
    console.error('Error posting community message:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
