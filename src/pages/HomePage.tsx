import { useState, useEffect, Suspense, lazy } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Icon } from '../components/Icon';
import { SEOHead } from '../components/SEOHead';
import { VoiceDemoButton } from '../components/VoiceDemoButton';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function HomePage() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  useEffect(() => {
    const handleOpenVoiceChat = () => {
      setIsVoiceChatOpen(true);
    };

    window.addEventListener('openVoiceChat', handleOpenVoiceChat);
    return () => window.removeEventListener('openVoiceChat', handleOpenVoiceChat);
  }, []);

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.antekautomation.com/#webpage",
    "url": "https://www.antekautomation.com/",
    "name": "Antek Automation | AI Automation Agency UK",
    "alternateName": "Antek AI Automation",
    "headline": "AI Automation Agency UK",
    "alternativeHeadline": "AI That Works for Your Business",
    "abstract": "Official website of Antek Automation, an AI automation agency in the UK.",
    "description": "Antek Automation deploys AI chatbots, voice agents, and workflow automation that work 24/7 to capture leads, book appointments, and grow revenue for businesses across hospitality, professional services, healthcare, and retail by reducing missed calls, slow responses, and administrative burden.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.antekautomation.com/#webpage"
    },
    "accessMode": ["textual", "visual"],
    "inLanguage": "en-GB",
    "keywords": [
      "AI automation agency UK",
      "AI voice agents",
      "AI phone answering service",
      "AI chatbots for businesses",
      "appointment booking automation",
      "lead capture automation",
      "workflow automation",
      "customer support automation",
      "AI receptionist",
      "AI for restaurants",
      "AI for professional services",
      "AI for healthcare clinics",
      "AI for retail businesses",
      "AI for consultancies",
      "Retell AI partner"
    ],
    "image": {
      "@type": "ImageObject",
      "@id": "https://www.antekautomation.com/#logo",
      "url": "https://www.antekautomation.com/logo.svg",
      "contentUrl": "https://www.antekautomation.com/logo.svg",
      "description": "Antek Company Logo",
      "name": "Antek Automation Logo"
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.antekautomation.com/#website",
      "url": "https://www.antekautomation.com/",
      "name": "Antek Automation",
      "inLanguage": "en-GB",
      "publisher": { "@id": "https://www.antekautomation.com/#organization" }
    },
    "mainEntity": {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.antekautomation.com/#organization",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.antekautomation.com/#webpage" },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.antekautomation.com/logo.png",
        "contentUrl": "https://www.antekautomation.com/logo.png",
        "width": 200,
        "height": 62
      },
      "name": "Antek Automation",
      "alternateName": ["Antek AI Automation"],
      "url": "https://www.antekautomation.com/",
      "description": "AI automation agency providing AI chatbots, voice AI phone agents, and workflow automation to businesses across all industries—helping restaurants, consultancies, healthcare, and retail capture leads, book appointments, and handle customer queries 24/7.",
      "email": "hello@antekautomation.com",
      "telephone": "+44-3330-389960",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Chantry House, 38 Chantry Way",
        "addressLocality": "Andover",
        "addressRegion": "Hampshire",
        "postalCode": "SP10 1LZ",
        "addressCountry": "GB"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+44-3330-389960",
          "email": "hello@antekautomation.com",
          "availableLanguage": ["en-GB"],
          "areaServed": "GB"
        }
      ],
      "priceRange": "£500+",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "00:00"
        }
      ],
      "potentialAction": {
        "@type": "ScheduleAction",
        "name": "Book a 30-Minute AI Automation Strategy Call",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://cal.com/antek-automation/30min",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Service",
          "name": "AI Automation Consultation",
          "serviceType": "Automation Strategy"
        }
      },
      "hasMap": "https://www.google.com/maps?q=51.20919060, -1.48037770",
      "areaServed": [
        {
          "@type": "GeoCircle",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Southampton",
            "addressRegion": "Hampshire",
            "postalCode": [
              "SO14", "SO15", "SO16", "SO17", "SO18",
              "SO19", "SO30", "SO31", "SO32", "SO40", "SO50"
            ],
            "addressCountry": "GB"
          }
        },
        {
          "@type": "City",
          "name": "London",
          "sameAs": "https://en.wikipedia.org/wiki/London",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.5074,
            "longitude": -0.1278
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "City",
          "name": "Birmingham",
          "sameAs": "https://en.wikipedia.org/wiki/Birmingham",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.4862,
            "longitude": -1.8904
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "City",
          "name": "Manchester",
          "sameAs": "https://en.wikipedia.org/wiki/Manchester",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.4808,
            "longitude": -2.2426
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "City",
          "name": "Leeds",
          "sameAs": "https://en.wikipedia.org/wiki/Leeds",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.7965,
            "longitude": -1.5477
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "City",
          "name": "Liverpool",
          "sameAs": "https://en.wikipedia.org/wiki/Liverpool",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.4084,
            "longitude": -2.9916
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "City",
          "name": "Glasgow",
          "sameAs": "https://en.wikipedia.org/wiki/Glasgow",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.8642,
            "longitude": -4.2518
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "City",
          "name": "Newcastle upon Tyne",
          "sameAs": "https://en.wikipedia.org/wiki/Newcastle_upon_Tyne",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 54.9783,
            "longitude": -1.6178
          },
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Hampshire",
          "sameAs": "https://en.wikipedia.org/wiki/Hampshire",
          "containedInPlace": {
            "@type": "Country",
            "name": "United Kingdom"
          }
        },
        {
          "@type": "Country",
          "name": "United Kingdom",
          "sameAs": "https://en.wikipedia.org/wiki/United_Kingdom"
        }
      ],
      "knowsAbout": [
        "AI chatbots",
        "Voice AI",
        "Conversational AI",
        "Lead qualification",
        "Appointment booking",
        "Workflow automation",
        "Business process automation"
      ],
      "sameAs": [
        "https://x.com/AntekAutomation",
        "https://www.youtube.com/@AntekAutomation",
        "http://linkedin.com/company/antek-automation",
        "https://www.google.com/search?kgmid=/g/11yt2ybv_c",
        "https://www.google.com/maps?cid=17451278745729112685",
        "https://local.google.com/place?id=17451278745729112685&use=srp"
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://www.antekautomation.com/#founder",
        "name": "Andy Norman",
        "sameAs": ["https://www.linkedin.com/in/andy-norman-ab78443a1"]
      },
      "logo": { "@id": "https://www.antekautomation.com/#logo" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "@id": "https://www.antekautomation.com/#services",
        "name": "Antek Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "@id": "https://www.antekautomation.com/#offer-ai-chatbots",
            "url": "https://www.antekautomation.com/services/ai-chatbots",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.antekautomation.com/#service-ai-chatbots",
              "name": "AI Chatbots",
              "description": "Website chat that qualifies leads, answers FAQs, and books appointments instantly while you focus on delivering service.",
              "serviceType": "AI chatbot deployment and website chat automation",
              "provider": { "@id": "https://www.antekautomation.com/#organization" },
              "areaServed": "GB",
              "audience": { "@type": "BusinessAudience", "name": "UK businesses" },
              "category": [
                {
                  "@type": "DefinedTerm",
                  "@id": "https://www.antekautomation.com/#term-artificial-intelligence",
                  "name": "Artificial intelligence",
                  "alternateName": ["AI"],
                  "url": "https://en.wikipedia.org/wiki/Artificial_intelligence",
                  "sameAs": ["https://en.wikipedia.org/wiki/Artificial_intelligence"],
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Wikipedia",
                    "url": "https://en.wikipedia.org/"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://www.antekautomation.com/#term-conversational-ai",
                  "name": "Conversational AI",
                  "alternateName": ["Dialogue system"],
                  "url": "https://en.wikipedia.org/wiki/Dialogue_system",
                  "sameAs": ["https://en.wikipedia.org/wiki/Dialogue_system"],
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Wikipedia",
                    "url": "https://en.wikipedia.org/"
                  }
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.antekautomation.com/#offer-voice-ai",
            "url": "https://www.antekautomation.com/services/ai-voice-assistants",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.antekautomation.com/#service-voice-ai",
              "name": "AI Voice Assistants",
              "description": "Phone agents that answer calls, take bookings, and handle customer questions with natural conversation 24/7.",
              "serviceType": "AI voice agent call handling and booking automation",
              "provider": { "@id": "https://www.antekautomation.com/#organization" },
              "areaServed": "GB",
              "audience": { "@type": "BusinessAudience", "name": "UK businesses" },
              "category": [
                {
                  "@type": "DefinedTerm",
                  "@id": "https://www.antekautomation.com/#term-artificial-intelligence",
                  "name": "Artificial intelligence",
                  "alternateName": ["AI"],
                  "url": "https://en.wikipedia.org/wiki/Artificial_intelligence",
                  "sameAs": ["https://en.wikipedia.org/wiki/Artificial_intelligence"],
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Wikipedia",
                    "url": "https://en.wikipedia.org/"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://www.antekautomation.com/#term-conversational-ai",
                  "name": "Conversational AI",
                  "alternateName": ["Dialogue system"],
                  "url": "https://en.wikipedia.org/wiki/Dialogue_system",
                  "sameAs": ["https://en.wikipedia.org/wiki/Dialogue_system"],
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Wikipedia",
                    "url": "https://en.wikipedia.org/"
                  }
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://www.antekautomation.com/#term-voice-agent",
                  "name": "Voice agent",
                  "alternateName": ["Virtual assistant", "Voice assistant"],
                  "url": "https://en.wikipedia.org/wiki/Virtual_assistant",
                  "sameAs": [
                    "https://en.wikipedia.org/wiki/Virtual_assistant",
                    "https://en.wikipedia.org/wiki/Voice_user_interface"
                  ],
                  "inDefinedTermSet": {
                    "@type": "DefinedTermSet",
                    "name": "Wikipedia",
                    "url": "https://en.wikipedia.org/"
                  }
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "@id": "https://www.antekautomation.com/#offer-workflow-automation",
            "url": "https://www.antekautomation.com/services/workflow-automation",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.antekautomation.com/#service-workflow-automation",
              "name": "Automation",
              "description": "Connect your tools and eliminate repetitive tasks. From scheduling to invoicing, let AI handle the busywork.",
              "serviceType": "Workflow automation and system integrations",
              "provider": { "@id": "https://www.antekautomation.com/#organization" },
              "areaServed": "GB",
              "audience": { "@type": "BusinessAudience", "name": "Service businesses" }
            }
          }
        ]
      }
    },
    "hasPart": [
      {
        "@type": "Article",
        "@id": "https://www.antekautomation.com/#article",
        "headline": "Antek Automation | AI Automation Agency UK",
        "alternativeHeadline": "AI That Works for Your Business",
        "description": "Antek Automation deploys AI chatbots, voice agents, and workflow automation that work 24/7 to capture leads, book appointments, and grow revenue.",
        "author": { "@type": "Organization", "@id": "https://www.antekautomation.com/#organization" },
        "publisher": { "@type": "Organization", "@id": "https://www.antekautomation.com/#organization" },
        "datePublished": "2025-09-30T05:31:48-05:00",
        "dateModified": "2025-10-18T11:36:01-06:00",
        "inLanguage": "en-GB",
        "image": { "@id": "https://www.antekautomation.com/#logo" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.antekautomation.com/#webpage" },
        "keywords": [
          "ai chatbots",
          "voice ai",
          "ai phone agents",
          "AI automation agency UK",
          "AI voice agents",
          "AI phone answering service",
          "AI chatbots for service businesses",
          "appointment booking automation",
          "lead capture automation",
          "workflow automation",
          "customer support automation",
          "AI receptionist"
        ],
        "articleBody": "Stop losing customers to missed calls and slow responses. Antek Automation deploys AI chatbots, voice agents, and workflow automation that work 24/7 to capture leads, book appointments, and grow your revenue. The problem we solve includes missed opportunities, slow response times, administrative burden, and limited availability. Industries served include tradespeople, cleaning, professional services, and beauty. Ready to automate your business? Book a free consultation and discover how AI can transform your service business."
      },
      {
        "@type": "HowTo",
        "@id": "https://www.antekautomation.com/#how-it-works",
        "name": "How It Works",
        "description": "From setup to success in three steps: discovery call, custom setup, and launch & grow.",
        "inLanguage": "en-GB",
        "step": [
          {"@type": "HowToStep", "position": 1, "name": "Discovery Call", "text": "We learn about your business, customers, and processes. Takes 30 minutes. Zero commitment required."},
          {"@type": "HowToStep", "position": 2, "name": "Custom Setup", "text": "We build and train your AI agents on your services, pricing, and availability. Ready in 1-2 weeks."},
          {"@type": "HowToStep", "position": 3, "name": "Launch & Grow", "text": "Your AI starts working immediately. We monitor, optimise, and help you scale as you grow."}
        ]
      },
      {
        "@type": "WebPageElement",
        "@id": "https://www.antekautomation.com/#industries-section",
        "name": "Industries We Serve",
        "inLanguage": "en-GB",
        "isPartOf": { "@id": "https://www.antekautomation.com/#webpage" },
        "mainEntity": {
          "@type": "ItemList",
          "@id": "https://www.antekautomation.com/#industries",
          "name": "Industries We Serve",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Tradespeople", "description": "Plumbers, electricians, builders who need 24/7 call handling" },
            { "@type": "ListItem", "position": 2, "name": "Cleaning", "description": "Residential and commercial cleaning services" },
            { "@type": "ListItem", "position": 3, "name": "Professional", "description": "Consultants, accountants, legal services" },
            { "@type": "ListItem", "position": 4, "name": "Beauty", "description": "Salons, spas, wellness centers" }
          ]
        }
      }
    ],
    "citation": [
      {
        "@type": "WebPage",
        "headline": "Antek Automation Achieves Certified Retell AI Partnership Status, Expanding Advanced Voice AI Solutions for UK Service Businesses",
        "url": "https://www.digitaljournal.com/pr/news/indnewswire/antek-automation-achieves-certified-retell-1650888160.html",
        "creator": { "@type": "Organization", "name": "Digital Journal", "url": "https://www.digitaljournal.com/" }
      },
      {
        "@type": "WebPage",
        "headline": "About Antek Automation",
        "url": "https://www.retellai.com/partner/antek-automation",
        "creator": { "@type": "Organization", "name": "Retell AI", "url": "https://www.retellai.com/"}
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation",
        "url": "https://www.crunchbase.com/organization/antek-automation",
        "creator": { "@type": "Organization", "name": "Crunchbase", "url": "https://www.crunchbase.com/"}
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation Retell AI Voice Partnership",
        "url": "https://www.slideshare.net/slideshow/antek-automation-retell-ai-voice-partnership/285139851",
        "creator": { "@type": "Organization", "name": "SlideShare", "url": "https://www.slideshare.net/" }
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation",
        "url": "https://directory.cambridge-news.co.uk/search/andover/automated-gates-manufacturer",
        "creator": { "@type": "Organization", "name": "CAMBRIDGEnews", "url": "https://www.cambridge-news.co.uk/" }
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation",
        "url": "https://www.click4homeservices.com/38-chantry-way-andover-sp10-1lz/sample-category/antek-automation",
        "creator": { "@type": "Organization", "name": "CLICK4HOMESERVICES", "url": "https://www.click4homeservices.com/" }
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation, Andover",
        "url": "https://www.yell.com/biz/antek-automation-andover-11003297/",
        "creator": { "@type": "Organization", "name": "Yell", "url": "https://www.yell.com/" }
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation",
        "url": "https://www.semfirms.com/profile/antek-automation",
        "creator": { "@type": "Organization", "name": "SEMfirms", "url": "https://www.semfirms.com/" }
      },
      {
        "@type": "WebPage",
        "headline": "Antek Automation Achieves Certified Retell AI Partnership Status, Expanding Advanced Voice AI Solutions for UK Service Businesses",
        "url": "https://lifestyle.middletownlifemagazine.com/story/214412/antek-automation-achieves-certified-retell-ai-partnership-status-expanding-advanced-voice-ai-solutions-for-uk-service-businesses/",
        "creator": { "@type": "Organization", "name": "Middletown Life", "url": "https://lifestyle.middletownlifemagazine.com/"}
      },
      {
        "@type": "Dataset",
        "name": "AI Automation Datasets",
        "description": "Collection of datasets related to AI automation technologies, including machine learning models, workflow tools, and automation processes from various research sources.",
        "headline": "AI Automation Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=ai%20automation&docid=L2cvMTFtejR2ZncwYw%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "AI Chatbots Datasets",
        "description": "Curated datasets for AI chatbots covering conversational models, training corpora, dialogue systems, and natural language processing applications.",
        "headline": "AI Chatbots Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=AI%20chatbots%20&docid=L2cvMTF2eXJ0XzVmMQ%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "AI Appointment Datasets",
        "description": "Datasets focused on AI-driven appointment scheduling, booking systems, calendar automation, and intelligent scheduling agents.",
        "headline": "AI Appointment Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=AI%20appointment&docid=L2cvMTFta2tiOW10MQ%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "AI Workflow Automation Datasets",
        "description": "Datasets exploring AI workflow automation including process optimization, task orchestration, enterprise automation pipelines, and intelligent workflows.",
        "headline": "AI Workflow Automation Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=AI%20Workflow%20automation&docid=L2cvMTF2d2psX2MzbQ%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "AI Business Process Automation Datasets",
        "description": "Comprehensive datasets on AI business process automation featuring robotic process automation, intelligent workflows, and operational efficiency tools.",
        "headline": "AI Business Process Automation Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=AI%20Business%20process%20automation&docid=L2cvMTFtZDZobXhkdA%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "Conversational AI Datasets",
        "description": "Datasets for conversational AI systems including multi-turn dialogues, intent recognition, context-aware response generation, and dialogue training data.",
        "headline": "Conversational AI Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=Conversational%20AI&docid=L2cvMTF5bnZndG45MQ%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "AI Voice Assistants Datasets",
        "description": "Datasets specialized in AI voice assistants including speech-to-text models, voice command processing, audio interaction data, and voice recognition training sets.",
        "headline": "AI Voice Assistants Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=AI%20voice%20assistants&docid=L2cvMTF3MWgyOWRqeQ%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "AI Receptionist Datasets",
        "description": "Datasets covering AI receptionist systems, virtual reception automation, visitor management, call handling, and automated front desk operations.",
        "headline": "AI Receptionist Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=AI%20receptionist&docid=L2cvMTF4NzBydG5iOA%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      },
      {
        "@type": "Dataset",
        "name": "Lead Capture Automation Datasets",
        "description": "Datasets focused on lead capture automation technologies, form processing, customer acquisition workflows, CRM integration, and lead generation systems.",
        "headline": "Lead Capture Automation Datasets",
        "url": "https://datasetsearch.research.google.com/search?src=0&query=lead%20capture%20automation&docid=L2cvMTF5ZHR6cDYxZA%3D%3D",
        "license": "https://schema.org/license",
        "creator": {
          "@type": "Organization",
          "name": "Google Dataset Search",
          "url": "https://datasetsearch.research.google.com/"
        }
      }
    ]
  };

  return (
    <div className="bg-off-white">
      <SEOHead
        title="AI Voice Agents & Chatbots That Never Miss a Call | Antek Automation UK"
        description="AI voice agents & chatbots for UK businesses | Answer every call 24/7 | Capture leads & book appointments | Never miss revenue from missed calls"
        path="/"
        schema={homePageSchema}
      />
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION | 24/7 AVAILABILITY | NEVER MISS A LEAD
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI That Answers Every Call, Books Every Appointment, and Never Takes a Day Off
            </h1>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong className="font-black">The Problem:</strong> Your business loses opportunities every day. Calls go to voicemail. Website visitors leave without engaging. Customers ask questions at 11pm when you're closed.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-4">
              <strong className="font-black">The Cost:</strong> Every missed call is lost revenue. Every unanswered website chat is a competitor's new customer. Your team is buried in repetitive questions instead of growing the business.
            </p>
            <p className="text-lg text-charcoal leading-normal mb-8">
              <strong className="font-black">The Solution:</strong> Antek Automation deploys AI voice agents, chatbots, and workflow automation that work 24/7 to capture leads, book appointments, and answer questions—so your team can focus on what matters most.
            </p>
            <div className="mb-6">
              <p className="text-sm font-black uppercase text-charcoal mb-4">Try it yourself →</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => navigate('/contact')}>Book a Call</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted-taupe border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              The Problem We Solve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Missed Opportunities
                  </h3>
                  <p className="text-charcoal leading-normal">
                    55% of customers won't leave a voicemail. Every missed call is a lost customer to your competitor who answered first. Each missed opportunity could be worth hundreds or thousands in revenue.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Slow Response Times
                  </h3>
                  <p className="text-charcoal leading-normal">
                    78% of customers choose the business that responds first. Responding in hours instead of minutes means losing business to faster competitors who answer instantly.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Administrative Burden
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Your team spends hours every week on scheduling, follow-ups, and answering the same questions repeatedly. That's time not spent serving customers or growing revenue.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-xl border-3 border-charcoal shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-black text-xl uppercase text-charcoal mb-2">
                    Limited Availability
                  </h3>
                  <p className="text-charcoal leading-normal">
                    Customers expect 24/7 availability, but your team can't work around the clock. Evening and weekend inquiries go to competitors who never close—costing you business while you sleep.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto leading-normal">
              Three powerful solutions to transform how you serve customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Website chat that engages visitors 24/7, qualifies leads, answers customer questions, and books appointments instantly—turning browsers into buyers even when your team is offline.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-chatbots')}>Learn More</Button>
            </Card>

            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Voice AI
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                AI phone agents that answer every call with natural conversation, capture lead details, book appointments, and handle customer inquiries 24/7—so you never miss an opportunity.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/ai-voice-assistants')}>Learn More</Button>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Automation
              </h3>
              <p className="text-charcoal leading-normal mb-6">
                Custom workflows that connect your tools and eliminate hours of manual work. From data entry to invoicing, automate the busywork and reclaim 10-20 hours per week to focus on growth.
              </p>
              <Button variant="primary" className="w-full" onClick={() => navigate('/services/workflow-automation')}>Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
              From setup to success in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-terracotta text-off-white flex items-center justify-center font-black text-5xl border-4 border-charcoal shadow-[4px_4px_0px_#000000] mx-auto mb-8">
                1
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-4 tracking-wide">
                Discovery Call
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-base">
                We learn about your business, customers, and processes. Takes 30 minutes. Zero commitment required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-terracotta text-off-white flex items-center justify-center font-black text-5xl border-4 border-charcoal shadow-[4px_4px_0px_#000000] mx-auto mb-8">
                2
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-4 tracking-wide">
                Custom Setup
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-base">
                We build and train your AI agents on your services, pricing, and availability. Ready in 1-2 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-terracotta text-off-white flex items-center justify-center font-black text-5xl border-4 border-charcoal shadow-[4px_4px_0px_#000000] mx-auto mb-8">
                3
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-4 tracking-wide">
                Launch & Grow
              </h3>
              <p className="text-charcoal/70 leading-relaxed text-base">
                Your AI starts working immediately. We monitor, optimise, and help you scale as you grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-off-white border-b-4 border-charcoal py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-charcoal mb-6">
              PROVEN RESULTS ACROSS INDUSTRIES
            </h2>
            <p className="text-xl md:text-2xl font-bold text-charcoal max-w-2xl mx-auto">
              Real businesses. Real ROI. Real fast.
            </p>
          </div>

          <div className="space-y-0">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-sage border-y-4 border-charcoal py-24 md:py-32" id="industries">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-charcoal mb-4">
              TRUSTED BY BUSINESSES ACROSS INDUSTRIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card hover className="text-center p-8 md:p-10 transition-all duration-200 hover:-translate-y-1">
              <Icon letter="H" size="lg" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-6 mb-3 tracking-wide">
                HOSPITALITY
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Restaurants, hotels, catering, event venues, food service
              </p>
            </Card>

            <Card hover className="text-center p-8 md:p-10 transition-all duration-200 hover:-translate-y-1">
              <Icon letter="P" size="lg" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-6 mb-3 tracking-wide">
                PROFESSIONAL SERVICES
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Consultants, accountants, lawyers, financial advisors, agencies, coaches
              </p>
            </Card>

            <Card hover className="text-center p-8 md:p-10 transition-all duration-200 hover:-translate-y-1">
              <Icon letter="W" size="lg" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-6 mb-3 tracking-wide">
                WELLNESS & BEAUTY
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Salons, spas, fitness studios, clinics, wellness centers, pet grooming
              </p>
            </Card>

            <Card hover className="text-center p-8 md:p-10 transition-all duration-200 hover:-translate-y-1">
              <Icon letter="R" size="lg" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-6 mb-3 tracking-wide">
                BUSINESS SERVICES
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Cleaning, property management, facilities, maintenance, logistics
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10">
            Book a free consultation and discover how AI can transform your business
          </p>
          <Button variant="primary" className="text-base md:text-lg px-12 py-5 font-bold uppercase tracking-wide shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] transition-all" onClick={() => navigate('/contact')}>
            Get Started Today
          </Button>
        </div>
      </section>

      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
