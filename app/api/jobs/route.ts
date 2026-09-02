import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      role,
      phone,
      location,
      email,
      experience,
      category, // 'Sales & Growth' | 'Internship' | 'Full-time'
      notes,
      resumeUrl,
    } = body;

    if (!name || !role || !phone || !location) {
      return NextResponse.json({ error: 'Missing required fields: Name, Role, Phone, and Location are required.' }, { status: 400 });
    }

    let docId = `JOB-${Date.now().toString().slice(-6)}`;

    if (db) {
      try {
        const jobsRef = collection(db, 'jobs');
        const newDoc = await addDoc(jobsRef, {
          name,
          role,
          phone,
          location,
          email: email || '',
          experience: experience || 'Fresher',
          category: category || (role.toLowerCase().includes('intern') ? 'Internship' : 'Sales & Growth'),
          notes: notes || '',
          resumeUrl: resumeUrl || '',
          status: 'New',
          createdAt: serverTimestamp(),
        });
        docId = newDoc.id;
      } catch (dbErr) {
        console.warn('Firestore write warning:', dbErr);
      }
    }

    return NextResponse.json({ success: true, id: docId, message: 'Application submitted successfully' }, { status: 201 });
  } catch (error: any) {
    console.error('Error saving job application:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
