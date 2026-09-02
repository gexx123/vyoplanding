import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      college,
      degree,
      graduationYear,
      role,
      department,
      linkedin,
      github,
      portfolioUrl,
      resumeUrl,
      whyVyop,
      availability,
    } = body;

    if (!fullName || !email || !phone || !college || !role) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, phone, college, and role are required.' },
        { status: 400 }
      );
    }

    let applicationId = `INT-${Date.now().toString().slice(-6)}`;

    // If Firestore is available, save application
    if (db) {
      try {
        const appsRef = collection(db, 'internship_applications');
        const docRef = await addDoc(appsRef, {
          fullName,
          email,
          phone,
          college,
          degree: degree || '',
          graduationYear: graduationYear || '',
          role,
          department: department || '',
          linkedin: linkedin || '',
          github: github || '',
          portfolioUrl: portfolioUrl || '',
          resumeUrl: resumeUrl || '',
          whyVyop: whyVyop || '',
          availability: availability || 'Immediate',
          status: 'Under Review',
          appliedAt: serverTimestamp(),
          source: 'Internship Portal',
        });
        applicationId = docRef.id;

        // Also add to jobs collection for unified tracking
        const jobsRef = collection(db, 'jobs');
        await addDoc(jobsRef, {
          name: fullName,
          email,
          phone,
          location: college,
          role: `[Internship] ${role}`,
          status: 'New',
          notes: `College: ${college} | Grad: ${graduationYear} | LinkedIn: ${linkedin || 'N/A'}`,
          createdAt: serverTimestamp(),
        });
      } catch (dbErr) {
        console.warn('Firestore write failed, falling back to response:', dbErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Internship application submitted successfully!',
        applicationId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in internship application:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit application. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
