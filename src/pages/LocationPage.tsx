import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { getCityData } from '../data/cities';

interface LocationPageProps {
  citySlug: string;
}

export function LocationPage({ citySlug }: LocationPageProps) {
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
          <Button variant="primary" onClick={() => (window.location.hash = '/')}>
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Antek Automation - ${city.name}`,
    description: city.metaDescription,
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    serviceType: ['AI Voice Agents', 'AI Chatbots', 'Workflow Automation'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.region,
      addressCountry: 'GB',
    },
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title={`AI Automation Agency ${city.name} | Antek Automation UK`}
        description={city.metaDescription}
        path={`/locations/${city.slug}`}
        breadcrumbs={breadcrumbs}
        schema={localBusinessSchema}
      />

      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION | {city.name.toUpperCase()} | UK AGENCY
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation Agency {city.name}
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-4">
              {city.localContext}
            </p>
            <p className="text-lg text-charcoal leading-normal mb-8">
              {city.heroDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => (window.location.hash = '/contact')}>
                Get Started
              </Button>
              <Button variant="secondary" onClick={() => (window.location.hash = '/#services')}>
                Our Services
              </Button>
            </div>
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
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
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
                onClick={() => (window.location.hash = '/services/ai-voice-assistants')}
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
                onClick={() => (window.location.hash = '/services/ai-chatbots')}
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
                onClick={() => (window.location.hash = '/services/workflow-automation')}
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
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Industries We Serve in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card hover>
              <Icon letter="T" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Tradespeople
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Plumbers, electricians, builders
              </p>
            </Card>

            <Card hover>
              <Icon letter="C" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Cleaning
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Residential and commercial cleaning
              </p>
            </Card>

            <Card hover>
              <Icon letter="P" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Professional
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Consultants, accountants, legal
              </p>
            </Card>

            <Card hover>
              <Icon letter="B" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2">
                Beauty
              </h3>
              <p className="text-sm text-charcoal leading-normal">
                Salons, spas, wellness centres
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {city.testimonial && (
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Card>
              <div className="border-l-4 border-charcoal pl-6">
                <p className="text-lg text-charcoal leading-normal mb-4 italic">
                  "{city.testimonial.quote}"
                </p>
                <p className="font-black text-charcoal uppercase text-sm">
                  — {city.testimonial.author}, {city.testimonial.business}
                </p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              Getting started with AI automation in {city.name} is simple
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
                We build and train your AI on your services, pricing, and availability. Ready in 1-2 weeks.
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

      {/* Final CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Automate Your {city.name} Business?
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and discover how AI can transform your service business
          </p>
          <Button
            variant="primary"
            className="text-lg px-10"
            onClick={() => (window.location.hash = '/contact')}
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}
