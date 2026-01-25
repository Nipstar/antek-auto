export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  meta: string;
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  results: {
    title: string;
    metrics: Array<{
      number: string;
      label: string;
      detail: string;
    }>;
    benefits: string[];
  };
  testimonial: {
    quote: string;
    author: string;
    business: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'restaurant',
    industry: 'HOSPITALITY',
    headline: '3-DAY PAYBACK FROM MISSED CALLS ALONE',
    meta: 'Indian Restaurant | Manchester, UK',
    challenge: {
      title: 'The Challenge:',
      description: '160 missed calls per month. Language barriers with complex dish names. Staff interrupted constantly during peak hours.'
    },
    solution: {
      title: 'The Solution:',
      description: 'AI voice agent handling 98% of calls with perfect accent recognition and multilingual support (English, Urdu, Hindi).'
    },
    results: {
      title: '📊 THE RESULTS',
      metrics: [
        {
          number: '95%',
          label: 'REDUCTION IN\nMISSED CALLS',
          detail: '160 → 8 calls/month'
        },
        {
          number: '£2.2K',
          label: 'RECOVERED\nIN 72 HOURS',
          detail: '3-day ROI payback'
        },
        {
          number: '10%',
          label: 'AVERAGE TICKET\nINCREASE',
          detail: 'Via AI upselling'
        }
      ],
      benefits: [
        '98% accuracy handling Urdu, Hindi & complex dish names',
        '8 hours/week freed for customer service',
        '24/7 ordering without human oversight'
      ]
    },
    testimonial: {
      quote: 'We thought it\'d take a month to see any ROI. It took three days. The AI doesn\'t just understand "Biryani"—it knows regional styles and asks better questions than we do.',
      author: 'Atif R., Owner',
      business: 'Deccan Grill'
    }
  },
  {
    id: 'financial-services',
    industry: 'FINANCE',
    headline: '9% CONTAINMENT INCREASE = MILLIONS SAVED',
    meta: 'Leading UK Financial Institution',
    challenge: {
      title: 'The Challenge:',
      description: 'Legacy IVR frustrating customers. Long wait times. Limited self-service capabilities. 15 years of tuning hit a ceiling.'
    },
    solution: {
      title: 'The Solution:',
      description: 'Conversational AI platform replacing DTMF menus with natural language understanding across phone banking services.'
    },
    results: {
      title: '📊 THE RESULTS',
      metrics: [
        {
          number: '9%',
          label: 'INCREASED IVR\nCONTAINMENT',
          detail: 'Millions in savings'
        },
        {
          number: '97%',
          label: 'SEMANTIC\nACCURACY',
          detail: 'Intent recognition'
        },
        {
          number: '92%',
          label: 'TASK COMPLETION\nRATE',
          detail: 'First-call resolution'
        }
      ],
      benefits: [
        '#1 customer satisfaction ranking in industry',
        'New self-service capabilities deployed independently',
        'Broke 15-year containment ceiling'
      ]
    },
    testimonial: {
      quote: 'Natural language gave us opportunities we never thought possible. We broke the glass ceiling on containment and improved customer experience simultaneously.',
      author: 'Operations Director',
      business: 'Leading UK Financial Institution'
    }
  },
  {
    id: 'cleaning-services',
    industry: 'OPERATIONS',
    headline: '£5,000/MONTH SAVED ON ADMIN ALONE',
    meta: 'Commercial Cleaning | Kent, UK',
    challenge: {
      title: 'The Challenge:',
      description: '20+ hours weekly on admin tasks. Invoice chasing, booking confirmations, calendar updates. Small team drowning in repetitive work.'
    },
    solution: {
      title: 'The Solution:',
      description: 'n8n workflow automation connecting CRM, calendar, invoicing, and communication tools into seamless automated processes.'
    },
    results: {
      title: '📊 THE RESULTS',
      metrics: [
        {
          number: '90%',
          label: 'REDUCTION IN\nADMIN TIME',
          detail: '20hrs → 2hrs/week'
        },
        {
          number: '£5K+',
          label: 'MONTHLY LABOR\nCOST SAVINGS',
          detail: 'Permanent reduction'
        },
        {
          number: '167%',
          label: 'CLIENT GROWTH',
          detail: '15 → 40 clients, same team'
        }
      ],
      benefits: [
        '100% elimination of data entry errors',
        '18 hours/week freed for client acquisition',
        'Automated invoice delivery and follow-up'
      ]
    },
    testimonial: {
      quote: 'We were spending 20+ hours every week on admin—invoice chasing, booking emails, calendar updates. Antek built n8n workflows that eliminated 90% of it. Now data flows between systems automatically. Game-changer for a small team with big plans.',
      author: 'James K., Operations Manager',
      business: 'CleanRight Kent'
    }
  }
];
