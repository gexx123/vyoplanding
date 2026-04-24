import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Last updated: May 2026
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--border-subtle)] animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-700">
            <p>Last updated: February 15, 2026</p>

            <h2>1. Introduction</h2>
            <p>
              Vyop ("we," "our," or "us") operates the Vyop mobile application (the "App"). The App is designed to help shopkeepers manage inventory, billing, and customer records digitally.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App. By creating an account or using the App, you consent to the collection and use of your information in accordance with this Privacy Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information to provide our services:</p>
            
            <h3>a) Account Information</h3>
            <ul>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address (if provided)</li>
              <li>Shop or business name</li>
              <li>Business address</li>
            </ul>

            <h3>b) Business Data</h3>
            <ul>
              <li>Inventory records</li>
              <li>Product details</li>
              <li>Customer information entered by you</li>
              <li>Billing and transaction history</li>
            </ul>

            <h3>c) Customer Contact Information</h3>
            <ul>
              <li>Customer phone numbers entered by you</li>
              <li>Used only for sending bills, reminders, or transaction details</li>
            </ul>

            <h3>d) Usage and Device Information</h3>
            <ul>
              <li>Device type</li>
              <li>Operating system</li>
              <li>App usage data</li>
              <li>Crash and performance data</li>
            </ul>
            <p>
              This information may be collected automatically through Firebase or similar services to improve app performance and stability.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To create and manage your account</li>
              <li>To provide digital billing and inventory features</li>
              <li>To store and manage your business records</li>
              <li>To generate invoices and transaction reports</li>
              <li>To enable sharing of bills or reminders via SMS, WhatsApp, or other platforms</li>
              <li>To improve app performance, security, and user experience</li>
              <li>To provide customer support</li>
            </ul>
            <p>We do not use your data for advertising or sell it to third parties.</p>

            <h2>4. Data Storage and Security</h2>
            <p>Your data is stored securely using Google Firebase services, which provide:</p>
            <ul>
              <li>Encryption in transit</li>
              <li>Secure cloud storage</li>
              <li>Authentication-based access controls</li>
            </ul>
            <p>Your business data is accessible only through your authenticated account. Data may be processed and stored on secure servers located in multiple regions operated by Google.</p>

            <h2>5. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal or business data. We may share information only in the following situations:</p>
            <ul>
              <li>With service providers such as Google Firebase for app functionality</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, users, or prevent fraud or misuse</li>
            </ul>
            <p>All service providers are bound by confidentiality and data protection obligations.</p>

            <h2>6. Data Retention</h2>
            <p>We retain your personal and business data only while your account is active. If you delete your account:</p>
            <ul>
              <li>All associated personal and business data will be permanently deleted</li>
              <li>Data removal will be completed within 30 days from the deletion request</li>
            </ul>

            <h2>7. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal or business data</li>
              <li>Update or correct your information</li>
              <li>Export your data</li>
              <li>Delete your account and all associated data</li>
            </ul>
            <p>You can delete your account directly from the App settings.</p>

            <h2>8. Data Deletion Instructions</h2>
            <p>If you wish to delete your account and all associated data, you have two options:</p>
            
            <h3>Option 1: In-App Deletion (Recommended)</h3>
            <ol>
              <li>Open the Vyop App and log into your account.</li>
              <li>Navigate to Settings.</li>
              <li>Click on Delete Account and confirm your choice.</li>
            </ol>
            <p>Your account and all associated data will be immediately and permanently deleted.</p>

            <h3>Option 2: Email Request</h3>
            <ul>
              <li>Send an email to <a href="mailto:tunwalhimanshu13@gmail.com">tunwalhimanshu13@gmail.com</a> from the email address associated with your account.</li>
              <li>Use the subject line "Account Deletion Request".</li>
              <li>We will process your request and delete all associated data within 30 days.</li>
            </ul>

            <h2>9. Children’s Privacy</h2>
            <p>The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If we become aware that such data has been collected, we will delete it promptly.</p>

            <h2>10. Third-Party Services</h2>
            <p>The App uses the following third-party services:</p>
            <ul>
              <li>Google Firebase (Authentication, Firestore, Cloud Storage, Analytics)</li>
            </ul>
            <p>These services may collect and process data according to their own privacy policies.</p>

            <h2>11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date. Continued use of the App after changes means you accept the updated policy.</p>

            <h2>12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
            <p>Email: <a href="mailto:tunwalhimanshu13@gmail.com">tunwalhimanshu13@gmail.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
