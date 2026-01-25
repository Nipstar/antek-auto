import { useState, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';

// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function WorkflowAutomationPage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'Workflow Automation', url: '/services/workflow-automation' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="Workflow Automation That Saves 10-20 Hours Per Week | Antek Automation UK"
        description="Custom n8n workflows for UK businesses | Automate data entry, invoicing & lead management | Eliminate busywork & reclaim 10-20 hours per week"
        path="/services/workflow-automation"
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              WORKFLOW AUTOMATION | SAVE 10-20 HOURS WEEKLY | ELIMINATE BUSYWORK
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Stop Wasting Hours on Repetitive Tasks
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong>The Problem:</strong> Your team spends hours every week on manual data entry, copying information between systems, sending the same emails repeatedly, chasing invoices, and updating spreadsheets. That's not work—that's busywork.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong>What It's Costing:</strong> Every hour spent on repetitive tasks is NOT spent growing revenue, serving customers, or building your business. That's 10-20 hours per week—over 500 hours per year—wasted on work a computer could do instantly.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-8">
              <strong>The Solution:</strong> Custom n8n workflows that connect your tools and automate repetitive tasks. From lead capture to invoicing, eliminate manual work and reclaim 10-20 hours per week to focus on what actually grows your business.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap">
              <button
                onClick={() => document.getElementById('popular-workflows')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group text-left"
              >
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-terracotta blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

                {/* Main button */}
                <div className="relative px-6 md:px-8 py-3 md:py-4 bg-terracotta border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
                  <div className="font-black uppercase text-sm md:text-base text-off-white tracking-tight-lg">
                    See What We Automate
                  </div>
                  <div className="text-xs text-off-white mt-1">
                    Popular workflows for UK businesses
                  </div>
                </div>
              </button>

              <button
                onClick={() => setIsVoiceChatOpen(true)}
                className="relative group text-left"
              >
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-soft-sage blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

                {/* Main button */}
                <div className="relative px-6 md:px-8 py-3 md:py-4 bg-soft-sage border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
                  {/* Live badge */}
                  <div className="absolute -top-3 -right-3 flex items-center space-x-1 bg-soft-sage border-2 border-charcoal px-2 py-1 rounded-full">
                    <span className="w-2 h-2 bg-charcoal rounded-full animate-pulse"></span>
                    <span className="text-xs font-black uppercase text-charcoal">Live</span>
                  </div>

                  <div className="font-black uppercase text-sm md:text-base text-charcoal tracking-tight-lg">
                    🎙️ Try Our Voice AI Agent Live
                  </div>
                  <div className="text-xs text-charcoal mt-1">
                    Hear the quality of AI we build • No signup • 🟢 Available 24/7
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="relative group text-left"
              >
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-mid-gray blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

                {/* Main button */}
                <div className="relative px-6 md:px-8 py-3 md:py-4 bg-off-white border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
                  <div className="font-black uppercase text-sm md:text-base text-charcoal tracking-tight-lg">
                    Get Custom Quote
                  </div>
                  <div className="text-xs text-charcoal mt-1">
                    Discuss your needs
                  </div>
                </div>
              </button>
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
      <section id="popular-workflows" className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
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
                Send personalised emails or SMS based on customer actions: welcome sequences, abandoned quote follow-ups, birthday messages, service reminders.
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
              n8n integrates with 400+ apps. Here are the most common for UK businesses:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Google Calendar',
              'Gmail / Outlook',
              'WhatsApp / SMS',
              'Xero / QuickBooks',
              'Stripe / PayPal',
              'HubSpot / Salesforce',
              'Shopify / WooCommerce',
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
                "Our consultancy was drowning in admin: updating CRM records, sending client reports, tracking project hours, chasing invoices. Antek built workflows that eliminated all the manual work. We've reclaimed nearly 20 hours per week—time that now goes into serving clients and winning new business."
              </p>
              <p className="font-black text-charcoal uppercase text-sm">
                — David L., Managing Partner, Management Consultancy, Birmingham
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
              <Button variant="secondary" className="w-full" onClick={() => navigate('/contact')}>
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
              <Button variant="primary" className="w-full" onClick={() => navigate('/contact')}>
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
              <Button variant="secondary" className="w-full" onClick={() => navigate('/contact')}>
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
