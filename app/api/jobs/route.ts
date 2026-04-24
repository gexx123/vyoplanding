import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, phone, location } = body;

    if (!name || !role || !phone || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const jobsRef = collection(db, 'jobs');
    const newDoc = await addDoc(jobsRef, {
      name,
      role,
      phone,
      location,
      status: 'New', // Add a status field for easy management later
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: newDoc.id }, { status: 201 });
  } catch (error: any) {
    console.error('Error saving job application:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
