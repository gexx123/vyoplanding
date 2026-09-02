export interface VerifiedIntern {
  certificateId: string;
  internId: string;
  fullName: string;
  email?: string;
  role: string;
  department: "Engineering" | "AI & ML" | "Sales & Growth" | "Product Design" | "Digital Marketing" | string;
  college: string;
  degree?: string;
  duration: string;
  startDate: string;
  endDate: string;
  issueDate: string;
  status: "Completed" | "Active" | "Honors" | string;
  grade?: string;
  projectTitle: string;
  projectDescription: string;
  skillsAcquired: string[];
  mentor: string;
  mentorTitle: string;
  verificationUrl: string;
}

export const SEED_VERIFIED_INTERNS: VerifiedIntern[] = [];

export function findVerifiedInternLocally(queryStr: string): VerifiedIntern | null {
  if (!queryStr) return null;
  const clean = queryStr.trim().toLowerCase().replace(/[\s\-_]/g, "");

  const match = SEED_VERIFIED_INTERNS.find((intern) => {
    const cleanCert = intern.certificateId.toLowerCase().replace(/[\s\-_]/g, "");
    const cleanInternId = intern.internId.toLowerCase().replace(/[\s\-_]/g, "");
    const cleanEmail = (intern.email || "").toLowerCase().trim();
    const cleanName = intern.fullName.toLowerCase().replace(/[\s]/g, "");

    return (
      cleanCert === clean ||
      cleanInternId === clean ||
      cleanEmail === queryStr.trim().toLowerCase() ||
      cleanName === clean ||
      cleanCert.includes(clean)
    );
  });

  return match || null;
}
