import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, orderBy, query } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    let leads: any[] = [];

    if (db) {
      try {
        const jobsRef = collection(db, 'jobs');
        const q = query(jobsRef);
        const snapshot = await getDocs(q);

        leads = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            name: data.name || 'Unnamed Candidate',
            role: data.role || 'Sales / Intern',
            phone: data.phone || '',
            location: data.location || '',
            email: data.email || '',
            experience: data.experience || '',
            category: data.category || (data.role?.toLowerCase().includes('intern') ? 'Internship' : 'Sales & Growth'),
            notes: data.notes || '',
            resumeUrl: data.resumeUrl || '',
            status: data.status || 'New',
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
          };
        });
      } catch (err) {
        console.warn('Error fetching jobs from Firestore:', err);
      }
    }

    // Sort newest first
    leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, leads });
  } catch (error: any) {
    console.error('Error fetching admin leads:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing lead id' }, { status: 400 });
    }

    if (db) {
      const leadRef = doc(db, 'jobs', id);
      const updates: any = {};
      if (status !== undefined) updates.status = status;
      if (notes !== undefined) updates.notes = notes;

      await updateDoc(leadRef, updates);
    }

    return NextResponse.json({ success: true, message: 'Lead updated successfully' });
  } catch (error: any) {
    console.error('Error updating lead:', error);
    return NextResponse.json({ error: error.message || 'Failed to update lead' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing lead id' }, { status: 400 });
    }

    if (db) {
      const leadRef = doc(db, 'jobs', id);
      await deleteDoc(leadRef);
    }

    return NextResponse.json({ success: true, message: 'Lead deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting lead:', error);
    return NextResponse.json({ error: error.message || 'Failed to delete lead' }, { status: 500 });
  }
}
