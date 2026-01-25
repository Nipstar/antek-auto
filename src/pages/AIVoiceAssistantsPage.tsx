import { useState, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { VoiceAgentDemoButton } from '../components/VoiceAgentDemoButton';

// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function AIVoiceAssistantsPage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'AI Voice Assistants', url: '/services/ai-voice-assistants' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Voice Agents That Answer Every Call 24/7 | Antek Automation UK"
        description="AI voice agents for UK businesses | Answer every call 24/7 with natural conversation | Book appointments & capture leads | Never miss a customer"
        path="/services/ai-voice-assistants"
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI VOICE AGENTS | NEVER MISS A CALL | 24/7 CUSTOMER SERVICE
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Every Missed Call is a Lost Customer
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong>The Problem:</strong> While you're serving customers, in meetings, or simply outside business hours, potential customers are calling. When nobody answers, they don't leave a voicemail—they call your competitor.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong>What It's Costing You:</strong> The average business misses 30-40% of incoming calls. That's thousands in lost revenue every month going straight to competitors who answered first.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-8">
              <strong>The Solution:</strong> AI voice agents that answer every call with natural conversation, capture lead details, book appointments, and handle customer questions 24/7. No more missed opportunities. No more lost revenue.
            </p>
            <div className="mb-6">
              <p className="text-sm font-black uppercase text-charcoal mb-4">Hear how natural our AI sounds →</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceAgentDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>
                Get Your Voice Agent →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Retell AI Partner Badge */}
      <section className="py-16 md:py-20 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-md mx-auto bg-off-white border-3 border-charcoal shadow-brutal p-8 md:p-10 text-center hover:shadow-brutal-lg hover:border-terracotta transition-all duration-300">
            <img
              src="/Retell-Ai.svg"
              alt="Retell AI Official Partner"
              className="w-56 md:w-64 mx-auto mb-6"
            />
            <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight-lg text-charcoal mb-3">
              Official Retell AI Partner
            </h3>
            <p className="text-charcoal leading-relaxed mb-6">
              Powered by enterprise-grade voice AI technology
            </p>
            <a
              href="https://www.retellai.com/partner/antek-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-charcoal border-b-3 border-terracotta hover:text-terracotta transition-colors duration-200"
            >
              View Partnership →
            </a>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What It Does
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <Icon letter="P" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Answer Every Call
              </h3>
              <p className="text-charcoal leading-normal">
                No more missed calls or voicemails. Your AI assistant picks up every time, answers questions about your services, pricing, and availability using natural conversation.
              </p>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Schedule Appointments
              </h3>
              <p className="text-charcoal leading-normal">
                Integrates with your calendar to check availability and book appointments on the spot. Customers get confirmation via SMS and email automatically—no human intervention needed.
              </p>
            </Card>

            <Card hover>
              <Icon letter="M" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Capture Lead Details
              </h3>
              <p className="text-charcoal leading-normal">
                Records caller information, their needs, and urgency level. Sends you instant notifications with contact details so you can follow up when it makes sense—or let the AI handle it completely.
              </p>
            </Card>

            <Card hover>
              <Icon letter="R" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Priority Routing
              </h3>
              <p className="text-charcoal leading-normal">
                Identifies emergencies or high-value jobs and puts those calls through to you immediately. Everything else gets handled or scheduled without interrupting your work.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <Icon letter="H" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Hospitality & Wellness
              </h3>
              <p className="text-charcoal leading-normal">
                Restaurants, hotels, clinics, and spas where staff are busy serving customers and can't answer every reservation, booking, or inquiry call instantly.
              </p>
            </Card>

            <Card>
              <Icon letter="P" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Professional Services
              </h3>
              <p className="text-charcoal leading-normal">
                Law firms, consultancies, and financial advisors who are in client meetings and need calls handled professionally without hiring a receptionist.
              </p>
            </Card>

            <Card>
              <Icon letter="R" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Retail & Service Businesses
              </h3>
              <p className="text-charcoal leading-normal">
                E-commerce stores, property managers, and service providers who need 24/7 phone coverage but can't justify hiring full-time reception staff.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Features
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Natural-sounding British voice',
              '24/7 availability (never takes breaks)',
              'Answers common questions (pricing, services, areas)',
              'Calendar integration for bookings',
              'SMS/email notifications for new leads',
              'Customisable greetings and responses',
              'Handles multiple calls simultaneously',
              'Escalates urgent matters to your mobile',
              'Records call summaries for follow-up',
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-success-green text-2xl shrink-0">✓</span>
                <p className="text-charcoal leading-normal">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Card>
            <div className="border-l-4 border-charcoal pl-6">
              <p className="text-lg text-charcoal leading-normal mb-4 italic">
                "We were losing high-value clients to firms that answered calls instantly. Our advisors were always in meetings, and potential clients wouldn't wait. The AI voice agent changed everything—it answers professionally, books consultations, and we've increased client intake by 40%. Best investment we've made."
              </p>
              <p className="font-black text-charcoal uppercase text-sm">
                — Sarah T., Managing Partner, Financial Advisory Firm, London
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
            What's Included
          </h2>

          <p className="text-2xl font-black text-terracotta mb-8">
            Stop losing £5,000+ per month to missed calls
          </p>

          <Card className="text-left">
            <div className="bg-peach border-3 border-charcoal p-6 mb-8">
              <h3 className="font-black uppercase text-charcoal mb-4 text-sm">Features:</h3>
              <ul className="space-y-3 text-charcoal">
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Custom-trained voice assistant for your business</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>UK phone number (or connect your existing number)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Calendar integration for booking appointments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>SMS & email notifications for every call</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Call forwarding for urgent matters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Unlimited calls (no per-minute charges)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Ongoing optimisation and support</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="flex-1 text-lg" onClick={() => navigate('/contact')}>
                Get Your Custom Quote
              </Button>
              <Button variant="secondary" className="flex-1 text-lg" onClick={() => setIsVoiceChatOpen(true)}>
                Hear a Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Never Miss Another Call
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and we'll show you how a voice assistant can transform your business
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Voice Chat Modal */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
