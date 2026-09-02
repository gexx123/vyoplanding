import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    let deletedJobs = 0;
    let deletedCerts = 0;

    if (db) {
      // 1. Delete all jobs/candidates
      const jobsSnap = await getDocs(collection(db, 'jobs'));
      for (const d of jobsSnap.docs) {
        await deleteDoc(doc(db, 'jobs', d.id));
        deletedJobs++;
      }

      // 2. Delete all verified interns/certificates
      const certsSnap = await getDocs(collection(db, 'verified_interns'));
      for (const d of certsSnap.docs) {
        await deleteDoc(doc(db, 'verified_interns', d.id));
        deletedCerts++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Cleaned up ${deletedJobs} test candidates and ${deletedCerts} certificates from Firestore.`,
      deletedJobs,
      deletedCerts,
    });
  } catch (error: any) {
    console.error('Error clearing test data:', error);
    return NextResponse.json({ error: error.message || 'Failed to clear data' }, { status: 500 });
  }
}
