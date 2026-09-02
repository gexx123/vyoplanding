import { db } from "./firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { User } from "firebase/auth";
import { VerifiedIntern } from "./verifiedInterns";

/**
 * Checks if the signed-in Firebase user has admin role in Firestore.
 * Supports both /admin and /admins collections, checking by Document ID or email/uid fields.
 */
export async function checkIsAdmin(user: User | null): Promise<boolean> {
  if (!user || !user.email) return false;
  if (!db) return false;

  const emailLower = user.email.toLowerCase().trim();
  const uid = user.uid;

  try {
    // 1. Check in 'admin' collection by email as doc ID
    const adminDocRef = doc(db, "admin", emailLower);
    const adminDoc = await getDoc(adminDocRef);
    if (adminDoc.exists()) {
      const data = adminDoc.data();
      if (!data.role || data.role.toLowerCase() === "admin") return true;
    }

    // 2. Check in 'admins' collection by email as doc ID
    const adminsDocRef = doc(db, "admins", emailLower);
    const adminsDoc = await getDoc(adminsDocRef);
    if (adminsDoc.exists()) {
      const data = adminsDoc.data();
      if (!data.role || data.role.toLowerCase() === "admin") return true;
    }

    // 3. Check in 'admin' collection by UID as doc ID
    const adminUidRef = doc(db, "admin", uid);
    const adminUidDoc = await getDoc(adminUidRef);
    if (adminUidDoc.exists()) {
      const data = adminUidDoc.data();
      if (!data.role || data.role.toLowerCase() === "admin") return true;
    }

    // 4. Check in 'admins' collection by UID as doc ID
    const adminsUidRef = doc(db, "admins", uid);
    const adminsUidDoc = await getDoc(adminsUidRef);
    if (adminsUidDoc.exists()) {
      const data = adminsUidDoc.data();
      if (!data.role || data.role.toLowerCase() === "admin") return true;
    }

    // 5. Query where email field matches in 'admin'
    const q1 = query(collection(db, "admin"), where("email", "==", emailLower));
    const snap1 = await getDocs(q1);
    if (!snap1.empty) {
      const data = snap1.docs[0].data();
      if (!data.role || data.role.toLowerCase() === "admin") return true;
    }

    // 6. Query where email field matches in 'admins'
    const q2 = query(collection(db, "admins"), where("email", "==", emailLower));
    const snap2 = await getDocs(q2);
    if (!snap2.empty) {
      const data = snap2.docs[0].data();
      if (!data.role || data.role.toLowerCase() === "admin") return true;
    }

    return false;
  } catch (error) {
    console.error("Error verifying admin role in Firestore:", error);
    return false;
  }
}

/**
 * Generates certificate code in the format: VYOP-X(STUDENT_FIRST_NAME)1
 * Example: "Rahul Sharma" -> "VYOP-XRAHUL1"
 * If "VYOP-XRAHUL1" exists, auto increments to "VYOP-XRAHUL2", etc.
 */
export function generateInternCertificateId(
  studentName: string,
  existingCertificates: VerifiedIntern[] = []
): string {
  if (!studentName || studentName.trim().length === 0) {
    return `VYOP-XINTERN${Math.floor(100 + Math.random() * 900)}`;
  }

  // Extract first name and clean non-alphanumeric chars
  const firstName = studentName.trim().split(" ")[0].replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  const cleanFirstName = firstName || "STUDENT";

  let suffix = 1;
  let candidateId = `VYOP-X${cleanFirstName}${suffix}`;

  const existingIds = new Set(
    existingCertificates.map((c) => (c.certificateId || "").toUpperCase().trim())
  );

  while (existingIds.has(candidateId.toUpperCase())) {
    suffix += 1;
    candidateId = `VYOP-X${cleanFirstName}${suffix}`;
  }

  return candidateId;
}
