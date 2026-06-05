import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const privacyPolicy = `Vyop — Privacy Policy
Last updated: June 5, 2026

1. Introduction
Vyop ("we," "our," or "us") operates the Vyop mobile application (the "App"). The App is designed to help shopkeepers and small retailers manage inventory, billing, customer records, and business analytics — including voice-based billing.

This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App. By creating an account or using the App, you consent to the collection and use of your information in accordance with this Privacy Policy.

If you do not agree with this policy, please discontinue use of the App immediately.

2. Data Security — End-to-End Encryption
We take your privacy extremely seriously. Your business data is protected by AES-256-GCM End-to-End Encryption. This means:

Your data is encrypted directly on your device before it is ever transmitted to our servers
Vyop has zero access to your unencrypted business data — we cannot read, share, or analyze your inventory or customer records
Encryption keys are derived and stored only on your device — they are never sent to or stored on our servers
The App is completely free of malware, spyware, and backdoor access
Important exception — Voice Feature: When you use the voice billing feature, your voice input is temporarily transmitted to a third-party AI transcription service (Groq) to convert speech to text. This voice data is transmitted unencrypted over a secure TLS connection and is not covered by the device-side E2E encryption model described above. Raw audio is not stored after transcription. See Section 8 for full details.

⚠️
Local Storage & Data Loss Warning
Your data is primarily saved locally on your device first before being synced to the cloud. If your phone is lost, stolen, damaged, reset to factory settings, or if you delete the App before your data has synced:

Unsynced data will be permanently and irrecoverably lost
Because your data is encrypted with keys stored only on your device, Vyop has absolutely no ability to recover unsynced data — not through technical means, and not through customer support
We strongly recommend keeping the App installed, maintaining an active internet connection for background sync, and regularly exporting your data using the in-app export feature.

3. Information We Collect
Because of our encryption model, we only have access to a limited subset of your data. Here is a clear breakdown:

a) Account Information — Visible to Vyop
Data	Why We Collect It
Name	Account identification
Phone number	Authentication and account recovery
Email address (optional)	Account recovery and support
Shop or business name	Account setup
Business address	Account setup
b) Business Data — End-to-End Encrypted, Invisible to Vyop
Data	How It's Stored
Inventory records and product details	AES-256-GCM encrypted on device; only ciphertext reaches our servers
Customer information	AES-256-GCM encrypted on device
Billing and transaction history	AES-256-GCM encrypted on device
Staff and marketer records	AES-256-GCM encrypted on device
We only store the encrypted ciphertext of your business data. We cannot view, access, decode, or share the actual content.

c) Customer Contact Information
Customer phone numbers entered by you
Used only for sending bills or reminders directly from your device
Stored as encrypted data on your device
d) Voice Input Data — Temporarily Processed, Not Stored
Voice commands are temporarily sent to Groq for speech-to-text transcription
The transcription text is used only to process your billing command
Raw audio is discarded after transcription and is not stored by Vyop or Groq
See Section 8 for full details
e) Usage and Device Information — Collected Automatically
Device type and operating system
App usage patterns and session data
Crash logs and performance diagnostics
This is collected via Firebase Analytics and crash reporting to improve App stability. This data is not linked to your business records.

4. How We Use Your Information
Because your business data is encrypted, we only use your Account Information and Device Information for these purposes:

To create and manage your account and authentication
To improve App performance, security, and user experience
To provide customer support
The App uses your encrypted Business Data solely to:

Store your records securely in the cloud (as encrypted ciphertext)
Enable you to access, bill, and manage your data locally on your device
Enable you to share bills or reminders via SMS or WhatsApp from your device
We do not use your data for advertising. We do not sell your data to any third party — ever. We physically cannot analyze your business data due to end-to-end encryption.

5. Permissions We Request
The App may request the following device permissions:

Permission	Reason
Microphone	Voice-based billing and command input — core feature of the App
Camera	Scanning barcodes or capturing product images for inventory
Storage / Files	Saving exported invoices and reports to your device
Internet	Syncing encrypted data to the cloud and receiving updates
Phone State	Pre-filling your business phone number during onboarding
All permissions are requested only when the relevant feature is accessed. You may revoke any permission at any time from your device settings; doing so may limit the corresponding feature.

6. Cloud Data Storage
Encrypted business data that has been synchronized is stored using Google Firebase services, which provide:

Encryption in transit: All data is transmitted using TLS 1.2 / TLS 1.3
Encryption at rest: Firebase provides AES-256 server-side encryption as an additional layer on top of our client-side AES-256-GCM encryption
Authentication-based access controls: Data is accessible only through your authenticated account
Data is stored on secure servers operated by Google, which may be located in multiple geographic regions.

7. Data Sharing
We do not sell, rent, or trade your personal or business data.

We may share information only in the following situations:

With service providers (Google Firebase, Groq for voice transcription, Cloudinary for product images) strictly for App functionality
When required by applicable law or a valid legal process
To protect our rights, users, or to prevent fraud or misuse
All service providers are bound by confidentiality obligations. They are not permitted to use your data for any purpose other than providing their contracted service to Vyop.

8. Voice Data and Third-Party AI Processing
When you use the voice billing feature:

Your voice input is sent over a secure TLS connection to Groq's transcription API
The resulting text transcription is used solely to identify your billing command (e.g., "add 5 kg sugar at ₹50")
Raw audio is not stored by Vyop or Groq after transcription is complete
No voice data is used to train AI models by Vyop
This voice transmission falls outside the device-side E2E encryption model because the audio must be readable by the transcription service to function
If you are uncomfortable with voice data being sent to a third-party service, you can use the manual text billing feature instead, which is fully covered by E2E encryption.

9. Data Retention
We retain your data only while your account is active.

If you delete your account:

All cloud-stored data will be permanently and irrecoverably deleted
Data removal will be completed within 30 days of your deletion request
Locally stored data on your device is deleted immediately upon App uninstallation
10. Your Rights and Choices
You have the right to:

Access your personal or business data
Update or correct your information
Export your data in a portable format
Delete your account and all associated cloud data
You can exercise all of these rights directly from App Settings or by emailing vyop4shop@gmail.com.

11. Data Deletion Instructions
Option 1: In-App Deletion (Recommended)
Open the Vyop App and log into your account
Go to Settings → Delete Account
Confirm your choice
Your account and all cloud-stored data will be immediately and permanently deleted
Option 2: Email Request
Email vyop4shop@gmail.com from your registered email address
Subject line: "Account Deletion Request"
We will confirm and complete deletion within 30 days
12. Google Play Data Safety Disclosure
In compliance with Google Play's Data Safety requirements:

Data Type	Collected	Shared w/ 3rd Party	Encrypted in Transit	User Can Delete
Name	✅	❌	✅	✅
Phone number	✅	❌	✅	✅
Email address	Optional	❌	✅	✅
Business records	✅ (encrypted)	❌	✅	✅
Customer records	✅ (encrypted)	❌	✅	✅
Voice input	Temporary	✅ (Groq)	✅	N/A
Device & usage data	✅	❌	✅	❌
✅ No data is used for advertising.

✅ No sensitive personal data (financial credentials, government IDs) is collected.

✅ Business data is end-to-end encrypted — Vyop cannot access the plaintext content.

13. Children's Privacy
The App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that such data has been collected, we will delete it promptly.

14. Third-Party Services
Service	Purpose	Privacy Policy
Google Firebase	Auth, cloud storage, analytics, crash reporting	View Policy
Groq AI	Voice transcription (temporary, not stored)	View Policy
Cloudinary	Product image storage	View Policy
These services process data according to their own privacy policies. Vyop is not responsible for their practices.

15. Security Practices
No malware, spyware, or unauthorized data collection
No background data harvesting or advertising trackers
Role-based access controls (Admin, Marketer) within the App
Firebase Security Rules enforce database-level access control
Regular security audits of the codebase
To report a security vulnerability, email vyop4shop@gmail.com.

16. Changes to This Privacy Policy
We may update this policy from time to time. Changes will be posted with an updated "Last updated" date. We will notify users of significant changes via in-app notification where possible. Continued use of the App after changes constitutes acceptance.

17. Contact Us
Email: vyop4shop@gmail.com

Website: https://vyop.in`;

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--border-subtle)] animate-fade-up">
          <pre className="whitespace-pre-wrap break-words font-sans text-base md:text-lg leading-8 text-gray-700">
            {privacyPolicy}
          </pre>
        </div>
      </section>

      <Footer />
    </main>
  );
}
