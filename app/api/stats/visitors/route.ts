import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

export async function GET() {
  try {
    const statsRef = doc(db, 'stats', 'visitors');
    const statsSnap = await getDoc(statsRef);
    
    if (!statsSnap.exists()) {
      await setDoc(statsRef, { count: 1 });
      return NextResponse.json({ count: 1 });
    }
    
    return NextResponse.json({ count: statsSnap.data().count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    const statsRef = doc(db, 'stats', 'visitors');
    const statsSnap = await getDoc(statsRef);
    
    if (!statsSnap.exists()) {
      await setDoc(statsRef, { count: 1 });
    } else {
      await updateDoc(statsRef, {
        count: increment(1)
      });
    }
    
    const updatedSnap = await getDoc(statsRef);
    return NextResponse.json({ count: updatedSnap.data()?.count || 0 });
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
    return NextResponse.json({ error: "Failed to increment" }, { status: 500 });
  }
}
