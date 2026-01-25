import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { ChatbotDemoButton } from '../components/ChatbotDemoButton';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function AIChatbotsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/#services' },
    { name: 'AI Chatbots', url: '/services/ai-chatbots' },
  ];

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Chatbots That Engage Customers 24/7 | Antek Automation UK"
        description="AI chatbots for UK businesses | Capture leads & answer questions 24/7 | Book appointments automatically | Never miss a customer inquiry again"
        path="/services/ai-chatbots"
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI CHATBOTS | 24/7 LEAD CAPTURE | INSTANT CUSTOMER ENGAGEMENT
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Your Website Traffic Leaves Without Converting
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong>The Problem:</strong> Visitors arrive at your website at all hours—evenings, weekends, holidays. They have questions. They're ready to buy. But when nobody responds immediately, they leave and find a competitor who does.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong>What You're Losing:</strong> 82% of customers expect immediate responses. Every minute they wait is another exit. That's leads, sales, and revenue walking away while you sleep.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-8">
              <strong>The Solution:</strong> AI chatbots that engage visitors instantly, answer questions 24/7, qualify leads, and book appointments—turning browsers into buyers even when your team is offline.
            </p>
            <div className="mb-6">
              <p className="text-sm font-black uppercase text-charcoal mb-4">See it in action →</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <ChatbotDemoButton onClick={() => window.dispatchEvent(new Event('openChatbot'))} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>
                Get Your Chatbot →
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
              <Icon letter="L" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Capture Every Lead
              </h3>
              <p className="text-charcoal leading-normal">
                Visitors leave their details even when you're not available. No more missed opportunities from after-hours website traffic.
              </p>
            </Card>

            <Card hover>
              <Icon letter="Q" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Answer Customer Questions Instantly
              </h3>
              <p className="text-charcoal leading-normal">
                "What are your prices?" "Do you deliver?" "What's your availability?" Your chatbot answers instantly with accurate information—no waiting, no missed questions.
              </p>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Book Appointments
              </h3>
              <p className="text-charcoal leading-normal">
                Integrates with your calendar to let customers book available time slots directly through the chat—no back-and-forth needed.
              </p>
            </Card>

            <Card hover>
              <Icon letter="F" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Qualify Leads
              </h3>
              <p className="text-charcoal leading-normal">
                Asks the right questions to understand customer needs, budget, and urgency so you can prioritise follow-ups that matter.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-success-green text-2xl">✓</span>
                  <p className="text-charcoal leading-normal">
                    <strong>Businesses with high inquiry volumes</strong> who can't answer every call or message instantly
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success-green text-2xl">✓</span>
                  <p className="text-charcoal leading-normal">
                    <strong>Businesses losing leads outside office hours</strong> when customers browse your site at night or weekends
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-success-green text-2xl">✓</span>
                  <p className="text-charcoal leading-normal">
                    <strong>Teams spending hours answering the same questions</strong> like pricing, service areas, and availability
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success-green text-2xl">✓</span>
                  <p className="text-charcoal leading-normal">
                    <strong>Growing businesses that need to scale</strong> without hiring more admin staff
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery Call',
                description: 'We learn about your services, common customer questions, and business goals. Takes 30 minutes.',
              },
              {
                step: '2',
                title: 'Build & Train',
                description: 'We create your chatbot, train it on your business, and customise responses to match your brand.',
              },
              {
                step: '3',
                title: 'Install',
                description: 'We add a small code snippet to your website. Works with any platform (WordPress, Wix, Squarespace, custom sites).',
              },
              {
                step: '4',
                title: 'Launch & Optimise',
                description: 'Your chatbot starts capturing leads immediately. We monitor performance and optimise based on conversations.',
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-terracotta text-off-white flex items-center justify-center font-black text-4xl border-3 border-charcoal shadow-brutal mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal leading-normal">{step.description}</p>
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
                "Our online store was getting 500+ monthly inquiries about products, shipping, and stock. We couldn't respond fast enough and were losing sales. The AI chatbot handles everything instantly—product questions, order tracking, and even upselling. Our conversion rate jumped 28% in the first month."
              </p>
              <p className="font-black text-charcoal uppercase text-sm">
                — Emily R., E-commerce Store Owner, Manchester
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            What's Included
          </h2>

          <Card className="text-left">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-black uppercase text-charcoal mb-4 text-sm">Features:</h3>
                <ul className="space-y-3 text-charcoal">
                  <li className="flex items-start space-x-2">
                    <span className="text-success-green">✓</span>
                    <span>Custom-trained chatbot for your business</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success-green">✓</span>
                    <span>Website integration (any platform)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success-green">✓</span>
                    <span>Lead capture & email notifications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success-green">✓</span>
                    <span>Calendar integration (optional)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success-green">✓</span>
                    <span>Ongoing support and updates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-peach border-3 border-charcoal p-6">
                <h3 className="font-black uppercase text-charcoal mb-3 text-sm">ROI Example:</h3>
                <p className="text-charcoal leading-normal text-sm">
                  If your chatbot captures just <strong>2 extra leads per week</strong> at an average job value of <strong>£300</strong>, that's <strong>£2,400/month</strong> in additional revenue.
                </p>
                <p className="text-charcoal font-black mt-4">
                  Most clients see ROI within the first month.
                </p>
              </div>
            </div>

            <Button variant="primary" className="w-full text-lg" onClick={() => navigate('/contact')}>
              Get Your Custom Quote
            </Button>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Capture More Leads?
          </h2>
          <p className="text-lg text-off-white leading-normal mb-8">
            Book a free consultation and we'll show you exactly how an AI chatbot can work for your business
          </p>
          <Button variant="primary" className="text-lg px-10" onClick={() => navigate('/contact')}>
            Book Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
