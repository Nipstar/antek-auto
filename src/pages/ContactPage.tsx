import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ContactFormData } from '../types';

const CONTACT_WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL || '';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceType: '',
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
        const response = await fetch(CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

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
            interests: [],
            message: '',
            preferredContact: 'either',
          });
        } else {
          throw new Error('Webhook failed');
        }
      } else {
        setSubmitStatus({
          type: 'success',
          message: "Thank you! We'll contact you within 2 hours. You can also reach us directly at hello@antekautomation.co.uk",
        });
        setFormData({
          name: '',
          businessName: '',
          phone: '',
          email: '',
          serviceType: '',
          interests: [],
          message: '',
          preferredContact: 'either',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please email us directly at hello@antekautomation.co.uk',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-off-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            Let's Talk Automation
          </h1>
          <p className="text-lg text-charcoal leading-normal max-w-2xl mx-auto">
            Tell us about your business and we'll show you exactly how AI automation can help you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Email</h3>
            <p className="text-charcoal">hello@antekautomation.co.uk</p>
          </Card>
          <Card>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Phone</h3>
            <p className="text-charcoal">+44 20 1234 5678</p>
          </Card>
          <Card>
            <h3 className="font-black text-xl uppercase text-charcoal mb-2">Location</h3>
            <p className="text-charcoal">London, United Kingdom</p>
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
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as any })}
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
