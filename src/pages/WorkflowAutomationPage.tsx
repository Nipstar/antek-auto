import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';

export function WorkflowAutomationPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'Workflow Automation', url: '/services/workflow-automation' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Workflow Automation | Antek Automation | AI Automation Agency UK"
        description="Workflow Automation by Antek Automation: Bespoke workflows that streamline operations, cut costs & boost ROI for UK businesses nationwide."
        path="/services/workflow-automation"
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              WORKFLOW AUTOMATION | SAVE 10-20 HOURS WEEKLY | UK SERVICE BUSINESSES
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Workflow Automation | AI Automation Agency UK
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-8">
              Your business shouldn't require you to manually copy data between systems, send the same emails repeatedly, or chase payments. We build custom workflows using n8n that connect your tools and automate the repetitive work—so you can focus on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => window.location.hash = '/contact'}>
                Get Started
              </Button>
              <Button variant="secondary" onClick={() => window.dispatchEvent(new Event('openChatbot'))}>See Examples</Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Is n8n */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
            What Is n8n?
          </h2>
          <div className="space-y-4 text-charcoal leading-normal text-lg mb-8">
            <p>
              n8n is a powerful workflow automation tool that connects your business systems and makes them work together automatically. Think of it as the "glue" between your apps.
            </p>
            <p>
              <strong>Example:</strong> When a new lead fills out your contact form, n8n can automatically add them to your CRM, send you a Slack notification, create a task in your project management tool, and send the customer a welcome email—all without you lifting a finger.
            </p>
            <p>
              We build these workflows for you, tailored to your exact business processes.
            </p>
          </div>

          <div className="bg-success-green border-3 border-charcoal p-6">
            <p className="text-off-white font-black text-xl uppercase mb-2">One-time setup, runs forever</p>
            <p className="text-off-white leading-normal">
              Unlike monthly SaaS tools like Zapier, n8n workflows are yours to keep. Pay once, automate forever. No recurring costs.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Workflows */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Popular Workflows
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="L" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Lead Management
              </h3>
              <p className="text-charcoal leading-normal">
                New leads from your website, Facebook, or phone system automatically go into your CRM with proper tagging, assignment, and follow-up reminders.
              </p>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Appointment Automation
              </h3>
              <p className="text-charcoal leading-normal">
                Send automatic booking confirmations, reminders (24hr and 2hr before), post-visit follow-ups, and review requests without manual work.
              </p>
            </Card>

            <Card hover>
              <Icon letter="I" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Invoicing & Payments
              </h3>
              <p className="text-charcoal leading-normal">
                Auto-generate invoices when jobs are marked complete, send payment reminders for overdue invoices, and log payments in your accounting software.
              </p>
            </Card>

            <Card hover>
              <Icon letter="M" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Customer Communication
              </h3>
              <p className="text-charcoal leading-normal">
                Send personalized emails or SMS based on customer actions: welcome sequences, abandoned quote follow-ups, birthday messages, service reminders.
              </p>
            </Card>

            <Card hover>
              <Icon letter="R" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Reporting & Admin
              </h3>
              <p className="text-charcoal leading-normal">
                Daily/weekly reports sent to your inbox: new leads, revenue, pending invoices, upcoming appointments. All your metrics in one place, automatically.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools We Connect */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Tools We Connect
            </h2>
            <p className="text-lg text-charcoal">
              n8n integrates with 400+ apps. Here are the most common for UK service businesses:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Google Calendar',
              'Gmail / Outlook',
              'WhatsApp / SMS',
              'Xero / QuickBooks',
              'Stripe / GoCardless',
              'Jobber / Tradify',
              'WordPress / Wix',
              'Slack / Microsoft Teams',
            ].map((tool, index) => (
              <Card key={index}>
                <p className="text-charcoal font-black text-center">{tool}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-charcoal mt-8">
            Don't see your tool? We can connect nearly anything with an API or webhook.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Card>
            <div className="border-l-4 border-charcoal pl-6">
              <p className="text-lg text-charcoal leading-normal mb-4 italic">
                "We were spending 15+ hours every week on admin: copying customer details between systems, sending reminder emails, chasing invoices. Antek built workflows that do all of it automatically. We've reclaimed nearly a full work week—and that time now goes into actually growing the business."
              </p>
              <p className="font-black text-charcoal uppercase text-sm">
                — Sarah P., Cleaning Company Owner, Leeds
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
              Package Options
            </h2>
            <p className="text-2xl font-black text-success-green mb-8">
              Pay once, automate forever (no monthly fees)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center mb-6">
                <h3 className="font-black text-3xl uppercase text-charcoal mb-4">Small</h3>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>2-3 simple workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Connect 2-3 tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Basic automation setup</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>30 days support</span>
                </li>
              </ul>
              <Button variant="secondary" className="w-full" onClick={() => window.location.hash = '/contact'}>
                Get Quote
              </Button>
            </Card>

            <Card className="bg-soft-sage">
              <div className="text-center mb-2">
                <div className="inline-block bg-terracotta text-off-white px-4 py-1 font-black text-sm uppercase mb-4">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-black text-3xl uppercase text-charcoal mb-4">Standard</h3>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>5-7 custom workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Connect 4-6 tools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Complex logic & branching</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>90 days support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Training session included</span>
                </li>
              </ul>
              <Button variant="primary" className="w-full" onClick={() => window.location.hash = '/contact'}>
                Get Quote
              </Button>
            </Card>

            <Card>
              <div className="text-center mb-6">
                <h3 className="font-black text-3xl uppercase text-charcoal mb-4">Complete</h3>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Unlimited workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Full business automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Custom integrations & APIs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>6 months support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-success-green">✓</span>
                  <span>Dedicated implementation</span>
                </li>
              </ul>
              <Button variant="secondary" className="w-full" onClick={() => window.location.hash = '/contact'}>
                Get Quote
              </Button>
            </Card>
          </div>

          <p className="text-center text-charcoal font-black text-lg mt-12">
            Custom pricing based on your specific automation needs
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and we'll identify which tasks in your business can be automated
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => window.location.hash = '/contact'}>
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
