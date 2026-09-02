import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { findVerifiedInternLocally } from '@/lib/verifiedInterns';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const queryParam = searchParams.get('id') || searchParams.get('query') || '';

  if (!queryParam || queryParam.trim().length === 0) {
    return NextResponse.json({
      verified: false,
      message: 'Please provide a certificate ID, intern ID, or full name.',
    }, { status: 400 });
  }

  const cleanQuery = queryParam.trim();

  try {
    // 1. Check local seed database first (ultra fast)
    const localMatch = findVerifiedInternLocally(cleanQuery);
    if (localMatch) {
      return NextResponse.json({
        verified: true,
        source: 'registry',
        intern: localMatch,
      });
    }

    // 2. Query Firestore if db is available
    if (db) {
      const internsRef = collection(db, 'verified_interns');
      
      // Try search by certificateId
      let q = query(internsRef, where('certificateId', '==', cleanQuery.toUpperCase()));
      let snapshot = await getDocs(q);

      if (snapshot.empty) {
        // Try search by internId
        q = query(internsRef, where('internId', '==', cleanQuery.toUpperCase()));
        snapshot = await getDocs(q);
      }

      if (snapshot.empty) {
        // Try search by email
        q = query(internsRef, where('email', '==', cleanQuery.toLowerCase()));
        snapshot = await getDocs(q);
      }

      if (!snapshot.empty) {
        const docData = snapshot.docs[0].data();
        return NextResponse.json({
          verified: true,
          source: 'database',
          intern: {
            certificateId: docData.certificateId,
            internId: docData.internId || docData.certificateId,
            fullName: docData.fullName || docData.name,
            email: docData.email,
            role: docData.role,
            department: docData.department || 'Engineering',
            college: docData.college,
            degree: docData.degree || 'Bachelor of Technology',
            duration: docData.duration || '3 Months',
            startDate: docData.startDate || '01 Jan 2026',
            endDate: docData.endDate || '31 Mar 2026',
            issueDate: docData.issueDate || '31 Mar 2026',
            status: docData.status || 'Completed',
            grade: docData.grade || 'Outstanding (A+)',
            projectTitle: docData.projectTitle || 'AI & Retail Engineering Fellow',
            projectDescription: docData.projectDescription || 'Contributed to product architecture and development at Vyop.',
            skillsAcquired: docData.skillsAcquired || ['Next.js', 'React Native', 'Firebase'],
            mentor: docData.mentor || 'Founder & Lead Architect',
            mentorTitle: docData.mentorTitle || 'Founder, Vyop AI',
            verificationUrl: `https://vyop.in/internship/verify?id=${docData.certificateId}`,
          },
        });
      }
    }

    // 3. Return not found
    return NextResponse.json({
      verified: false,
      message: `No active record found for "${cleanQuery}". Please check the ID or contact support at vyop4shop@gmail.com.`,
    }, { status: 404 });

  } catch (error: any) {
    console.error('Error verifying intern certificate:', error);
    
    // Check fallback locally on error
    const localMatch = findVerifiedInternLocally(cleanQuery);
    if (localMatch) {
      return NextResponse.json({
        verified: true,
        source: 'fallback',
        intern: localMatch,
      });
    }

    return NextResponse.json({
      verified: false,
      message: 'Verification service error. Please try again later or verify manually with support.',
    }, { status: 500 });
  }
}
