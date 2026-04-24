import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[var(--bg-hero)]">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Terms of Service
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Last updated: May 2026
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[var(--border-subtle)] animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-gray-700">
            <p>Last updated: February 15, 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Vyop application ("App"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use the App.</p>

            <h2>2. Eligibility</h2>
            <p>You must be at least 18 years old to use this App. By using the App, you represent and warrant that you meet this requirement.</p>

            <h2>3. Description of Service</h2>
            <p>Vyop is a business management application designed for shopkeepers and retailers. The App provides tools for:</p>
            <ul>
              <li>Inventory management</li>
              <li>Billing and invoicing</li>
              <li>Customer management</li>
              <li>Basic business analytics</li>
            </ul>
            <p>The App is provided on an “as is” and “as available” basis.</p>

            <h2>4. User Accounts</h2>
            <p>When creating an account, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h2>5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the App</li>
              <li>Interfere with or disrupt the App’s functionality</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Use the App to infringe upon the rights of others</li>
            </ul>

            <h2>6. Business Data</h2>
            <p>You retain ownership of all business data you enter into the App, including:</p>
            <ul>
              <li>Inventory records</li>
              <li>Customer information</li>
              <li>Bills and invoices</li>
              <li>Transaction history</li>
            </ul>
            <p>We do not claim ownership over your business data. You are responsible for:</p>
            <ul>
              <li>The accuracy of the data you enter</li>
              <li>Ensuring your data complies with applicable laws</li>
              <li>Obtaining any necessary consent from customers before storing or using their personal information</li>
            </ul>

            <h2>7. Billing and Invoicing</h2>
            <p>The billing and invoicing features are provided as tools to assist your business operations. You are solely responsible for:</p>
            <ul>
              <li>The accuracy of invoices</li>
              <li>Compliance with applicable tax laws</li>
              <li>GST or other regulatory requirements</li>
            </ul>
            <p>The App does not provide tax, legal, or accounting advice.</p>

            <h2>8. No Warranty</h2>
            <p>The App is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.</p>
            <p>We do not guarantee that:</p>
            <ul>
              <li>The App will be error-free</li>
              <li>The App will be secure at all times</li>
              <li>The App will be continuously available without interruptions</li>
            </ul>

            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Vyop shall not be liable for any:</p>
            <ul>
              <li>Indirect</li>
              <li>Incidental</li>
              <li>Special</li>
              <li>Consequential</li>
              <li>Punitive damages</li>
            </ul>
            <p>This includes loss of:</p>
            <ul>
              <li>Profits</li>
              <li>Data</li>
              <li>Business opportunities</li>
            </ul>
            <p>arising from your use of the App.</p>

            <h2>10. Service Availability</h2>
            <p>We strive to keep the App available at all times, but we do not guarantee uninterrupted access. We may:</p>
            <ul>
              <li>Modify</li>
              <li>Suspend</li>
              <li>Discontinue</li>
            </ul>
            <p>the App or any feature at any time without prior notice.</p>

            <h2>11. Account Termination</h2>
            <p>You may delete your account at any time through the App settings. We reserve the right to:</p>
            <ul>
              <li>Suspend or terminate accounts</li>
              <li>Remove content</li>
              <li>Restrict access</li>
            </ul>
            <p>if these Terms are violated. Upon termination, your data will be handled according to our Privacy Policy.</p>

            <h2>12. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. Changes will be posted on this page with an updated “Last updated” date. Continued use of the App after changes constitutes acceptance of the updated terms.</p>

            <h2>13. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.</p>

            <h2>14. Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us at:</p>
            <p>Email: <a href="mailto:vyop4shop@gmail.com">vyop4shop@gmail.com</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
