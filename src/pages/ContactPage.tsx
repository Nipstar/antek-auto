import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ContactFormData } from '../types';
import { SEOHead } from '../components/SEOHead';

const CONTACT_WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL || '';

export function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceType: '',
    budget: '',
    interests: [] as string[],
    message: '',
    preferredContact: 'either' as 'phone' | 'email' | 'either',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const payload: ContactFormData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'website_contact_form',
    };

    try {
      if (CONTACT_WEBHOOK_URL) {
        console.log('Sending to webhook:', CONTACT_WEBHOOK_URL);
        console.log('Payload:', payload);

        const response = await fetch(CONTACT_WEBHOOK_URL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        console.log('Response status:', response.status);

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: "Thank you! We'll contact you within 2 hours.",
          });
          setFormData({
            name: '',
            businessName: '',
            phone: '',
            email: '',
            serviceType: '',
            budget: '',
            interests: [],
            message: '',
            preferredContact: 'either',
          });
        } else {
          const errorText = await response.text();
          console.error('Webhook error:', response.status, errorText);
          throw new Error(`Webhook failed with status ${response.status}`);
        }
      } else {
        setSubmitStatus({
          type: 'success',
          message: "Thank you! We'll contact you within 2 hours. You can also reach us directly at hello@antekautomation.com",
        });
        setFormData({
          name: '',
          businessName: '',
          phone: '',
          email: '',
          serviceType: '',
          budget: '',
          interests: [],
          message: '',
          preferredContact: 'either',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please email us directly at hello@antekautomation.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-off-white py-20 md:py-28">
      <SEOHead
        title="Contact Antek Automation | AI Automation Agency UK"
        description="Contact Antek Automation: UK AI automation agency delivering bespoke workflows that streamline operations, cut costs & boost ROI for businesses nationwide."
        path="/contact"
        breadcrumbs={breadcrumbs}
      />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            Get Started with Antek Automation
          </h1>
          <p className="text-lg text-charcoal leading-normal max-w-2xl mx-auto">
            Tell us about your business and we'll show you exactly how AI automation can help you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Email</h3>
            <p className="text-charcoal">hello@antekautomation.com</p>
          </Card>
          <Card>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Phone</h3>
            <p className="text-charcoal">0333 335 7920</p>
          </Card>
          <Card>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Location</h3>
            <p className="text-charcoal">Hampshire, United Kingdom</p>
          </Card>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="Smith Plumbing Ltd"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="+44 7123 456789"
                />
              </div>

              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="john@smithplumbing.co.uk"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                >
                  <option value="">Select your industry</option>
                  <option value="trades">Tradespeople</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="professional">Professional Services</option>
                  <option value="beauty">Beauty & Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                >
                  <option value="">Select your budget</option>
                  <option value="500-999">£500 - £999</option>
                  <option value="1000-1999">£1,000 - £1,999</option>
                  <option value="2000-3999">£2,000 - £3,999</option>
                  <option value="4000-7999">£4,000 - £7,999</option>
                  <option value="8000+">£8,000+</option>
                  <option value="not_sure">Not Sure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-black text-charcoal mb-3 block uppercase text-sm">
                What interests you? *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'chatbot', label: 'AI Chatbot for Website' },
                  { value: 'voice', label: 'Voice AI Phone Agent' },
                  { value: 'automation', label: 'Workflow Automation' },
                  { value: 'not_sure', label: "Not Sure - Need Guidance" },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="accent-terracotta w-5 h-5 border-3 border-charcoal"
                    />
                    <span className="text-charcoal">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                Tell us about your needs
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal resize-none"
                placeholder="What challenges are you facing? How can we help?"
              />
            </div>

            <div>
              <label className="font-black text-charcoal mb-3 block uppercase text-sm">
                Preferred Contact Method *
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'phone', label: 'Phone' },
                  { value: 'email', label: 'Email' },
                  { value: 'either', label: 'Either' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={formData.preferredContact === option.value}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'phone' | 'email' | 'either' })}
                      className="accent-terracotta w-5 h-5"
                    />
                    <span className="text-charcoal font-bold">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 border-3 border-charcoal ${
                  submitStatus.type === 'success' ? 'bg-success-green' : 'bg-peach'
                }`}
              >
                <p className={`font-bold ${submitStatus.type === 'success' ? 'text-off-white' : 'text-charcoal'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full text-lg"
              disabled={isSubmitting || formData.interests.length === 0}
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </Button>

            <p className="text-sm text-charcoal text-center">
              We typically respond within 2 hours during business hours
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
