import { SEOHead } from '../components/SEOHead';

export function TermsOfBusinessPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Business', url: '/terms-of-business' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Terms of Business | Antek Automation"
        description="Terms of Business for Antek Automation. Read our terms and conditions for AI automation services."
        path="/terms-of-business"
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            Terms of Business
          </h1>
          <p className="text-lg text-charcoal">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="prose prose-sm max-w-none space-y-8 text-charcoal">
          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">1. Agreement</h2>
            <p className="leading-relaxed">
              These Terms of Business set out the terms and conditions under which Antek Automation Ltd ("We", "Us", "Our", "Company") provides services to you ("Client", "You", "Your"). By engaging with us, you agree to be bound by these Terms of Business.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">2. Services</h2>
            <p className="leading-relaxed">
              We provide AI automation solutions including but not limited to: AI chatbots, voice assistants, and workflow automation services. Services will be provided in accordance with any written specification agreed between us and confirmed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">3. Fees and Payment</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Fees will be quoted in advance and confirmed in writing</li>
              <li>Payment terms are typically 50% deposit on agreement, 50% on completion</li>
              <li>All fees are exclusive of VAT unless otherwise stated</li>
              <li>We reserve the right to suspend services if payment is overdue beyond 14 days</li>
              <li>Late payment fees may apply in accordance with the Late Payment of Commercial Debts (Interest) Act 1998</li>
            </ul>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              All intellectual property rights in the services, software, and deliverables created by us shall remain the property of Antek Automation Ltd unless otherwise agreed in writing. You are granted a non-exclusive, non-transferable license to use the services for your business purposes.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">5. Confidentiality</h2>
            <p className="leading-relaxed">
              Both parties agree to maintain confidentiality of any proprietary information shared during the course of the engagement. This does not apply to information that is publicly available or legally required to be disclosed.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, we shall not be liable for any indirect, consequential, special, or punitive damages arising from your use of our services. Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">7. Warranties</h2>
            <p className="leading-relaxed">
              We warrant that our services will be provided in a professional and workmanlike manner. However, we do not warrant that services will be error-free or uninterrupted, or that any defects will be corrected.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">8. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate this agreement by providing 30 days' written notice. Upon termination, you remain liable for all fees incurred up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">9. Data Protection</h2>
            <p className="leading-relaxed">
              We comply with all applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR). Our Privacy Policy sets out how we process personal data. Please refer to our Privacy Policy for further information.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Business shall be governed by and construed in accordance with the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <section>
            <h2 className="font-black text-2xl uppercase tracking-tight-lg mb-4 text-charcoal">11. Contact</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Business, please contact us at:{' '}
              <a href="mailto:hello@antekautomation.com" className="text-terracotta hover:underline font-bold">
                hello@antekautomation.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
