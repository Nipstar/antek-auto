export interface CityData {
  name: string;
  slug: string;
  region: string;
  coverageAreas: string[];
  localContext: string;
  metaDescription: string;
  heroDescription: string;
  whyChooseUs: {
    title: string;
    description: string;
  }[];
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
    localContext:
      "London's fast-paced business environment demands instant response times. Service businesses across the capital are turning to AI automation to stay competitive in the UK's largest market.",
    metaDescription:
      'AI voice agents & chatbots for London | Answer every call 24/7 | Capture leads & book appointments | Antek Automation UK',
    heroDescription:
      "London businesses can't afford to miss a single call. Our AI voice agents answer every enquiry instantly, book appointments while you're on the job, and handle customer questions 24/7—giving you a competitive edge in the capital's bustling market.",
    whyChooseUs: [
      {
        title: 'Instant Response in a Fast-Paced Market',
        description:
          "London customers expect immediate answers. Our AI assistants respond in seconds, ensuring you never lose business to competitors in the UK's most competitive market.",
      },
      {
        title: 'Cover All 33 London Boroughs',
        description:
          'From Barking to Westminster, our voice agents handle enquiries across Greater London, managing service area questions and booking appointments for any borough you serve.',
      },
      {
        title: 'No Expensive London Office Needed',
        description:
          'Get a professional phone presence without the cost of London premises or receptionist salaries. Our AI handles calls as professionally as a Mayfair office—at a fraction of the price.',
      },
    ],
    testimonial: {
      quote:
        "Operating across London, we were missing calls from Hackney to Hounslow. Now our AI handles everything—we've captured an extra £8,000 in monthly revenue just from areas we couldn't cover before.",
      author: 'Marcus T.',
      business: 'Plumbing Services, East London',
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
    localContext:
      "As the UK's second city, Birmingham's diverse business community needs efficient communication systems. From Jewellery Quarter startups to established Midlands enterprises, AI automation is transforming how local businesses operate.",
    metaDescription:
      'AI voice agents & chatbots for Birmingham | Never miss a call again | Serve all West Midlands 24/7 | Antek Automation UK',
    heroDescription:
      "Birmingham's thriving service sector demands reliable call handling. Our intelligent voice agents manage your calls across the West Midlands, from Sutton Coldfield to Solihull—ensuring every customer gets instant attention whilst you focus on delivering quality work.",
    whyChooseUs: [
      {
        title: 'Serve the Entire West Midlands',
        description:
          'From Birmingham city centre to surrounding boroughs, our AI handles service area enquiries and books jobs across the region without you lifting a finger.',
      },
      {
        title: 'Support Midlands Business Growth',
        description:
          "Birmingham's business landscape is booming. Scale your operations without hiring extra staff—our voice agents grow with your business at no additional cost.",
      },
      {
        title: '24/7 Coverage for Shift Workers',
        description:
          'Many Birmingham businesses operate outside 9-5. Our AI ensures enquiries from night shifts, early mornings, and weekends are captured whilst traditional offices are closed.',
      },
    ],
    testimonial: {
      quote:
        'Covering Erdington to Edgbaston meant constant phone interruptions. Now our AI handles initial enquiries, books estimates, and texts me the details. Game changer for a small Birmingham outfit like ours.',
      author: 'Saj P.',
      business: 'Electrical Contractor, Birmingham',
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
    localContext:
      "Manchester's reputation as a hub for innovation extends to its service businesses. From MediaCityUK to the Northern Quarter, forward-thinking companies are adopting AI to stay ahead in the Northwest's most dynamic market.",
    metaDescription:
      'AI voice agents & chatbots for Manchester | Handle calls from Greater Manchester 24/7 | Capture every lead | Antek Automation UK',
    heroDescription:
      "Greater Manchester's service businesses need to move fast. Our AI voice agents handle calls from Salford to Stockport, answer questions about your services instantly, and book appointments whilst you're busy—helping you serve the entire city region efficiently.",
    whyChooseUs: [
      {
        title: "Match Manchester's Innovation Spirit",
        description:
          "The city that led the Industrial Revolution now leads in AI adoption. Join Manchester businesses embracing automation to deliver faster, smarter customer service.",
      },
      {
        title: 'Cover All 10 Greater Manchester Boroughs',
        description:
          'From Bolton to Tameside, our voice agents understand Greater Manchester geography, handle service area questions, and book jobs across the entire city region.',
      },
      {
        title: 'Compete with Bigger Firms',
        description:
          'Give your small Manchester business the phone system of a large corporation. Professional call handling that makes you sound established—without the overheads.',
      },
    ],
    testimonial: {
      quote:
        'We serve all of Greater Manchester but were only answering calls from one area at a time. The AI picks up everything now—even sorts urgent jobs from routine bookings. Brilliant kit.',
      author: 'Lee W.',
      business: 'Heating Engineer, Trafford',
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
    localContext:
      "Leeds combines traditional Yorkshire work ethic with modern business innovation. Service businesses from Headingley to Hunslet are discovering how AI automation helps them do more with less—typical Yorkshire efficiency.",
    metaDescription:
      'AI voice agents & chatbots for Leeds | Answer calls 24/7 | Serve all West Yorkshire | Antek Automation UK',
    heroDescription:
      "Leeds businesses pride themselves on reliability and hard graft. Our AI voice agents embody these values—answering every call, handling bookings professionally, and working round the clock so you can focus on delivering top-quality service across West Yorkshire.",
    whyChooseUs: [
      {
        title: 'Yorkshire Value for Money',
        description:
          "Get professional call handling at a price that makes sense. No fancy London overheads—just efficient AI that works as hard as you do, delivering proper value.",
      },
      {
        title: 'Serve All Leeds Districts',
        description:
          'From city centre to Chapel Allerton, our AI knows Leeds geography inside out. Handles service area questions and books appointments across all LS postcodes.',
      },
      {
        title: 'Professional Without the Cost',
        description:
          "Sound like a big Leeds firm without the big Leeds overheads. Our voice agents give you city centre professionalism at small business prices.",
      },
    ],
    testimonial: {
      quote:
        "I'm out in Roundhay one minute, Pudsey the next. Missing calls was costing me jobs. Now the AI books everything in, texts me the details, and I just turn up. Spot on.",
      author: 'David H.',
      business: 'Joiner, Leeds',
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
    localContext:
      "Liverpool's entrepreneurial spirit is legendary. From waterfront businesses to local service providers, Merseyside companies are embracing AI to deliver the rapid, friendly service that Scousers expect.",
    metaDescription:
      'AI voice agents & chatbots for Liverpool | Handle calls across Merseyside 24/7 | Never miss business again | Antek Automation UK',
    heroDescription:
      "Liverpool businesses are known for their warm, personal service. Our AI voice agents combine that friendly approach with never-miss reliability—handling calls across Merseyside, booking appointments, and ensuring every customer feels valued, even when you're busy on site.",
    whyChooseUs: [
      {
        title: 'Friendly, Professional Service',
        description:
          "Scousers appreciate good service. Our AI delivers warm, helpful responses that match Liverpool's reputation for friendliness—answering questions and booking jobs with genuine care.",
      },
      {
        title: 'Cover All Merseyside',
        description:
          'From Liverpool city centre to Crosby and beyond, our voice agents handle service area enquiries across the entire Merseyside region, ensuring you never miss local work.',
      },
      {
        title: 'Always Available for Customers',
        description:
          "Liverpool moves fast. Our AI ensures customers get instant responses whether they call at lunchtime or midnight—capturing business 24/7 whilst you're off the clock.",
      },
    ],
    testimonial: {
      quote:
        'Covering jobs from Anfield to Allerton meant the phone never stopped. The AI handles first contact now, books the diary, and I only get bothered for emergencies. Magic.',
      author: 'Tommy L.',
      business: 'Locksmith, Liverpool',
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
    localContext:
      "Scotland's largest city leads the nation in business innovation. Glasgow service businesses from the Merchant City to the West End are adopting AI to handle their growing customer base whilst maintaining the personal touch the city is famous for.",
    metaDescription:
      'AI voice agents & chatbots for Glasgow | Answer calls 24/7 across Scotland | Capture every customer | Antek Automation UK',
    heroDescription:
      "Glasgow's service sector thrives on reliability and straight-talking. Our AI voice agents deliver both—managing calls across the city, answering customer questions clearly, and booking appointments whilst you're focused on the work. No fuss, just results.",
    whyChooseUs: [
      {
        title: "Scotland's Biggest City Covered",
        description:
          "From Finnieston to the East End, our AI handles Glasgow's geography. Service area questions answered instantly, appointments booked across all G postcodes.",
      },
      {
        title: 'Straight-Talking Service',
        description:
          'Glaswegians appreciate clear, honest communication. Our voice agents deliver exactly that—no waffle, just helpful answers and efficient booking.',
      },
      {
        title: 'Scale Without Growing Overheads',
        description:
          'Grow your Glasgow business without hiring extra staff. Our AI handles increased call volume automatically, letting you take on more work profitably.',
      },
    ],
    testimonial: {
      quote:
        "Working across Glasgow meant missing half my calls. The AI's been brilliant—handles enquiries from the West End and Southside, books everything in. Lets me focus on the actual graft.",
      author: 'Stuart M.',
      business: 'Painter & Decorator, Glasgow',
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
    localContext:
      'Newcastle and the wider Northeast are experiencing a business renaissance. Service companies across Tyne and Wear are modernising operations with AI, combining traditional Geordie work ethic with cutting-edge technology.',
    metaDescription:
      'AI voice agents & chatbots for Newcastle | Handle calls across Northeast 24/7 | Book appointments automatically | Antek Automation UK',
    heroDescription:
      "Tyne and Wear businesses know the importance of being reliable and approachable. Our AI voice agents deliver on both fronts—handling calls from Newcastle to North Shields, answering questions in a friendly manner, and booking jobs whilst you're grafting on site.",
    whyChooseUs: [
      {
        title: 'Cover the Whole Northeast',
        description:
          'From Newcastle city centre to Gateshead and beyond, our AI handles service enquiries across Tyne and Wear, ensuring you capture work throughout the region.',
      },
      {
        title: 'Friendly, Approachable Service',
        description:
          "Geordies are famous for being canny and friendly. Our voice agents match that approach—helpful, warm responses that make customers feel welcome whilst efficiently booking their jobs.",
      },
      {
        title: 'Affordable for Northeast Businesses',
        description:
          'Get professional phone handling without London prices. Our AI delivers top-quality service at rates that make sense for Northeast companies.',
      },
    ],
    testimonial: {
      quote:
        "Serving Jesmond to Gateshead meant the phone was ringing constantly. The AI's canny as owt—handles bookings, answers the daft questions, and texts me what I need to know. Proper job.",
      author: 'Craig D.',
      business: 'Roofer, Newcastle',
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
    localContext:
      "Hampshire's diverse business landscape—from coastal cities to rural market towns—demands flexible, reliable communication systems. Service businesses across the county are turning to AI automation to manage their growing customer base efficiently.",
    metaDescription:
      'AI voice agents & chatbots for Hampshire | Cover all Hampshire 24/7 | Never miss customer calls | Antek Automation UK',
    heroDescription:
      "Hampshire businesses serve a wide geographic area, from Portsmouth's waterfront to Winchester's historic streets. Our AI voice agents handle calls across the county, answer customer questions instantly, and book appointments whilst you're on the road—ensuring no opportunity is missed.",
    whyChooseUs: [
      {
        title: 'Cover All Hampshire Districts',
        description:
          'From Southampton to Basingstoke, Portsmouth to Winchester, our AI understands Hampshire geography and handles service area enquiries across the entire county seamlessly.',
      },
      {
        title: 'Perfect for Multi-Location Coverage',
        description:
          "Serving both coastal cities and inland towns? Our voice agents manage enquiries from all areas, booking jobs efficiently whether customers call from Fareham or Farnborough.",
      },
      {
        title: 'Professional Service, Local Understanding',
        description:
          'Get the reliability and professionalism Hampshire customers expect, with AI that understands local areas, postcodes, and service needs—without expensive office overheads.',
      },
    ],
    testimonial: {
      quote:
        'Covering Southampton to Winchester meant missing calls while driving between jobs. The AI handles everything now—books appointments, answers service area questions, and I just get text notifications. Absolute game changer for covering Hampshire.',
      author: 'James R.',
      business: 'Landscaping Services, Hampshire',
    },
  },
};

export const getCityData = (slug: string): CityData | undefined => {
  return cities[slug];
};

export const getAllCities = (): CityData[] => {
  return Object.values(cities);
};
