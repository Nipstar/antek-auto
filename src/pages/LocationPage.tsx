import { useState, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { getCityData } from '../data/cities';

// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

interface LocationPageProps {
  citySlug: string;
}

export function LocationPage({ citySlug }: LocationPageProps) {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);
  const city = getCityData(citySlug);

  if (!city) {
    return (
      <div className="bg-off-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-black text-4xl uppercase text-charcoal mb-4">
            Location Not Found
          </h1>
          <p className="text-charcoal mb-8">
            We couldn't find information for this location.
          </p>
          <Button variant="primary" onClick={() => (navigate('/'))}>
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/#locations' },
    { name: city.name, url: `/locations/${city.slug}` },
  ];

  // Helper to get industry badge color
  const getIndustryBadgeColor = (industry: string) => {
    switch (industry.toUpperCase()) {
      case 'HOSPITALITY':
        return 'bg-terracotta';
      case 'PROFESSIONAL SERVICES':
        return 'bg-soft-sage';
      case 'WELLNESS':
        return 'bg-peach';
      case 'RETAIL':
        return 'bg-warm-beige';
      default:
        return 'bg-charcoal text-off-white';
    }
  };

  // LocalBusiness schema for location pages
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Antek Automation ${city.name}`,
    image: 'https://www.antekautomation.com/logo.png',
    '@id': `https://www.antekautomation.com/locations/${city.slug}`,
    url: `https://www.antekautomation.com/locations/${city.slug}`,
    telephone: '+44-3330-388960',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    description: city.metaDescription,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '12',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Voice Agents',
            description: 'Answer every call 24/7 with natural conversation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbots',
            description: 'Capture leads from your website 24/7',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Workflow Automation',
            description: 'Automate repetitive tasks and eliminate busywork',
          },
        },
      ],
    },
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title={`AI Automation Agency ${city.name} | Antek Automation UK`}
        description={city.metaDescription}
        path={`/locations/${city.slug}`}
        breadcrumbs={breadcrumbs}
        schema={locationSchema}
      />

      {/* Hero Section with Separated PAS Framework */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Label */}
          <p className="text-sm uppercase tracking-wide text-mid-gray mb-4 font-black">
            AI AUTOMATION | {city.name.toUpperCase()} | UK AGENCY
          </p>

          {/* H1 */}
          <h1 className="font-black text-4xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-12 leading-tight">
            ANTEK AUTOMATION<br />{city.name.toUpperCase()}
          </h1>

          {/* THE PROBLEM */}
          <div className="mb-6 p-6 md:p-8 bg-white border-l-6 border-terracotta">
            <h3 className="text-xs font-black uppercase tracking-wide mb-3 text-charcoal">
              THE PROBLEM
            </h3>
            <p className="text-base md:text-lg text-charcoal leading-relaxed">
              {city.pas.problem}
            </p>
          </div>

          {/* THE COST */}
          <div className="mb-6 p-6 md:p-8 bg-[#FFF5F2] border-l-6 border-terracotta">
            <h3 className="text-xs font-black uppercase tracking-wide mb-3 text-charcoal">
              THE COST
            </h3>
            <p className="text-base md:text-lg text-charcoal leading-relaxed">
              {city.pas.agitate}
            </p>
          </div>

          {/* THE SOLUTION */}
          <div className="mb-10 p-6 md:p-8 bg-soft-sage border-l-6 border-success-green">
            <h3 className="text-xs font-black uppercase tracking-wide mb-3 text-charcoal">
              THE SOLUTION
            </h3>
            <p className="text-base md:text-lg text-charcoal leading-relaxed">
              {city.pas.solution}
            </p>
          </div>

          {/* CTA Buttons with LIVE badges */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsVoiceChatOpen(true)}
              className="flex-1 bg-charcoal text-off-white px-6 py-4 font-black uppercase border-3 border-charcoal shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-sm transition-all duration-200 text-sm md:text-base flex items-center justify-center gap-3"
            >
              <span className="inline-flex items-center gap-1 text-success-green">
                <span className="w-2 h-2 bg-success-green rounded-full animate-pulse"></span>
                LIVE
              </span>
              TALK TO {city.name.toUpperCase()} AI AGENT
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event('openChatbot'))}
              className="flex-1 bg-off-white text-charcoal px-6 py-4 font-black uppercase border-3 border-charcoal shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-sm transition-all duration-200 text-sm md:text-base flex items-center justify-center gap-3"
            >
              <span className="inline-flex items-center gap-1 text-success-green">
                <span className="w-2 h-2 bg-success-green rounded-full animate-pulse"></span>
                LIVE
              </span>
              SEE CHATBOT DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Why {city.name} Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {city.whyChooseUs.map((reason, index) => (
              <Card key={index} hover>
                <div className="w-12 h-12 bg-terracotta text-off-white flex items-center justify-center font-black text-2xl border-3 border-charcoal shadow-brutal mb-6">
                  {index + 1}
                </div>
                <h3 className="font-black text-xl uppercase text-charcoal mb-4">
                  {reason.title}
                </h3>
                <p className="text-charcoal leading-normal">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-soft-sage border-y-4 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Our Services in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Answer every call, book appointments, and handle customer questions 24/7 with natural, human-like conversation.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => (navigate('/services/ai-voice-assistants'))}
              >
                Learn More
              </Button>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Capture leads from your website 24/7, answer FAQs instantly, and book appointments whilst you're busy working.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => (navigate('/services/ai-chatbots'))}
              >
                Learn More
              </Button>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Connect your tools and eliminate repetitive tasks. From scheduling to invoicing, automate the busywork.
              </p>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => (navigate('/services/workflow-automation'))}
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Areas We Serve in {city.name}
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Covering {city.region} and surrounding areas
            </p>
          </div>

          <Card>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {city.coverageAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-success-green text-xl">✓</span>
                  <span className="text-charcoal font-bold">{area}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-peach border-y-4 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Industries We Serve in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <Icon letter="H" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Hospitality & Food Service
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Restaurants, cafes, hotels—never miss a reservation or order again
              </p>
            </Card>

            <Card hover>
              <Icon letter="P" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Professional Services
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Law firms, consultancies, accounting—capture leads and book consultations 24/7
              </p>
            </Card>

            <Card hover>
              <Icon letter="W" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Wellness & Healthcare
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Clinics, spas, fitness centers—automate appointments and patient inquiries
              </p>
            </Card>

            <Card hover>
              <Icon letter="R" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Retail & Business Services
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                E-commerce, property management, trades—answer every customer inquiry instantly
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 md:py-32 bg-off-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-charcoal mb-6">
              {city.name.toUpperCase()} SUCCESS STORY:<br />ROI IN DAYS, NOT MONTHS
            </h2>
          </div>

          <div className="bg-off-white border-4 border-charcoal shadow-[8px_8px_0px_#000000] overflow-hidden">
            {/* Industry Badge */}
            <div className="p-6 md:p-8 border-b-4 border-charcoal">
              <span className={`inline-block ${getIndustryBadgeColor(city.caseStudy.industry)} text-charcoal px-4 py-2 font-black text-xs uppercase border-3 border-charcoal shadow-brutal`}>
                {city.caseStudy.industry}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              {/* Headline */}
              <h3 className="font-black text-2xl md:text-3xl lg:text-4xl uppercase text-charcoal mb-2 leading-tight">
                {city.caseStudy.headline}
              </h3>
              <p className="text-sm md:text-base text-mid-gray font-bold mb-8">
                {city.caseStudy.businessType} | {city.caseStudy.location}
              </p>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="font-black text-sm uppercase tracking-wide text-charcoal mb-3">The Challenge:</h4>
                <p className="text-charcoal leading-relaxed text-base md:text-lg">
                  {city.caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-10">
                <h4 className="font-black text-sm uppercase tracking-wide text-charcoal mb-3">The Solution:</h4>
                <p className="text-charcoal leading-relaxed text-base md:text-lg">
                  {city.caseStudy.solution}
                </p>
              </div>

              {/* Results Box */}
              <div className="bg-soft-sage border-4 border-charcoal p-6 md:p-10 mb-8 shadow-[8px_8px_0px_#000000]">
                <h4 className="font-black text-lg uppercase tracking-wide text-charcoal mb-8">📊 THE RESULTS</h4>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {city.caseStudy.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-white border-3 border-charcoal p-5 md:p-6 shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
                    >
                      <div className="text-5xl sm:text-[3.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-6xl 2xl:text-7xl font-black text-terracotta leading-none mb-3 md:mb-3 lg:mb-4 tracking-tighter">
                        {metric.number}
                      </div>
                      <div className="font-black text-xs uppercase tracking-wide text-charcoal mb-2 whitespace-pre-line">
                        {metric.label}
                      </div>
                      <div className="text-xs text-mid-gray">
                        {metric.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Benefits List */}
                <div>
                  <h5 className="font-black text-sm uppercase tracking-wide text-charcoal mb-4">
                    {city.name}-Specific Benefits:
                  </h5>
                  <ul className="space-y-3">
                    {city.caseStudy.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-terracotta text-xl shrink-0">✓</span>
                        <span className="text-charcoal leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <div className="relative bg-white border-l-4 border-charcoal pl-8 py-6 mb-6">
                <div className="absolute left-2 top-4 text-6xl text-charcoal opacity-10 font-black leading-none">"</div>
                <p className="text-lg md:text-xl text-charcoal leading-relaxed italic mb-4 relative z-10">
                  {city.caseStudy.quote}
                </p>
                <p className="font-black text-sm uppercase text-charcoal">
                  — {city.caseStudy.author}, {city.caseStudy.business}
                </p>
              </div>

              {/* CTA Button */}
              <Button
                variant="primary"
                className="w-full text-base md:text-lg"
                onClick={() => (navigate('/contact'))}
              >
                GET YOUR CUSTOM QUOTE →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-soft-sage border-y-4 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              Getting started with AI automation in {city.name} is simple in 3 steps
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
                We learn about your {city.name} business, customers, and processes. Takes 30 minutes. Zero commitment required.
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
                We build and train your AI on your services, pricing, and {city.region} coverage. Ready in 1-2 weeks.
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
                Your AI starts working immediately across {city.name}. We monitor, optimise, and help you scale as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal border-t-8 border-terracotta py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            READY TO AUTOMATE YOUR<br />{city.name.toUpperCase()} BUSINESS?
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and discover how AI can transform your {city.name} business with 24/7 coverage across {city.region}
          </p>
          <Button
            variant="primary"
            className="text-lg px-10"
            onClick={() => (navigate('/contact'))}
          >
            GET STARTED TODAY →
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
