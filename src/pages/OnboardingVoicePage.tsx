import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SEOHead } from '../components/SEOHead';
import { CONSTANTS } from '../constants';

const WEBHOOK_URL = 'https://antekauto.app.n8n.cloud/webhook/onboard-voice';

interface FormData {
  // Section 1: Business Basics
  businessName: string;
  tradingName: string;
  industry: string;
  serviceArea: string;
  businessType: string;
  // Section 2: Call Handling Goals
  goals: string[];
  successOutcome: string;
  // Section 3: Call Volume & Timing
  callVolume: string;
  callTiming: string;
  daysOpen: string;
  openingTime: string;
  closingTime: string;
  // Section 4: Greeting & Brand Voice
  greeting: string;
  tone: string;
  introduction: string;
  // Section 5: Common Call Reasons
  commonReasons: string;
  highPriority: string;
  blockCalls: string;
  // Section 6: Booking & Scheduling
  bookingBehavior: string;
  appointmentLength: string;
  blackoutTimes: string;
  calendarSystem: string;
  // Section 7: Information to Collect
  collectInfo: string[];
  mustHaveQuestions: string;
  // Section 8: Call Routing & Escalation
  transferCalls: string;
  transferPhone: string;
  messageRecipient: string;
  deliveryMethod: string[];
  // Section 9: Emergency Handling
  emergencyDefinition: string;
  emergencyHandling: string;
  emergencyPhone: string;
  emergencySMS: string;
  // Section 10: Compliance & Preferences
  avoidPhrases: string;
  legalWording: string;
  badFit: string;
  // Section 11: Examples & References
  goodCallExample: string;
  badCallExample: string;
  competitorNotes: string;
  // Section 12: Final Confirmation
  oneThing: string;
  additionalInfo: string;
  // Contact Details
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

const initialFormData: FormData = {
  businessName: '',
  tradingName: '',
  industry: '',
  serviceArea: '',
  businessType: '',
  goals: [],
  successOutcome: '',
  callVolume: '',
  callTiming: '',
  daysOpen: '',
  openingTime: '',
  closingTime: '',
  greeting: '',
  tone: '',
  introduction: '',
  commonReasons: '',
  highPriority: '',
  blockCalls: '',
  bookingBehavior: '',
  appointmentLength: '',
  blackoutTimes: '',
  calendarSystem: '',
  collectInfo: [],
  mustHaveQuestions: '',
  transferCalls: '',
  transferPhone: '',
  messageRecipient: '',
  deliveryMethod: [],
  emergencyDefinition: '',
  emergencyHandling: '',
  emergencyPhone: '',
  emergencySMS: '',
  avoidPhrases: '',
  legalWording: '',
  badFit: '',
  goodCallExample: '',
  badCallExample: '',
  competitorNotes: '',
  oneThing: '',
  additionalInfo: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
};

const inputClass = 'w-full border-3 border-charcoal bg-white px-4 py-3 text-base focus:border-terracotta focus:outline-none text-charcoal';
const labelClass = 'font-black text-charcoal mb-3 block uppercase text-base';
const sectionCardClass = 'bg-off-white border-2 border-warm-beige p-6 md:p-8 mb-10';
const sectionHeadingClass = 'font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-8 border-l-4 border-terracotta pl-4';
const optionLabelClass = 'flex items-center gap-4 cursor-pointer min-h-[44px]';
const optionTextClass = 'text-charcoal text-base';


export function OnboardingVoicePage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Set noindex meta tag — this page should not be indexed by search engines
  useEffect(() => {
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (robotsMeta) {
        robotsMeta.remove();
      }
    };
  }, []);

  const handleTextChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleRadioChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: 'goals' | 'collectInfo' | 'deliveryMethod', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(i => i !== value)
        : [...(prev[field] as string[]), value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'website_onboarding_voice',
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Form submitted successfully! We\'ll be in touch shortly to set up your voice receptionist.',
        });
        setFormData(initialFormData);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `Something went wrong. Please try again or email us at ${CONSTANTS.CONTACT_EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-off-white py-20 md:py-28">
      <SEOHead
        title="Voice Receptionist Onboarding | Antek Automation"
        description="Complete this form to set up your AI voice receptionist. Tell us about your business, call handling goals, and preferences."
        path="/onboarding/voice-receptionist"
      />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="font-black text-4xl md:text-5xl uppercase tracking-tight-xl text-charcoal mb-6">
            Voice Receptionist Onboarding
          </h1>
          <p className="text-lg text-charcoal leading-normal max-w-2xl mx-auto">
            Complete this form to set up your AI voice receptionist. The more detail you provide, the better we can tailor the experience to your business.
          </p>
        </div>

        <Card>
          {submitStatus.type && (
            <div
              className={`p-5 border-3 border-charcoal mb-10 ${
                submitStatus.type === 'success' ? 'bg-success-green' : 'bg-peach'
              }`}
            >
              <p className={`font-bold text-base ${submitStatus.type === 'success' ? 'text-off-white' : 'text-charcoal'}`}>
                {submitStatus.message}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Section 1: Business Basics */}
            <div id="business-basics" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>1. Business Basics</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Business Name <span className="text-terracotta">*</span></label>
                  <input type="text" required value={formData.businessName} onChange={handleTextChange('businessName')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Trading Name (if different)</label>
                  <input type="text" value={formData.tradingName} onChange={handleTextChange('tradingName')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Industry / Service Type <span className="text-terracotta">*</span></label>
                  <input type="text" required value={formData.industry} onChange={handleTextChange('industry')} className={inputClass} placeholder="e.g. plumbing, cleaning, legal, dental" />
                </div>
                <div>
                  <label className={labelClass}>Service Area <span className="text-terracotta">*</span></label>
                  <input type="text" required value={formData.serviceArea} onChange={handleTextChange('serviceArea')} className={inputClass} placeholder="Towns / postcodes covered" />
                </div>
                <div>
                  <label className={labelClass}>Business Type <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'sole_trader', label: 'Sole trader' },
                      { value: 'partnership', label: 'Partnership' },
                      { value: 'limited_company', label: 'Limited company' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="businessType" required checked={formData.businessType === option.value} onChange={() => handleRadioChange('businessType', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Call Handling Goals */}
            <div id="call-goals" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>2. Call Handling Goals</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>What do you want the voice receptionist to do? <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'answer_all_calls', label: 'Answer all calls' },
                      { value: 'capture_enquiries', label: 'Capture new enquiries' },
                      { value: 'book_appointments', label: 'Book appointments/jobs' },
                      { value: 'qualify_leads', label: 'Qualify leads' },
                      { value: 'filter_emergencies', label: 'Filter emergencies' },
                      { value: 'take_messages', label: 'Take messages only' },
                      { value: 'route_calls', label: 'Route calls to staff' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="checkbox" checked={formData.goals.includes(option.value)} onChange={() => handleCheckboxChange('goals', option.value)} className="accent-terracotta w-5 h-5 shrink-0 border-3 border-charcoal" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Main Success Outcome <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'fewer_missed_calls', label: 'Fewer missed calls' },
                      { value: 'more_booked_jobs', label: 'More booked jobs' },
                      { value: 'better_qualified_leads', label: 'Better-qualified leads' },
                      { value: 'less_interruption', label: 'Less interruption for staff' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="successOutcome" required checked={formData.successOutcome === option.value} onChange={() => handleRadioChange('successOutcome', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Call Volume & Timing */}
            <div id="call-volume" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>3. Call Volume & Timing</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Rough Call Volume Per Day <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'under_10', label: 'Under 10' },
                      { value: '10-30', label: '10\u201330' },
                      { value: '30-60', label: '30\u201360' },
                      { value: '60+', label: '60+' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="callVolume" required checked={formData.callVolume === option.value} onChange={() => handleRadioChange('callVolume', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>When Should Calls Be Answered? <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'business_hours', label: 'Business hours only' },
                      { value: 'after_hours', label: 'After-hours only' },
                      { value: '24_7', label: '24/7' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="callTiming" required checked={formData.callTiming === option.value} onChange={() => handleRadioChange('callTiming', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Days Open <span className="text-terracotta">*</span></label>
                  <input type="text" required value={formData.daysOpen} onChange={handleTextChange('daysOpen')} className={inputClass} placeholder="e.g. Monday to Friday" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Opening Time <span className="text-terracotta">*</span></label>
                    <input type="time" required value={formData.openingTime} onChange={handleTextChange('openingTime')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Closing Time <span className="text-terracotta">*</span></label>
                    <input type="time" required value={formData.closingTime} onChange={handleTextChange('closingTime')} className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Greeting & Brand Voice */}
            <div id="brand-voice" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>4. Greeting & Brand Voice</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>How Should the Agent Answer Calls? <span className="text-terracotta">*</span></label>
                  <textarea required value={formData.greeting} onChange={handleTextChange('greeting')} className={`${inputClass} resize-none`} rows={3} placeholder='e.g. "Thanks for calling Smith & Co Plumbing, how can I help?"' />
                </div>
                <div>
                  <label className={labelClass}>Preferred Tone <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'professional', label: 'Professional' },
                      { value: 'neutral', label: 'Neutral' },
                      { value: 'friendly_direct', label: 'Friendly but direct' },
                      { value: 'brief_efficient', label: 'Very brief and efficient' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="tone" required checked={formData.tone === option.value} onChange={() => handleRadioChange('tone', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Should the Agent: <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'virtual_assistant', label: 'Introduce itself as a virtual assistant?' },
                      { value: 'just_business', label: 'Just answer as the business?' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="introduction" required checked={formData.introduction === option.value} onChange={() => handleRadioChange('introduction', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Common Call Reasons */}
            <div id="call-reasons" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>5. Common Call Reasons</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>What Do Customers Usually Call About? <span className="text-terracotta">*</span></label>
                  <textarea required value={formData.commonReasons} onChange={handleTextChange('commonReasons')} className={`${inputClass} resize-none`} rows={3} placeholder="e.g. quotes, bookings, emergencies, prices, follow-ups" />
                </div>
                <div>
                  <label className={labelClass}>Which Calls Are High Priority?</label>
                  <textarea value={formData.highPriority} onChange={handleTextChange('highPriority')} className={`${inputClass} resize-none`} rows={3} placeholder="e.g. no heating, flooding, same-day legal issue" />
                </div>
                <div>
                  <label className={labelClass}>Are There Calls You Want to Block or Deflect?</label>
                  <textarea value={formData.blockCalls} onChange={handleTextChange('blockCalls')} className={`${inputClass} resize-none`} rows={3} placeholder="e.g. sales calls, recruiters, suppliers, wrong numbers" />
                </div>
              </div>
            </div>

            {/* Section 6: Booking & Scheduling */}
            <div id="booking" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>6. Booking & Scheduling</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Do You Want the Agent To: <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'book_appointments', label: 'Book appointments' },
                      { value: 'request_datetime', label: 'Request preferred date/time only' },
                      { value: 'pass_to_staff', label: 'Pass booking requests to staff' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="bookingBehavior" required checked={formData.bookingBehavior === option.value} onChange={() => handleRadioChange('bookingBehavior', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Typical Appointment/Job Length</label>
                  <div className="space-y-4">
                    {[
                      { value: '30_minutes', label: '30 minutes' },
                      { value: '1_hour', label: '1 hour' },
                      { value: 'varies', label: 'Varies' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="appointmentLength" checked={formData.appointmentLength === option.value} onChange={() => handleRadioChange('appointmentLength', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Any Blackout Days or Times the Agent Should Never Book?</label>
                  <textarea value={formData.blackoutTimes} onChange={handleTextChange('blackoutTimes')} className={`${inputClass} resize-none`} rows={3} placeholder="e.g. Lunch 1-2pm, no Sundays" />
                </div>
                <div>
                  <label className={labelClass}>Do You Use an Existing Calendar System?</label>
                  <div className="space-y-4">
                    {[
                      { value: 'cal.com', label: 'cal.com' },
                      { value: 'google_calendar', label: 'Google Calendar' },
                      { value: 'outlook', label: 'Outlook' },
                      { value: 'none', label: 'None' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="calendarSystem" checked={formData.calendarSystem === option.value} onChange={() => handleRadioChange('calendarSystem', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Information to Collect */}
            <div id="info-collect" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>7. Information to Collect from Callers</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>What Details Should Always Be Captured? <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'name', label: 'Name' },
                      { value: 'phone', label: 'Phone number' },
                      { value: 'email', label: 'Email' },
                      { value: 'address', label: 'Address' },
                      { value: 'postcode', label: 'Postcode' },
                      { value: 'reason', label: 'Reason for calling' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="checkbox" checked={formData.collectInfo.includes(option.value)} onChange={() => handleCheckboxChange('collectInfo', option.value)} className="accent-terracotta w-5 h-5 shrink-0 border-3 border-charcoal" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Any Must-Have Questions Before Accepting a Job?</label>
                  <textarea value={formData.mustHaveQuestions} onChange={handleTextChange('mustHaveQuestions')} className={`${inputClass} resize-none`} rows={3} placeholder="e.g. property type, urgency, budget range" />
                </div>
              </div>
            </div>

            {/* Section 8: Call Routing & Escalation */}
            <div id="routing" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>8. Call Routing & Escalation</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Should the Agent Ever Transfer Calls to a Human? <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'yes_business_hours', label: 'Yes (during business hours)' },
                      { value: 'no_message_only', label: 'No, message only' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="transferCalls" required checked={formData.transferCalls === option.value} onChange={() => handleRadioChange('transferCalls', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {formData.transferCalls === 'yes_business_hours' && (
                  <div>
                    <label className={labelClass}>Phone Number to Transfer To</label>
                    <input type="tel" value={formData.transferPhone} onChange={handleTextChange('transferPhone')} className={inputClass} placeholder="e.g. 07700 900123 or +44 7700 900123" />
                    <p className="text-sm text-charcoal/70 mt-2 italic">Include country code if needed (e.g. +44 for UK)</p>
                  </div>
                )}
                <div>
                  <label className={labelClass}>Who Should Receive Messages? <span className="text-terracotta">*</span></label>
                  <input type="text" required value={formData.messageRecipient} onChange={handleTextChange('messageRecipient')} className={inputClass} placeholder="e.g. Owner, Office staff, Specific role/team" />
                </div>
                <div>
                  <label className={labelClass}>How Should Messages Be Delivered? <span className="text-terracotta">*</span></label>
                  <div className="space-y-4">
                    {[
                      { value: 'sms', label: 'SMS' },
                      { value: 'email', label: 'Email' },
                      { value: 'crm', label: 'CRM' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="checkbox" checked={formData.deliveryMethod.includes(option.value)} onChange={() => handleCheckboxChange('deliveryMethod', option.value)} className="accent-terracotta w-5 h-5 shrink-0 border-3 border-charcoal" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: Emergency Handling */}
            <div id="emergency" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>9. Emergency Handling</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>What Counts as an Emergency?</label>
                  <textarea value={formData.emergencyDefinition} onChange={handleTextChange('emergencyDefinition')} className={`${inputClass} resize-none`} rows={3} placeholder="e.g. gas smell, no heating, flooding" />
                </div>
                <div>
                  <label className={labelClass}>For Emergencies, Should the Agent:</label>
                  <div className="space-y-4">
                    {[
                      { value: 'transfer_immediately', label: 'Transfer immediately' },
                      { value: 'flag_urgent_sms', label: 'Flag as urgent and send SMS' },
                      { value: 'collect_details_only', label: 'Collect details only' },
                    ].map(option => (
                      <label key={option.value} className={optionLabelClass}>
                        <input type="radio" name="emergencyHandling" checked={formData.emergencyHandling === option.value} onChange={() => handleRadioChange('emergencyHandling', option.value)} className="accent-terracotta w-5 h-5 shrink-0" />
                        <span className={optionTextClass}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {formData.emergencyHandling === 'transfer_immediately' && (
                  <div>
                    <label className={labelClass}>Emergency Transfer Phone Number</label>
                    <input type="tel" value={formData.emergencyPhone} onChange={handleTextChange('emergencyPhone')} className={inputClass} placeholder="e.g. 07700 900456 or +44 7700 900456" />
                    <p className="text-sm text-charcoal/70 mt-2 italic">24/7 contact number for emergency transfers</p>
                  </div>
                )}
                {formData.emergencyHandling === 'flag_urgent_sms' && (
                  <div>
                    <label className={labelClass}>Phone Number for Emergency SMS</label>
                    <input type="tel" value={formData.emergencySMS} onChange={handleTextChange('emergencySMS')} className={inputClass} placeholder="e.g. 07700 900456" />
                    <p className="text-sm text-charcoal/70 mt-2 italic">Mobile number to receive urgent emergency alerts</p>
                  </div>
                )}
              </div>
            </div>

            {/* Section 10: Compliance & Preferences */}
            <div id="compliance" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>10. Compliance & Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Are There Phrases the Agent Should Never Say?</label>
                  <textarea value={formData.avoidPhrases} onChange={handleTextChange('avoidPhrases')} className={`${inputClass} resize-none`} rows={3} />
                </div>
                <div>
                  <label className={labelClass}>Any Legal or Regulatory Wording Required?</label>
                  <textarea value={formData.legalWording} onChange={handleTextChange('legalWording')} className={`${inputClass} resize-none`} rows={3} placeholder="Common in legal, financial, medical" />
                </div>
                <div>
                  <label className={labelClass}>Anything That Would Make This Agent Feel Like a "Bad Fit" for Your Business?</label>
                  <textarea value={formData.badFit} onChange={handleTextChange('badFit')} className={`${inputClass} resize-none`} rows={3} />
                </div>
              </div>
            </div>

            {/* Section 11: Examples & References */}
            <div id="examples" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>11. Examples & References (Optional)</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Do You Have an Example of a Good Call?</label>
                  <textarea value={formData.goodCallExample} onChange={handleTextChange('goodCallExample')} className={`${inputClass} resize-none`} rows={3} />
                </div>
                <div>
                  <label className={labelClass}>Do You Have an Example of a Bad Call?</label>
                  <textarea value={formData.badCallExample} onChange={handleTextChange('badCallExample')} className={`${inputClass} resize-none`} rows={3} />
                </div>
                <div>
                  <label className={labelClass}>Anything Competitors Do That You Like or Hate?</label>
                  <textarea value={formData.competitorNotes} onChange={handleTextChange('competitorNotes')} className={`${inputClass} resize-none`} rows={3} />
                </div>
              </div>
            </div>

            {/* Section 12: Final Confirmation */}
            <div id="final" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>12. Final Confirmation</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>If This Agent Did One Thing Perfectly, What Should It Be? <span className="text-terracotta">*</span></label>
                  <textarea required value={formData.oneThing} onChange={handleTextChange('oneThing')} className={`${inputClass} resize-none`} rows={3} />
                </div>
                <div>
                  <label className={labelClass}>Is There Anything Else We Should Know Before Building the Receptionist?</label>
                  <textarea value={formData.additionalInfo} onChange={handleTextChange('additionalInfo')} className={`${inputClass} resize-none`} rows={3} />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div id="contact" className={sectionCardClass}>
              <h2 className={sectionHeadingClass}>Contact Details</h2>
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Your Name <span className="text-terracotta">*</span></label>
                  <input type="text" required value={formData.contactName} onChange={handleTextChange('contactName')} className={inputClass} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Email <span className="text-terracotta">*</span></label>
                    <input type="email" required value={formData.contactEmail} onChange={handleTextChange('contactEmail')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone <span className="text-terracotta">*</span></label>
                    <input type="tel" required value={formData.contactPhone} onChange={handleTextChange('contactPhone')} className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {submitStatus.type && (
              <div
                className={`p-5 border-3 border-charcoal mb-6 ${
                  submitStatus.type === 'success' ? 'bg-success-green' : 'bg-peach'
                }`}
              >
                <p className={`font-bold text-base ${submitStatus.type === 'success' ? 'text-off-white' : 'text-charcoal'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full text-xl py-5"
              disabled={isSubmitting || formData.goals.length === 0 || formData.collectInfo.length === 0 || formData.deliveryMethod.length === 0}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Questionnaire'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
