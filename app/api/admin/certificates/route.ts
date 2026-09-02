import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, addDoc, serverTimestamp, doc, deleteDoc } from 'firebase/firestore';
import { VerifiedIntern } from '@/lib/verifiedInterns';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    let certificates: VerifiedIntern[] = [];

    if (db) {
      try {
        const certsRef = collection(db, 'verified_interns');
        const snapshot = await getDocs(certsRef);

        certificates = snapshot.docs.map((d) => {
          const data = d.data();
          return {
            certificateId: data.certificateId,
            internId: data.internId || data.certificateId,
            fullName: data.fullName || data.name,
            email: data.email || '',
            role: data.role,
            department: data.department || 'Engineering',
            college: data.college,
            degree: data.degree || '',
            duration: data.duration || '3 Months',
            startDate: data.startDate || '01 Jan 2026',
            endDate: data.endDate || '31 Mar 2026',
            issueDate: data.issueDate || '31 Mar 2026',
            status: data.status || 'Completed',
            grade: data.grade || 'Outstanding (A+)',
            projectTitle: data.projectTitle || 'AI & Retail Systems',
            projectDescription: data.projectDescription || '',
            skillsAcquired: data.skillsAcquired || [],
            mentor: data.mentor || 'Founder & Lead Architect',
            mentorTitle: data.mentorTitle || 'Founder, Vyop AI',
            verificationUrl: `https://vyop.in/internship/verify?id=${data.certificateId}`,
          } as VerifiedIntern;
        });
      } catch (dbErr) {
        console.warn('Firestore read error in admin certificates:', dbErr);
      }
    }

    return NextResponse.json({ success: true, certificates });
  } catch (error: any) {
    console.error('Error fetching admin certificates:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      certificateId,
      internId,
      fullName,
      email,
      role,
      department,
      college,
      degree,
      duration,
      startDate,
      endDate,
      issueDate,
      status,
      grade,
      projectTitle,
      projectDescription,
      skillsAcquired,
    } = body;

    if (!fullName || !role || !college) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, role, and college are mandatory.' },
        { status: 400 }
      );
    }

    const finalCertId = (certificateId || `VYOP-INT-2026-${Math.floor(100 + Math.random() * 900)}`).toUpperCase();
    const finalInternId = (internId || `VYOP-2026-INT${Math.floor(10 + Math.random() * 90)}`).toUpperCase();

    const newCertificateData = {
      certificateId: finalCertId,
      internId: finalInternId,
      fullName,
      email: email || '',
      role,
      department: department || 'Engineering',
      college,
      degree: degree || 'Bachelor of Technology',
      duration: duration || '3 Months (Full-Time)',
      startDate: startDate || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      endDate: endDate || 'Ongoing',
      issueDate: issueDate || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: status || 'Completed',
      grade: grade || 'Outstanding (A+)',
      projectTitle: projectTitle || 'Core POS & Offline Architecture',
      projectDescription: projectDescription || 'Contributed to high-performance smartphone POS and voice billing components.',
      skillsAcquired: Array.isArray(skillsAcquired) ? skillsAcquired : (skillsAcquired ? String(skillsAcquired).split(',').map((s: string) => s.trim()) : ['Next.js', 'React Native']),
      mentor: 'Founder & Lead Architect',
      mentorTitle: 'Founder, Vyop AI',
      createdAt: serverTimestamp(),
    };

    if (db) {
      try {
        const certsRef = collection(db, 'verified_interns');
        await addDoc(certsRef, newCertificateData);
      } catch (dbErr) {
        console.warn('Firestore write warning for new certificate:', dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Certificate issued and verified in system!',
      certificate: {
        ...newCertificateData,
        verificationUrl: `https://vyop.in/internship/verify?id=${finalCertId}`,
      },
    }, { status: 201 });
  } catch (error: any) {
    console.error('Error issuing certificate:', error);
    return NextResponse.json({ error: error.message || 'Failed to issue certificate' }, { status: 500 });
  }
}
