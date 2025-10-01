import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Check } from 'lucide-react';

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '£297',
      description: 'Perfect for testing AI automation',
      features: [
        'AI Chatbot on your website',
        'Up to 500 conversations/month',
        'Basic lead capture',
        'Email notifications',
        'Standard support',
        '7-day free trial',
      ],
      cta: 'Start Free Trial',
      featured: false,
    },
    {
      name: 'Professional',
      price: '£697',
      description: 'For growing service businesses',
      features: [
        'Everything in Starter',
        'Voice AI phone agent',
        'Up to 2,000 conversations/month',
        'Calendar integration',
        'CRM integration',
        'Priority support',
        'Custom training',
        'Monthly optimization',
      ],
      cta: 'Get Started',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For businesses scaling fast',
      features: [
        'Everything in Professional',
        'Unlimited conversations',
        'Multiple AI agents',
        'Advanced workflow automation',
        'Dedicated account manager',
        '24/7 premium support',
        'Custom integrations',
        'White-label option',
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  return (
    <div className="bg-off-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-charcoal leading-normal max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              hover
              className={plan.featured ? 'bg-warm-beige transform md:-translate-y-4' : ''}
            >
              {plan.featured && (
                <div className="bg-terracotta text-off-white font-black uppercase text-sm px-4 py-2 border-3 border-charcoal shadow-brutal-xs inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h2 className="font-black text-3xl uppercase text-charcoal mb-2">
                {plan.name}
              </h2>
              <div className="mb-4">
                <span className="font-black text-5xl text-charcoal">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-charcoal">/month</span>
                )}
              </div>
              <p className="text-charcoal leading-normal mb-8">
                {plan.description}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success-green shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-charcoal">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? 'primary' : 'secondary'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-soft-sage border-3 border-charcoal shadow-brutal p-10 md:p-12 mb-16">
          <h2 className="font-black text-3xl uppercase text-charcoal mb-6 text-center">
            What's Included In Every Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Setup & Training
              </h3>
              <p className="text-charcoal leading-normal">
                We handle everything from onboarding to AI training. Your agents learn your business inside out.
              </p>
            </div>
            <div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Ongoing Support
              </h3>
              <p className="text-charcoal leading-normal">
                Regular check-ins, performance reports, and optimizations to improve your results over time.
              </p>
            </div>
            <div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                No Surprises
              </h3>
              <p className="text-charcoal leading-normal">
                Fixed monthly pricing. No setup fees. No hidden costs. Cancel or change plans anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-black text-3xl uppercase text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3 text-left">
                How long is the setup process?
              </h3>
              <p className="text-charcoal leading-normal text-left">
                Most clients are live within 1-2 weeks. Enterprise setups with custom integrations may take 3-4 weeks.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3 text-left">
                Can I upgrade or downgrade?
              </h3>
              <p className="text-charcoal leading-normal text-left">
                Yes, change plans anytime. Upgrades are instant. Downgrades take effect at your next billing cycle.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3 text-left">
                What if I exceed conversation limits?
              </h3>
              <p className="text-charcoal leading-normal text-left">
                We'll notify you before you hit the limit. Extra conversations are £0.20 each, or upgrade to a higher plan.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3 text-left">
                Do you offer refunds?
              </h3>
              <p className="text-charcoal leading-normal text-left">
                Yes. 30-day money-back guarantee if you're not satisfied. No questions asked.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
