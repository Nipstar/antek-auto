// Application constants
export const CONSTANTS = {
  // ElevenLabs Voice Agent
  ELEVENLABS_AGENT_ID: 'agent_0701k72hgm7se1gvm1db45vg23r1',

  // Chatbot behavior
  CHATBOT_AUTO_OPEN_DELAY_MS: 5000,
  CHATBOT_VISITED_KEY: 'chatbot_visited',
  CHATBOT_WELCOME_MESSAGE: "Hello! I'm Antek AI. How can I help you automate your business today?",

  // Contact information
  CONTACT_EMAIL: 'hello@antekautomation.com',

  // Webhook sources
  WEBHOOK_SOURCE_CHATBOT: 'website_chatbot' as const,
  WEBHOOK_SOURCE_CONTACT_FORM: 'website_contact_form' as const,

  // Session tracking
  SESSION_ID_PREFIX: 'session',

  // Company information
  COMPANY_NAME: 'Antek Automation',
  COMPANY_DOMAIN: 'https://www.antekautomation.com',
};
