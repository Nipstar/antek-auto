export interface ContactFormData {
  name: string;
  businessName?: string;
  phone: string;
  email: string;
  serviceType: string;
  interests: string[];
  message?: string;
  preferredContact: 'phone' | 'email' | 'either';
  timestamp: string;
  source: 'website_contact_form';
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  message: string;
  timestamp: string;
  userEmail?: string;
  userName?: string;
  pageUrl: string;
  source: 'website_chatbot';
  isBot: boolean;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  sessionId: string;
  userInfo: { name?: string; email?: string };
  isLoading: boolean;
}
