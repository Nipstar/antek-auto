import { useState, useEffect, Suspense, lazy } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { VoiceDemoButton } from '../components/VoiceDemoButton';

const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function HomePage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  useEffect(() => {
    const handleOpenVoiceChat = () => {
      setIsVoiceChatOpen(true);
    };

    window.addEventListener('openVoiceChat', handleOpenVoiceChat);
    return () => window.removeEventListener('openVoiceChat', handleOpenVoiceChat);
  }, []);

  const organisationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.antekautomation.com',
    name: 'Antek Automation',
    alternateName: 'Antek',
    description: 'UK AI automation agency delivering bespoke workflows that streamline operations, cut costs & boost ROI for businesses nationwide.',
    url: 'https://www.antekautomation.com',
    logo: 'https://www.antekautomation.com/logo.svg',
    image: 'https://www.antekautomation.com/logo.svg',
    telephone: '+443330389960',
    email: 'hello@antekautomation.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chantry House, 38 Chantry Way',
      addressLocality: 'Andover',
      postalCode: 'SP10 1LZ',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    priceRange: '£500+',
    serviceType: ['AI Chatbots', 'Voice AI Assistants', 'Workflow Automation'],
    knowsAbout: ['AI Automation', 'Chatbots', 'Voice Agents', 'Workflow Automation', 'Service Businesses'],
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Antek Automation | AI Automation Agency UK"
        description="Losing customers to missed calls? | AI voice assistants & chatbots capture every lead 24/7 | UK automation agency for service businesses"
        path="/"
        schema={organisationSchema}
      />
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
                Antek Automation | Ai Automation Agency UK
              </h1>
              <p className="text-xl md:text-2xl font-bold text-terracotta mb-6">
                AI That Works for Your Business
              </p>
              <p className="text-lg text-charcoal leading-normal mb-8">
                Stop losing customers to missed calls and slow responses. Antek Automation deploys AI chatbots, voice agents, and workflow automation that work 24/7 to capture leads, book appointments, and grow your revenue.
              </p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
                <Button variant="secondary" onClick={() => navigate('/contact')}>Book a Call</Button>
              </div>
            </div>
            <div className="relative">
              <Card hover className="bg-soft-sage">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon letter="A" size="md" />
                    <div>
                      <p className="font-black uppercase text-sm">AI Agent</p>
                      <p className="text-sm text-charcoal">Available 24/7</p>
                    </div>
                  </div>
                  <div className="border-3 border-charcoal bg-white p-4">
                    <p className="text-sm font-bold">Customer: "Can I book for tomorrow?"</p>
                  </div>
                  <div className="border-3 border-charcoal bg-warm-beige p-4">
                    <p className="text-sm font-bold">AI: "Of course! I have slots at 10am, 2pm, and 4pm available. Which works best?"</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted-taupe border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              The Problem We Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Missed Opportunities
                  </h3>
                  <p className="text-charcoal leading-normal">
                    65% of customers won't leave a voicemail. Every missed call is a lost customer to your competitor who answered first.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Slow Response Times
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Customers expect instant answers. Responding in hours instead of minutes means losing business to faster competitors.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Administrative Burden
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Hours wasted on scheduling, follow-ups, and repetitive questions. Time that should be spent growing your business.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Limited Availability
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Your business sleeps but customers don't. Late-night inquiries go to competitors who never close.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              Three powerful solutions to transform how you serve customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Website chat that qualifies leads, answers FAQs, and books appointments instantly while you focus on delivering service.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>Learn More</Button>
            </Card>

            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Voice AI
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Phone agents that answer calls, take bookings, and handle customer questions with natural conversation 24/7.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-assistants')}>Learn More</Button>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Connect your tools and eliminate repetitive tasks. From scheduling to invoicing, let AI handle the busywork.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/workflow-automation')}>Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              From setup to success in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                1
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Discovery Call
              </h3>
              <p className="text-charcoal leading-normal">
                We learn about your business, customers, and processes. Takes 30 minutes. Zero commitment required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                2
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Custom Setup
              </h3>
              <p className="text-charcoal leading-normal">
                We build and train your AI agents on your services, pricing, and availability. Ready in 1-2 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                3
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-4">
                Launch & Grow
              </h3>
              <p className="text-charcoal leading-normal">
                Your AI starts working immediately. We monitor, optimise, and help you scale as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28" id="industries">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card hover>
              <Icon letter="T" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Tradespeople
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Plumbers, electricians, builders who need 24/7 call handling
              </p>
            </Card>

            <Card hover>
              <Icon letter="C" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Cleaning
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Residential and commercial cleaning services
              </p>
            </Card>

            <Card hover>
              <Icon letter="P" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Professional
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Consultants, accountants, legal services
              </p>
            </Card>

            <Card hover>
              <Icon letter="B" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Beauty
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Salons, spas, wellness centers
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and discover how AI can transform your service business
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Get Started Today
          </Button>
        </div>
      </section>

      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
