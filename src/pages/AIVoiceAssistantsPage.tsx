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
        title="AI Voice Agents | AI Voice Assistants | Antek Automation UK"
        description="AI voice agents that answer calls 24/7 | Book appointments automatically | Never miss a call again | Boost revenue for UK service businesses"
        path="/services/ai-voice-assistants"
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI VOICE AGENTS | NEVER MISS CALLS | UK SERVICE BUSINESSES
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Voice Agents | Antek Automation
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-8">
              Stop dropping tools mid-job to answer the phone. Our intelligent assistants handle incoming calls 24/7, answer questions, take bookings, and route urgent matters to you—all with natural, human-like conversation.
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
                Take Messages
              </h3>
              <p className="text-charcoal leading-normal">
                Captures caller details, their needs, and urgency level. Sends you a text summary with their contact info so you can follow up when convenient.
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
              <Icon letter="T" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Tradespeople
              </h3>
              <p className="text-charcoal leading-normal">
                Plumbers, electricians, and builders on job sites who can't answer every call but don't want to lose business to competitors who pick up first.
              </p>
            </Card>

            <Card>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Cleaning Services
              </h3>
              <p className="text-charcoal leading-normal">
                Teams out cleaning who need someone to handle booking requests, answer service area questions, and provide quotes without interrupting the workday.
              </p>
            </Card>

            <Card>
              <Icon letter="P" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Professional Services
              </h3>
              <p className="text-charcoal leading-normal">
                Consultants, accountants, and legal professionals who are in client meetings and need calls handled professionally without hiring a receptionist.
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
                "Before, I'd miss 5-10 calls a day because I was on jobs. Now my AI assistant answers everything, books appointments, and texts me summaries. I've booked an extra £15,000 in work this quarter just from calls I used to miss. Best investment I've made."
              </p>
              <p className="font-black text-charcoal uppercase text-sm">
                — James R., Electrician, Birmingham
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
