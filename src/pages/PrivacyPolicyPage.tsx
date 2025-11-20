import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Privacy Policy | Antek Automation"
        description="Privacy Policy for Antek Automation. Learn how we collect, process, and protect your personal data."
        path="/privacy-policy"
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-charcoal">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="prose prose-sm max-w-none space-y-8 text-charcoal">
          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">1. Introduction</h2>
            <p className="leading-relaxed">
              Antek Automation Ltd ("we", "us", "our", "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">2. Information We Collect</h2>
            <p className="font-bold mb-2">We collect information in the following ways:</p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Contact Form Data:</strong> Name, business name, email, phone number, service interests, and messages when you submit a contact form</li>
              <li><strong>Chatbot Interactions:</strong> Messages exchanged with our AI chatbot, session IDs, and timestamps</li>
              <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time spent on pages, and referrer information</li>
              <li><strong>Cookies:</strong> Session cookies and tracking cookies for analytics and user preferences</li>
              <li><strong>Voluntary Information:</strong> Any additional information you choose to provide to us</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">3. How We Use Your Information</h2>
            <p className="font-bold mb-2">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>To respond to your enquiries and provide requested services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and traffic patterns</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">4. Legal Basis for Processing</h2>
            <p className="leading-relaxed">
              We process your personal data on the following legal bases:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Contract:</strong> To perform our contractual obligations to you</li>
              <li><strong>Consent:</strong> Where you have provided explicit consent</li>
              <li><strong>Legitimate Interest:</strong> For our business purposes, including marketing and analytics</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">5. Data Sharing and Third Parties</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal data to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in delivering services (e.g., analytics providers, n8n for webhooks)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Business Partners:</strong> With your consent for joint marketing initiatives</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, typically:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Contact form submissions: Up to 3 years for business records</li>
              <li>Chatbot sessions: Up to 12 months for service improvement</li>
              <li>Analytics data: Up to 26 months</li>
              <li>Marketing communications: Until you unsubscribe</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">7. Your Rights</h2>
            <p className="leading-relaxed">
              Under UK GDPR and UK Data Protection Act 2018, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to certain types of processing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent to marketing at any time</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              To exercise these rights, contact us at:{' '}
              <a href="mailto:hello@antekautomation.com" className="text-terracotta hover:underline font-bold">
                hello@antekautomation.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">8. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              Our website uses cookies to enhance your experience. Cookies are small files stored on your device. We use:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> To measure website performance (Google Analytics)</li>
              <li><strong>Functional Cookies:</strong> To remember your preferences</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              You can control cookie settings in your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">9. External Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">10. Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, and disclosure. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">11. Data Breaches</h2>
            <p className="leading-relaxed">
              In the event of a personal data breach, we will notify affected individuals and relevant authorities in accordance with UK GDPR requirements within 72 hours of becoming aware of the breach.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">12. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed at children under 13 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">13. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website signifies your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">14. Data Protection Officer</h2>
            <p className="leading-relaxed">
              If you have concerns about our data protection practices, you can contact our team at:{' '}
              <a href="mailto:hello@antekautomation.com" className="text-terracotta hover:underline font-bold">
                hello@antekautomation.com
              </a>
              {' '}or the UK Information Commissioner's Office (ICO).
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">15. Contact Us</h2>
            <p className="leading-relaxed">
              For any questions about this Privacy Policy or your personal data:
            </p>
            <div className="mt-4 space-y-1 leading-relaxed">
              <p><strong>Email:</strong> hello@antekautomation.com</p>
              <p><strong>Phone:</strong> 03330 389960</p>
              <p><strong>Address:</strong> Chantry House, 38 Chantry Way, Andover, SP10 1LZ</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
