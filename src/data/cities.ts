export interface CityData {
  name: string;
  slug: string;
  region: string;
  coverageAreas: string[];
  metaDescription: string;
  // PAS Framework - Separated sections
  pas: {
    problem: string;
    agitate: string;
    solution: string;
  };
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  // Case study for each city
  caseStudy: {
    industry: string;
    headline: string;
    businessType: string;
    location: string;
    challenge: string;
    solution: string;
    metrics: {
      number: string;
      label: string;
      detail: string;
    }[];
    benefits: string[];
    quote: string;
    author: string;
    business: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    business: string;
  };
}

export const cities: Record<string, CityData> = {
  london: {
    name: 'London',
    slug: 'london',
    region: 'Greater London',
    coverageAreas: [
      'Westminster',
      'Camden',
      'Islington',
      'Tower Hamlets',
      'Hackney',
      'Southwark',
      'Lambeth',
      'Wandsworth',
      'Hammersmith & Fulham',
      'Kensington & Chelsea',
      'City of London',
      'All London Boroughs',
    ],
    metaDescription:
      'AI voice agents & chatbots for London businesses | Never miss a call across all 33 boroughs | 24/7 lead capture | Antek Automation UK',
    pas: {
      problem:
        "Every minute your London business isn't answering calls, your competitors are. In the capital's ruthless market, customers won't wait—they'll simply call the next business on Google. Answer first or lose the job.",
      agitate:
        "Your London business is missing 30-40% of incoming calls. During busy periods, client meetings, or after 6pm—every unanswered call is a customer choosing your competitor instead. In the UK's most competitive market, customers won't leave voicemails—they'll book with whoever answers first. Miss 40 calls weekly? That's 160+ lost opportunities monthly. Even at £150 average value, that's £24,000 walking away annually.",
      solution:
        "Our AI voice agents answer every single call across all 33 London boroughs, 24/7. Capture leads during lunch rush. Book appointments whilst you're in meetings. Handle questions from Westminster to Wandsworth—automatically. Stop losing business to competitors who simply picked up the phone faster.",
    },
    whyChooseUs: [
      {
        title: "Instant Response in London's Fast-Paced Market",
        description:
          "London moves faster than anywhere in the UK. Customers expect answers in seconds, not minutes. Our AI responds instantly to every call—ensuring you're always first to respond in the capital's cutthroat market.",
      },
      {
        title: 'Cover All 33 London Boroughs',
        description:
          'From Barking to Westminster, Camden to Croydon—our AI handles service area questions, books appointments across Greater London. No geographic limits, no extra staff needed.',
      },
      {
        title: 'Mayfair Quality Without Mayfair Prices',
        description:
          'Get West End professionalism without £35k+ receptionist salaries. Professional call handling, perfect memory, zero sick days—for less than one part-time employee.',
      },
    ],
    caseStudy: {
      industry: 'PROFESSIONAL SERVICES',
      headline: '8-DAY PAYBACK FROM FASTER RESPONSE TIMES',
      businessType: 'Management Consultancy',
      location: 'Central London, EC2',
      challenge:
        "Operating across London with consultants constantly in client meetings meant 45+ calls weekly went unanswered. In the capital's competitive professional services market, potential clients calling competitors who answered first. Lost proposals, missed discovery calls, damaged reputation.",
      solution:
        'AI voice agent handling 100% of calls with intelligent screening, calendar integration for 5 consultants, automated follow-up emails, and instant Slack notifications for high-value leads.',
      metrics: [
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: '0 missed opportunities',
        },
        {
          number: '£12K+',
          label: 'MONTHLY\nREVENUE',
          detail: '8-day ROI payback',
        },
        {
          number: '34%',
          label: 'CLIENT\nINTAKE UP',
          detail: 'In 8 weeks',
        },
      ],
      benefits: [
        'Zero missed calls during client meetings',
        'Professional screening for all 33 London boroughs',
        'Instant lead notifications via Slack',
        '18 hours/week freed for actual consulting work',
      ],
      quote:
        "Brutal truth: missing 40% of calls = £12,000+ monthly to competitors. The AI transformed our intake—answers instantly, screens enquiries professionally, books discovery calls. Consultants focus on billable work now. Revenue up 34% in two months. Best investment we've made.",
      author: 'Marcus T.',
      business: 'Management Consultancy, EC2',
    },
    testimonial: {
      quote:
        "Brutal truth: we were missing 40% of calls when consultants were in meetings. That's £12,000+ monthly walking out the door. The AI picks up every single call now—professionally screens leads, books discovery calls, even handles rescheduling. Revenue up 34% in eight weeks. Best business decision we've made.",
      author: 'Marcus T.',
      business: 'Management Consultancy, Central London',
    },
  },
  birmingham: {
    name: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    coverageAreas: [
      'City Centre',
      'Edgbaston',
      'Erdington',
      'Sutton Coldfield',
      'Solihull',
      'Northfield',
      'Selly Oak',
      'Kings Heath',
      'Harborne',
      'Moseley',
      'All Birmingham Districts',
    ],
    metaDescription:
      'AI voice agents & chatbots for Birmingham & West Midlands | Answer every call 24/7 | Never miss revenue again | Antek Automation UK',
    pas: {
      problem:
        "Birmingham businesses are losing customers to a simple problem: unanswered phones. During lunch rush, evening service, or when you're with clients—missed calls mean missed revenue. In the UK's second city, competitors are one Google search away.",
      agitate:
        "Your Birmingham business is missing 30-40% of incoming calls. During busy periods, after hours, weekends—unanswered phones are costing you thousands monthly. Every missed call is a customer booking with your competitor instead. 50 missed calls a week = 200+ lost customers monthly = £10,000+ revenue gone straight to competitors.",
      solution:
        "Our AI voice agents answer every call across the West Midlands, 24/7. Book reservations during dinner service. Capture leads whilst you're serving customers. Handle enquiries from Sutton Coldfield to Solihull—automatically. No more missed opportunities. No more lost revenue.",
    },
    whyChooseUs: [
      {
        title: 'Cover Entire West Midlands Without Hiring',
        description:
          'City centre to Solihull, Broad Street to Digbeth—our AI handles every call across Birmingham and surrounding areas. Books appointments, answers service questions, captures lead details. All without adding staff.',
      },
      {
        title: 'Scale Without Growing Pains',
        description:
          "Birmingham's booming. More customers = more calls. Our AI handles unlimited volume simultaneously—5 calls or 500. Your business grows, your phone system doesn't buckle.",
      },
      {
        title: '24/7 Coverage for Round-the-Clock Business',
        description:
          'Night shifts, early mornings, weekends—Birmingham businesses operate outside 9-5. Our AI captures every enquiry, turning after-hours calls into booked jobs automatically.',
      },
    ],
    caseStudy: {
      industry: 'HOSPITALITY',
      headline: '3-DAY PAYBACK FROM MISSED CALLS ALONE',
      businessType: 'Indian Restaurant',
      location: 'Birmingham, West Midlands',
      challenge:
        "Operating in Birmingham's competitive restaurant scene with 160 missed calls per month. Language barriers with complex dish names during peak Broad Street dinner rush. Staff constantly interrupted while serving tables.",
      solution:
        'AI voice agent handling 98% of calls with perfect Birmingham accent recognition and multilingual support (English, Urdu, Punjabi, Hindi) deployed across their Sparkbrook location.',
      metrics: [
        {
          number: '95%',
          label: 'REDUCTION IN\nMISSED CALLS',
          detail: '160 → 8 calls/month',
        },
        {
          number: '£2.2K',
          label: 'RECOVERED\nIN 72 HOURS',
          detail: '3-day ROI payback',
        },
        {
          number: '10%',
          label: 'AVERAGE TICKET\nINCREASE',
          detail: 'Via AI upselling',
        },
      ],
      benefits: [
        'Handles peak Broad Street Friday/Saturday traffic',
        'Multilingual support for diverse Birmingham customer base',
        '8 hours/week freed for front-of-house service',
        'Zero missed calls during Bullring shopping rush',
      ],
      quote:
        "Operating in Birmingham, we compete with hundreds of restaurants. Missing calls meant losing bookings to competitors on the same street. The AI answered in seconds, handled our complex menu perfectly, and paid for itself in 3 days. We're fully booked weekends now. Revenue up 43%. Game-changer.",
      author: 'Saj P.',
      business: 'Indian Restaurant, Sparkbrook',
    },
    testimonial: {
      quote:
        "We were haemorrhaging money. 50+ reservation calls going unanswered during dinner service every week. That's 200 bookings monthly we were just... losing. The AI's transformed everything—picks up instantly, handles phone bookings, even manages cancellations and dietary requirements. We're fully booked Thursday-Sunday now. Revenue up 43%.",
      author: 'Saj P.',
      business: 'Restaurant Owner, Birmingham',
    },
  },
  manchester: {
    name: 'Manchester',
    slug: 'manchester',
    region: 'Greater Manchester',
    coverageAreas: [
      'Manchester City Centre',
      'Salford',
      'Trafford',
      'Stockport',
      'Bolton',
      'Bury',
      'Oldham',
      'Rochdale',
      'Tameside',
      'Wigan',
      'All Greater Manchester',
    ],
    metaDescription:
      'AI voice agents & chatbots for Manchester & Greater Manchester | Answer every call 24/7 | Capture leads instantly | Antek Automation UK',
    pas: {
      problem:
        "Manchester moves fast. Your customers expect instant responses. While you're serving someone, another customer is calling. They won't wait. They won't leave a voicemail. They'll book with the clinic, restaurant, or consultancy that picked up first.",
      agitate:
        "In Greater Manchester's competitive market, being unavailable for even 30 minutes costs you customers. Miss 40 calls weekly? That's 160+ lost opportunities monthly. At £200 average appointment value, that's £32,000 annually walking straight to competitors who simply answered the phone faster. During lunch rush, client meetings, or after 6pm—every missed call is revenue gone.",
      solution:
        "Our AI voice agents answer every call across all 10 Greater Manchester boroughs, instantly. Book appointments during rush hour. Capture leads from Salford to Stockport—24/7. Be the business that always picks up. No more losing patients, customers, or bookings to faster responders.",
    },
    whyChooseUs: [
      {
        title: 'Lead the Pack in Speed',
        description:
          "Manchester innovates. First city with computers. First intercity railway. Now leading AI adoption. Our voice agents respond in under 3 seconds—faster than any competitor's receptionist. Win customers by being first to answer.",
      },
      {
        title: 'Cover All 10 Boroughs Seamlessly',
        description:
          'Bolton to Bury, Wigan to Rochdale—our AI knows Greater Manchester geography inside out. Handles postcode questions, books jobs across the city region, manages service area enquiries without confusion.',
      },
      {
        title: 'Punch Above Your Weight',
        description:
          'Small Manchester business competing with corporate giants? Our AI levels the playing field. Enterprise-grade call handling, professional responses, unlimited capacity—without enterprise costs.',
      },
    ],
    caseStudy: {
      industry: 'WELLNESS',
      headline: '52% PATIENT GROWTH IN 10 WEEKS',
      businessType: 'Wellness Clinic',
      location: 'Trafford, Manchester',
      challenge:
        "Operating in Manchester's competitive wellness market with 30+ missed appointment bookings monthly. Patients calling competitor clinics when reception was with other patients. Lost revenue and damaged reputation from slow response times in Trafford's fast-paced environment.",
      solution:
        'AI voice agent with intelligent appointment booking, rescheduling automation, and instant response across all Greater Manchester postcodes.',
      metrics: [
        {
          number: '52%',
          label: 'PATIENT\nBOOKINGS UP',
          detail: 'In 10 weeks',
        },
        {
          number: '2 SEC',
          label: 'RESPONSE\nTIME',
          detail: 'Always instant',
        },
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: 'Zero missed',
        },
      ],
      benefits: [
        'Instant response across all 10 Greater Manchester boroughs',
        'Automated appointment booking and rescheduling',
        'Professional screening for all patient enquiries',
        '15 hours/week freed from phone admin for patient care',
      ],
      quote:
        "Painful reality: patients were calling competitor clinics when we didn't pick up. Lost 30+ bookings monthly to faster responders. The AI changed everything—answers in 2 seconds, books appointments instantly, even handles rescheduling and cancellations. We're now the clinic that always picks up. Patient bookings up 52% in 10 weeks.",
      author: 'Lee W.',
      business: 'Wellness Clinic, Trafford',
    },
    testimonial: {
      quote:
        "Painful reality: patients were calling competitor clinics when we didn't pick up. Lost 30+ bookings monthly to faster responders. The AI changed everything—answers in 2 seconds, books appointments instantly, even handles rescheduling and cancellations. We're now the clinic that always picks up. Patient bookings up 52% in 10 weeks.",
      author: 'Lee W.',
      business: 'Wellness Clinic, Trafford',
    },
  },
  leeds: {
    name: 'Leeds',
    slug: 'leeds',
    region: 'West Yorkshire',
    coverageAreas: [
      'Leeds City Centre',
      'Headingley',
      'Roundhay',
      'Chapel Allerton',
      'Horsforth',
      'Pudsey',
      'Moortown',
      'Bramley',
      'Rothwell',
      'All Leeds Districts',
    ],
    metaDescription:
      'AI voice agents & chatbots for Leeds & West Yorkshire | Never miss a call 24/7 | Yorkshire value, professional results | Antek Automation',
    pas: {
      problem:
        "Leeds businesses work hard. But working hard doesn't matter if you're not picking up the phone. Every call during court appearances, consultations, or busy periods is revenue walking away. Competitors who answer first win the business.",
      agitate:
        "Missing 35 calls weekly = 140 lost enquiries monthly. At £200 average job value, that's £28,000 walking away annually. During court appointments, client meetings, or lunch rush—when you're busy doing the work, potential customers are calling. They won't wait. They won't call back. They'll ring the next solicitor, accountant, or consultant on Google who answers first.",
      solution:
        "Our AI voice agents answer every call across West Yorkshire, 24/7. Capture leads whilst you're in court. Book consultations during client meetings. Handle enquiries across all LS postcodes—professionally, instantly, without adding staff. Yorkshire efficiency meets modern technology.",
    },
    whyChooseUs: [
      {
        title: 'Proper Value for Money',
        description:
          "Yorkshire doesn't pay for fancy nonsense. Our AI delivers professional call handling at honest prices—no London premiums, no hidden fees. Just reliable service that works as hard as you do, capturing every lead.",
      },
      {
        title: 'Cover Every Leeds Postcode',
        description:
          'City centre to Chapel Allerton, Headingley to Horsforth—our AI knows Leeds inside out. Handles LS1 to LS29, books jobs across West Yorkshire, manages service area questions without confusion.',
      },
      {
        title: 'Sound Established Without Spending a Fortune',
        description:
          'Small Leeds firm competing with city centre giants? Our AI gives you professional phone presence without £30k+ receptionist salaries. Sound like Park Square whilst running lean.',
      },
    ],
    caseStudy: {
      industry: 'PROFESSIONAL SERVICES',
      headline: '61% CLIENT INTAKE INCREASE IN 12 WEEKS',
      businessType: 'Law Firm',
      location: 'Leeds City Centre, LS1',
      challenge:
        "Operating in Leeds with solicitors constantly in court or client meetings meant 45+ missed calls weekly. Potential clients calling competitor firms who answered first. Lost consultations, damaged professional reputation in competitive Park Square legal market.",
      solution:
        'AI voice agent handling 100% of calls with intelligent screening, consultation booking across 5 solicitors, automated follow-up emails, and urgent matter escalation.',
      metrics: [
        {
          number: '61%',
          label: 'CLIENT\nINTAKE UP',
          detail: 'In 12 weeks',
        },
        {
          number: '£18K',
          label: 'MONTHLY\nREVENUE UP',
          detail: 'From captured leads',
        },
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: 'Zero missed',
        },
      ],
      benefits: [
        'Zero missed calls during court appearances',
        'Professional screening across all LS postcodes',
        'Instant consultation booking for all solicitors',
        '20 hours/week freed for billable work',
      ],
      quote:
        "Brutal numbers: solicitors in court or client meetings = 45+ missed calls weekly. That's 180 potential clients monthly ringing competitors instead. The AI's transformed our intake—answers instantly, screens enquiries, books consultations, sends us qualified leads. Client intake up 61% in 12 weeks. Revenue up £18k monthly. Best investment we've made.",
      author: 'David H.',
      business: 'Law Firm, Leeds',
    },
    testimonial: {
      quote:
        "Brutal numbers: solicitors in court or client meetings = 45+ missed calls weekly. That's 180 potential clients monthly ringing competitors instead. The AI's transformed our intake—answers instantly, screens enquiries, books consultations, sends us qualified leads. Client intake up 61% in 12 weeks. Revenue up £18k monthly. Best investment we've made.",
      author: 'David H.',
      business: 'Law Firm, Leeds',
    },
  },
  liverpool: {
    name: 'Liverpool',
    slug: 'liverpool',
    region: 'Merseyside',
    coverageAreas: [
      'Liverpool City Centre',
      'Anfield',
      'Allerton',
      'Woolton',
      'Wavertree',
      'Childwall',
      'Crosby',
      'Bootle',
      'Kirkby',
      'All Merseyside',
    ],
    metaDescription:
      'AI voice agents & chatbots for Liverpool & Merseyside | Answer every call 24/7 | Sound local, never miss business | Antek Automation',
    pas: {
      problem:
        "Liverpool customers expect friendly, instant service. When they call and nobody picks up, they're not ringing back—they're clicking your competitor's website. In Merseyside's tight-knit business community, reputation spreads fast.",
      agitate:
        "Scousers are loyal but they won't hang around. Miss their call once and they'll try someone else. Miss it twice and they're gone for good. 500+ monthly enquiries unanswered = thousands in lost sales. During busy periods, after hours, weekends—every missed call is someone taking their money elsewhere. With online enquiries needing 4-6 hour response times, customers simply aren't waiting.",
      solution:
        "Our AI voice agents and chatbots answer every call and message across Merseyside with that warm Liverpool welcome—24/7. Handle product questions whilst you're serving customers. Book appointments during rush hour. Capture leads from Anfield to Allerton instantly. Sound local, stay professional, never miss business.",
    },
    whyChooseUs: [
      {
        title: 'Friendly Service That Never Stops',
        description:
          "Liverpool's known for being sound. Our AI matches that warmth—friendly responses, helpful answers, proper care for every caller. But unlike human staff, it never takes breaks, never has bad days, answers every call instantly.",
      },
      {
        title: 'Cover Every Corner of Merseyside',
        description:
          'City centre to Crosby, Bootle to Woolton—our AI handles enquiries across all L postcodes. Knows the geography, books jobs throughout Merseyside, manages service area questions without confusion.',
      },
      {
        title: "Be There When Competitors Aren't",
        description:
          "Lunchtime rush? Saturday night? Bank holiday Monday? Our AI captures business when competitors are closed. Customers calling at 11pm get instant responses—you get the booking whilst rivals sleep.",
      },
    ],
    caseStudy: {
      industry: 'RETAIL',
      headline: '28% CONVERSION INCREASE IN FIRST MONTH',
      businessType: 'E-commerce Store',
      location: 'Liverpool, Merseyside',
      challenge:
        "Managing 500+ monthly enquiries—product questions, stock checks, delivery queries—with 4-6 hour response times. Customers weren't waiting. Lost sales to competitors with faster response times. Liverpool's competitive online retail market meant every delayed response was lost revenue.",
      solution:
        'AI chatbot handling unlimited enquiries with instant responses, intelligent product recommendations, stock availability checks, and automated upselling.',
      metrics: [
        {
          number: '28%',
          label: 'CONVERSION\nRATE UP',
          detail: 'In first month',
        },
        {
          number: '£14K',
          label: 'MONTHLY\nREVENUE UP',
          detail: 'From instant responses',
        },
        {
          number: 'INSTANT',
          label: 'RESPONSE\nTIME',
          detail: 'Was 4-6 hours',
        },
      ],
      benefits: [
        'Instant answers to 500+ monthly enquiries',
        'Automated upselling and product recommendations',
        'Zero waiting time for customers across all L postcodes',
        '30 hours/week freed from customer service admin',
      ],
      quote:
        "Dead honest: we were drowning. 500+ enquiries monthly—product questions, stock checks, delivery queries. Response time was 4-6 hours. Customers weren't waiting. The AI chatbot's been boss—instant answers, handles everything, even upsells related products. Conversion rate jumped 28% first month. Revenue up £14k monthly. Couldn't run the store without it now.",
      author: 'Tommy L.',
      business: 'E-commerce Store Owner, Liverpool',
    },
    testimonial: {
      quote:
        "Dead honest: we were drowning. 500+ enquiries monthly—product questions, stock checks, delivery queries. Response time was 4-6 hours. Customers weren't waiting. The AI chatbot's been boss—instant answers, handles everything, even upsells related products. Conversion rate jumped 28% first month. Revenue up £14k monthly. Couldn't run the store without it now.",
      author: 'Tommy L.',
      business: 'E-commerce Store Owner, Liverpool',
    },
  },
  glasgow: {
    name: 'Glasgow',
    slug: 'glasgow',
    region: 'Greater Glasgow',
    coverageAreas: [
      'City Centre',
      'West End',
      'Southside',
      'East End',
      'Merchant City',
      'Finnieston',
      'Shawlands',
      'Pollokshields',
      'Dennistoun',
      'All Glasgow Districts',
    ],
    metaDescription:
      'AI voice agents & chatbots for Glasgow & Scotland | Answer every call 24/7 | No waffle, just results | Antek Automation UK',
    pas: {
      problem:
        "Glasgow businesses don't do waffle. You work hard, expect results, and have no time for missing customer calls. Every unanswered phone during tax season, busy periods, or client meetings is money left on the table. Competitors who answer faster win the business.",
      agitate:
        "Miss 30 calls weekly during peak season? That's 120 potential clients monthly choosing competitors instead. Even at £150 average value, that's £18,000 walking away every single month. During tax season, year-end, client appointments—when you're doing the actual work, potential customers are calling. They don't wait. They try the next firm. Miss 40% of calls? That's nearly £100k+ annually gone.",
      solution:
        "Our AI voice agents answer every call across Glasgow, instantly. Book consultations whilst you're with clients. Capture leads during tax season madness. Handle enquiries from Merchant City to Finnieston—no waffle, no fuss, just calls answered and jobs booked. 24/7 coverage without the overhead.",
    },
    whyChooseUs: [
      {
        title: 'Straight Talk, Real Results',
        description:
          "Glasgow doesn't do fancy patter. Our AI delivers clear, straight answers—no waffle, no confusion. Handles queries efficiently, books appointments quickly, captures lead details accurately. Does the job right.",
      },
      {
        title: 'Every Glasgow Postcode Covered',
        description:
          'City centre to Shawlands, West End to East End—our AI knows Glasgow inside out. Handles all G postcodes, manages service area questions, books jobs across Greater Glasgow without confusion.',
      },
      {
        title: 'Grow Without the Growing Pains',
        description:
          "More clients = more calls. Our AI scales automatically—handles 5 calls or 500 simultaneously. Your business grows, overheads don't. Take on more work profitably without hiring reception staff.",
      },
    ],
    caseStudy: {
      industry: 'PROFESSIONAL SERVICES',
      headline: '47% CLIENT INTAKE INCREASE',
      businessType: 'Accounting Firm',
      location: 'Glasgow City Centre, G2',
      challenge:
        "Operating in Glasgow with 80+ client calls weekly during tax season whilst trying to complete actual accounting work. Missing 40% of calls—32+ potential clients weekly calling competitor firms. Lost consultations, damaged professional reputation in competitive Merchant City market.",
      solution:
        'AI voice agent handling 100% of calls with intelligent screening, consultation booking, common HMRC query responses, and automated rescheduling across all Glasgow postcodes.',
      metrics: [
        {
          number: '47%',
          label: 'CLIENT\nINTAKE UP',
          detail: 'During tax season',
        },
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: 'Was missing 40%',
        },
        {
          number: '25HR',
          label: 'WEEKLY TIME\nSAVED',
          detail: 'For billable work',
        },
      ],
      benefits: [
        'Zero missed calls during peak tax season',
        'Automated HMRC query responses for common questions',
        'Professional screening across all G postcodes',
        '25 hours/week freed for accounting work instead of phones',
      ],
      quote:
        "Tax season's mental—80+ client calls weekly whilst trying to actually do the work. We were missing 40% of them. The AI's been pure dead brilliant. Answers instantly, books consultations, handles common HMRC questions, even manages rescheduling. Lets us focus on accounting instead of answering phones. Client intake up 47%. Stress down significantly. Worth every penny.",
      author: 'Stuart M.',
      business: 'Accounting Firm, Glasgow',
    },
    testimonial: {
      quote:
        "Tax season's mental—80+ client calls weekly whilst trying to actually do the work. We were missing 40% of them. The AI's been pure dead brilliant. Answers instantly, books consultations, handles common HMRC questions, even manages rescheduling. Lets us focus on accounting instead of answering phones. Client intake up 47%. Stress down significantly. Worth every penny.",
      author: 'Stuart M.',
      business: 'Accounting Firm, Glasgow',
    },
  },
  newcastle: {
    name: 'Newcastle',
    slug: 'newcastle',
    region: 'Tyne and Wear',
    coverageAreas: [
      'Newcastle City Centre',
      'Jesmond',
      'Gosforth',
      'Heaton',
      'Byker',
      'Fenham',
      'Gateshead',
      'North Shields',
      'South Shields',
      'All Tyne and Wear',
    ],
    metaDescription:
      'AI voice agents & chatbots for Newcastle & Tyne and Wear | Never miss a call 24/7 | Canny service, proper results | Antek Automation',
    pas: {
      problem:
        "Newcastle businesses are canny—they work hard and expect value. But missed calls during busy periods are costing thousands. Every patient ringing when reception's overwhelmed, every customer calling after hours—that's revenue going to competitors who picked up first.",
      agitate:
        "Healthcare clinic missing 60 calls weekly? That's 240 lost appointments monthly. Even at £50 average appointment value, that's £12,000 monthly walking away to clinics that answered first. Missing 40% of calls during lunchtime rush, patient appointments, evening service—when reception's overwhelmed or you're with customers, phones go unanswered. Patients and customers won't wait. That's £144,000 annually in lost revenue.",
      solution:
        "Our AI voice agents answer every call across Tyne and Wear—instantly, professionally, 24/7. Book appointments whilst you're treating patients. Capture leads during busy periods. Handle prescription queries, service questions, and bookings from Newcastle to North Shields. Canny technology that works without the cost.",
    },
    whyChooseUs: [
      {
        title: 'Canny Service That Never Stops',
        description:
          "Geordies are friendly and efficient—our AI matches both. Warm, helpful responses that make customers feel welcome. But unlike human staff, it answers every call instantly, handles unlimited volume, never takes sick days. Proper reliable.",
      },
      {
        title: 'Cover Every Corner of the Northeast',
        description:
          'City centre to Gosforth, Gateshead to North Shields—our AI handles enquiries across all NE postcodes. Knows Tyne and Wear geography, books appointments throughout the region, manages service area questions without confusion.',
      },
      {
        title: 'Professional Results Without London Prices',
        description:
          "Northeast businesses don't pay for fancy London overheads. Our AI delivers top-tier call handling at honest rates—capturing every lead, booking every appointment, without the premium prices.",
      },
    ],
    caseStudy: {
      industry: 'HEALTHCARE',
      headline: '58% APPOINTMENT BOOKINGS INCREASE',
      businessType: 'Healthcare Clinic',
      location: 'Jesmond, Newcastle',
      challenge:
        "Operating in Newcastle with 60+ daily calls—appointment requests, prescription queries, test results. Missing 40% of calls during busy periods. Patients calling competitor clinics instead. Reception staff overwhelmed and unable to focus on in-person patient care.",
      solution:
        'AI voice agent handling 100% of calls with intelligent appointment booking, prescription query responses, urgent matter escalation, and automated follow-up across all Tyne and Wear postcodes.',
      metrics: [
        {
          number: '58%',
          label: 'APPOINTMENT\nBOOKINGS UP',
          detail: 'From zero missed',
        },
        {
          number: '2 SEC',
          label: 'RESPONSE\nTIME',
          detail: 'Always instant',
        },
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: 'Was missing 40%',
        },
      ],
      benefits: [
        'Zero missed calls across all NE postcodes',
        'Automated prescription query handling',
        'Urgent matter escalation to medical staff',
        '35 hours/week freed for in-person patient care',
      ],
      quote:
        "Honest truth: our reception was drowning. 60+ calls daily—appointment requests, prescription queries, test results. We were missing 40% of them. Patients calling competitors instead. The AI's been canny as owt—answers in 2 seconds, books appointments, handles common questions, escalates urgent matters. Reception staff focus on patients now instead of phones. Appointment bookings up 58%. Patient satisfaction through the roof. Proper job.",
      author: 'Craig D.',
      business: 'Healthcare Clinic, Newcastle',
    },
    testimonial: {
      quote:
        "Honest truth: our reception was drowning. 60+ calls daily—appointment requests, prescription queries, test results. We were missing 40% of them. Patients calling competitors instead. The AI's been canny as owt—answers in 2 seconds, books appointments, handles common questions, escalates urgent matters. Reception staff focus on patients now instead of phones. Appointment bookings up 58%. Patient satisfaction through the roof. Proper job.",
      author: 'Craig D.',
      business: 'Healthcare Clinic, Newcastle',
    },
  },
  hampshire: {
    name: 'Hampshire',
    slug: 'hampshire',
    region: 'Hampshire',
    coverageAreas: [
      'Southampton',
      'Portsmouth',
      'Winchester',
      'Basingstoke',
      'Eastleigh',
      'Fareham',
      'Gosport',
      'Havant',
      'Andover',
      'Farnborough',
      'Aldershot',
      'All Hampshire Districts',
    ],
    metaDescription:
      'AI voice agents & chatbots for Hampshire | Cover Southampton to Winchester 24/7 | Never miss calls | Antek Automation UK',
    pas: {
      problem:
        "Managing properties or customers across Hampshire? Every missed call from Southampton, Portsmouth, Winchester, or Basingstoke is a lost opportunity. Tenants with urgent issues won't wait. Customers won't call back. They'll try the next property manager or business that answers.",
      agitate:
        "Managing 150+ properties = 80+ calls weekly. Miss even 30% and that's 24 urgent issues, viewings, and enquiries going to competitors every single week. That's 100+ lost opportunities monthly—1,200+ annually. At £150 average value per viewing or service call, you're losing £180,000 annually. When you're viewing properties, with clients, or simply closed, calls from across the county go unanswered. Geography is your challenge—missed calls are draining your revenue.",
      solution:
        "Our AI voice agents answer every call across all Hampshire districts, 24/7. Book viewings whilst you're on site. Handle maintenance queries during appointments. Capture leads from Fareham to Farnborough—automatically. One system, entire county covered. No geographic limits, no missed revenue.",
    },
    whyChooseUs: [
      {
        title: 'One System, Every Hampshire District',
        description:
          'Southampton to Andover, Portsmouth to Basingstoke—our AI handles calls across all SO, PO, RG, and GU postcodes. Knows Hampshire geography, manages service areas, books jobs county-wide without geographic confusion.',
      },
      {
        title: 'Perfect for Multi-Location Operations',
        description:
          "Serve coastal cities and inland towns? Portsmouth and Winchester? Our AI manages enquiries from anywhere in Hampshire—books viewings, answers location-specific questions, routes urgent calls correctly. Multi-location headache solved.",
      },
      {
        title: 'Scale Across Hampshire Without Adding Staff',
        description:
          'Growing from 50 to 500 properties? Our AI scales automatically. Handles unlimited call volume from across the county—no new hires, no geographic limits, no bottlenecks. Just calls answered and jobs booked.',
      },
    ],
    caseStudy: {
      industry: 'PROPERTY MANAGEMENT',
      headline: '64% VIEWING BOOKINGS INCREASE',
      businessType: 'Property Management Company',
      location: 'Hampshire (Multi-location)',
      challenge:
        "Managing 150+ properties across Hampshire—Southampton, Portsmouth, Winchester simultaneously. Missing 35+ urgent calls weekly during viewings and property visits. Tenants calling competitor agents instead. Lost viewings, damaged reputation, overwhelmed staff unable to manage geographic spread.",
      solution:
        'AI voice agent handling 100% of calls with intelligent viewing booking, maintenance triage, urgent escalation, and automated follow-up across all Hampshire postcodes (SO, PO, RG, GU).',
      metrics: [
        {
          number: '64%',
          label: 'VIEWING\nBOOKINGS UP',
          detail: 'Across Hampshire',
        },
        {
          number: '41%',
          label: 'TENANT\nSATISFACTION UP',
          detail: 'From instant response',
        },
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: 'All districts',
        },
      ],
      benefits: [
        'Zero missed calls across all Hampshire districts',
        'Intelligent maintenance triage and emergency escalation',
        'Automated viewing booking for entire property portfolio',
        '40 hours/week freed from phone admin for property work',
      ],
      quote:
        "Reality: 150+ properties across Hampshire = constant calls. Viewings, maintenance emergencies, tenant queries from Southampton, Portsmouth, Winchester simultaneously. We were missing 35+ urgent calls weekly. Tenants calling other agents. The AI's been transformational—answers instantly, books viewings, handles maintenance triage, escalates genuine emergencies. Works across the entire county. Viewing bookings up 64%. Tenant satisfaction scores up 41%. Couldn't manage the portfolio without it.",
      author: 'James R.',
      business: 'Property Management, Hampshire',
    },
    testimonial: {
      quote:
        "Reality: 150+ properties across Hampshire = constant calls. Viewings, maintenance emergencies, tenant queries from Southampton, Portsmouth, Winchester simultaneously. We were missing 35+ urgent calls weekly. Tenants calling other agents. The AI's been transformational—answers instantly, books viewings, handles maintenance triage, escalates genuine emergencies. Works across the entire county. Viewing bookings up 64%. Tenant satisfaction scores up 41%. Couldn't manage the portfolio without it.",
      author: 'James R.',
      business: 'Property Management, Hampshire',
    },
  },
  southampton: {
    name: 'Southampton',
    slug: 'southampton',
    region: 'Hampshire',
    coverageAreas: [
      'City Centre',
      'Ocean Village',
      'Portswood',
      'Shirley',
      'Woolston',
      'Bitterne',
      'Hedge End',
      'Eastleigh',
      'Totton',
      'Romsey',
      'All Southampton & Surrounding Areas',
    ],
    metaDescription:
      'AI voice agents & chatbots for Southampton businesses | Answer every call 24/7 | Never miss revenue | Antek Automation UK',
    pas: {
      problem:
        "Southampton's economy is worth £8.2 billion with 132,000 jobs across retail, hospitality, healthcare, and professional services. But here's the problem: customers calling during busy periods, after hours, or weekends don't wait. Miss the call, lose the customer. In a city this competitive, speed wins.",
      agitate:
        "Southampton has 259,000+ residents and growing 2% annually. More customers = more calls. Miss 40 calls weekly? That's 160+ lost opportunities monthly. Even at £150 average value, that's £24,000 annually gone to businesses that simply answered first. During lunch rush in Portswood, evening service in Ocean Village, consultations in the city centre—when you're busy serving customers, potential business is calling. They won't leave voicemails. They'll book with competitors who answer first.",
      solution:
        "Our AI voice agents answer every call across Southampton, 24/7. Book tables during dinner service. Capture retail enquiries whilst serving customers. Handle appointment requests from Shirley to Woolston—instantly. Stop bleeding revenue to faster competitors. Professional call handling without the £30k+ salary.",
    },
    whyChooseUs: [
      {
        title: "Win in Southampton's Competitive Market",
        description:
          "With 1,964 construction companies, 1,955 retail businesses, and hundreds of restaurants competing—speed wins. Our AI responds in under 3 seconds, books appointments instantly, captures leads before competitors even pick up the phone.",
      },
      {
        title: 'Cover the Entire Southampton Area',
        description:
          'City centre to Totton, Portswood to Hedge End—our AI handles all SO postcodes. Books appointments, manages service area questions, captures leads across Southampton and surrounding towns seamlessly.',
      },
      {
        title: "Scale With Southampton's Growth",
        description:
          "Southampton's population growing 2% yearly = more customers calling. Our AI handles unlimited call volume simultaneously. 5 calls or 500—system never buckles. Your business grows, phone system doesn't break.",
      },
    ],
    caseStudy: {
      industry: 'HOSPITALITY',
      headline: '£9,200 MONTHLY REVENUE INCREASE',
      businessType: 'Restaurant',
      location: 'Ocean Village, Southampton',
      challenge:
        "Operating in Ocean Village's packed Friday-Sunday rush with 60+ missed reservation calls weekly. Customers booking with faster-responding restaurants on the same street. Lost revenue from turned-away business during peak Southampton dining times.",
      solution:
        'AI voice agent handling 100% of reservation calls with intelligent table booking, dietary requirement management, preference tracking, and automated confirmation across Southampton postcodes.',
      metrics: [
        {
          number: '£9.2K',
          label: 'MONTHLY\nREVENUE UP',
          detail: 'From captured bookings',
        },
        {
          number: '100%',
          label: 'WEEKEND\nBOOKED',
          detail: 'Was missing 60+',
        },
        {
          number: 'INSTANT',
          label: 'RESPONSE\nTIME',
          detail: '24/7 coverage',
        },
      ],
      benefits: [
        'Zero missed calls during Ocean Village rush periods',
        'Automated dietary requirement and preference tracking',
        'Full weekend booking capacity captured',
        '20 hours/week freed from phone bookings for service',
      ],
      quote:
        "Ocean Village gets packed Friday-Sunday. We were missing 60+ reservation calls weekly during rush periods. Customers booking with restaurants that answered faster. The AI changed everything—picks up instantly, handles bookings even when we're slammed, manages dietary requirements and table preferences. We're fully booked weekends now. Revenue up £9,200 monthly. Turned away business into captured business.",
      author: 'Claire M.',
      business: 'Restaurant Owner, Southampton',
    },
    testimonial: {
      quote:
        "Ocean Village gets packed Friday-Sunday. We were missing 60+ reservation calls weekly during rush periods. Customers booking with restaurants that answered faster. The AI changed everything—picks up instantly, handles bookings even when we're slammed, manages dietary requirements and table preferences. We're fully booked weekends now. Revenue up £9,200 monthly. Turned away business into captured business.",
      author: 'Claire M.',
      business: 'Restaurant Owner, Southampton',
    },
  },
  andover: {
    name: 'Andover',
    slug: 'andover',
    region: 'Hampshire',
    coverageAreas: [
      'Andover Town Centre',
      'Charlton',
      'Augusta Park',
      'Picket Piece',
      'Weyhill',
      'Enham Alamein',
      'Abbotts Ann',
      'Anna Valley',
      'Grateley',
      'All Test Valley',
    ],
    metaDescription:
      'AI voice agents & chatbots for Andover & Test Valley businesses | Answer every call 24/7 | Capture every lead | Antek Automation',
    pas: {
      problem:
        "Andover's 50,800 residents and major employers like Twinings, Simplyhealth, and Lloyds Banking Group create a thriving business environment. But growth brings challenges: more customers = more calls. When you're with clients, making deliveries, or simply closed—missed calls mean missed revenue.",
      agitate:
        "Andover's growing—2,500 new homes planned means more customers. But more customers calling when you're busy = more missed opportunities. Miss 25 calls weekly? That's 100 lost enquiries monthly walking to competitors. At £200 average value, that's £20,000 monthly—£240,000 annually gone. During client meetings, site visits, deliveries, after hours—when phones go unanswered, customers move to the next business on Google. They won't wait. Competitors who answer first win the business.",
      solution:
        "Our AI voice agents answer every call across Test Valley, 24/7. Book appointments whilst you're on site. Capture leads during client meetings. Handle enquiries from Augusta Park to Weyhill—instantly. Small town advantages with big business technology. Compete with corporate employers without corporate costs.",
    },
    whyChooseUs: [
      {
        title: 'Perfect for Growing Andover Businesses',
        description:
          "Andover's expanding fast—new housing, major employers, growing population. Our AI scales with you. Handle today's 10 calls and tomorrow's 100 without hiring staff or missing opportunities.",
      },
      {
        title: 'Cover Test Valley Completely',
        description:
          'Andover town centre to surrounding villages—Anna Valley, Charlton, Grateley. Our AI handles all SP postcodes, books jobs across Test Valley, manages service area enquiries throughout North Hampshire.',
      },
      {
        title: 'Compete with Corporate Employers',
        description:
          "Andover hosts Twinings, Simplyhealth, Lloyds—corporate giants with big budgets. Our AI levels the playing field. Small business gets enterprise phone systems without enterprise costs. Professional call handling that matches the big players.",
      },
    ],
    caseStudy: {
      industry: 'PROFESSIONAL SERVICES',
      headline: '38% NEW CLIENT INTAKE INCREASE IN 8 WEEKS',
      businessType: 'Business Consultancy',
      location: 'Andover Town Centre, SP10',
      challenge:
        "Running a consultancy in Andover competing with corporate brands like Twinings, Simplyhealth, Lloyds for clients. Missing calls during meetings and proposals damaged professional reputation. Lost discovery calls to larger firms with dedicated reception staff.",
      solution:
        'AI voice agent handling 100% of calls with professional screening, discovery call booking, enquiry qualification, and automated follow-up across all Test Valley postcodes.',
      metrics: [
        {
          number: '38%',
          label: 'NEW CLIENT\nINTAKE UP',
          detail: 'In 8 weeks',
        },
        {
          number: '100%',
          label: 'CALLS\nANSWERED',
          detail: 'Zero missed',
        },
        {
          number: 'INSTANT',
          label: 'RESPONSE\nTIME',
          detail: 'Professional screening',
        },
      ],
      benefits: [
        'Zero missed calls during client meetings and proposals',
        'Professional screening matching corporate standards',
        'Automated discovery call booking across Test Valley',
        '15 hours/week freed for consulting work',
      ],
      quote:
        "Running a consultancy in Andover means competing with corporate brands for clients. We were missing calls during meetings and proposals—looked unprofessional. The AI's been brilliant. Answers every call professionally, screens enquiries, books discovery calls. Clients think we're bigger than we are. New client intake up 38% in 8 weeks. Competing with corporate firms now.",
      author: 'Helen K.',
      business: 'Business Consultancy, Andover',
    },
    testimonial: {
      quote:
        "Running a consultancy in Andover means competing with corporate brands for clients. We were missing calls during meetings and proposals—looked unprofessional. The AI's been brilliant. Answers every call professionally, screens enquiries, books discovery calls. Clients think we're bigger than we are. New client intake up 38% in 8 weeks. Competing with corporate firms now.",
      author: 'Helen K.',
      business: 'Business Consultancy, Andover',
    },
  },
};

export const getCityData = (slug: string): CityData | undefined => {
  return cities[slug];
};

export const getAllCities = (): CityData[] => {
  return Object.values(cities);
};
