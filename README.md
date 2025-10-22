# Antek Automation Website

A professional, production-ready website for Antek Automation - a UK-based AI automation company serving service businesses. Built with React, TypeScript, Tailwind CSS, and featuring a neo-brutalist design with earth-tone palette.

## Features

- **Neo-Brutalist Design**: Bold borders, hard shadows, and geometric layouts
- **Earth-Tone Palette**: Warm beige, soft sage, terracotta, and charcoal colors
- **AI Chatbot Widget**: Fixed-position chat with n8n webhook integration
- **Contact Form**: Full form with n8n webhook for lead capture
- **Responsive Design**: Mobile-first approach, optimised for all devices
- **Multiple Pages**: Home, Pricing, and Contact pages
- **Service Sections**: AI Chatbots, Voice AI, and Automation services
- **Industry Focus**: Tradespeople, Cleaning, Professional Services, Beauty & Wellness

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**

   Copy `.env.example` to `.env` and add your webhook URLs:
   ```bash
   VITE_CONTACT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
   VITE_CHATBOT_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chatbot
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Webhook Integration

### Contact Form Webhook

The contact form sends POST requests to `VITE_CONTACT_WEBHOOK_URL` with the following payload:

```json
{
  "name": "John Smith",
  "businessName": "Smith Plumbing Ltd",
  "phone": "+44 7123 456789",
  "email": "john@smithplumbing.co.uk",
  "serviceType": "trades",
  "interests": ["chatbot", "voice"],
  "message": "Looking to automate customer inquiries",
  "preferredContact": "phone",
  "timestamp": "2025-10-01T10:30:00.000Z",
  "source": "website_contact_form"
}
```

### Chatbot Webhook

The chatbot widget sends POST requests to `VITE_CHATBOT_WEBHOOK_URL` with the following payload:

```json
{
  "sessionId": "session_1696151234567_abc123",
  "message": "Can you help me automate my business?",
  "timestamp": "2025-10-01T10:30:00.000Z",
  "pageUrl": "https://antekautomation.co.uk/#/",
  "source": "website_chatbot"
}
```

Expected response format:
```json
{
  "reply": "I'd be happy to help! What type of business do you run?"
}
```

## Testing Webhooks Locally

Use ngrok or a similar tool to expose your local n8n instance:

```bash
ngrok http 5678
```

Then update your `.env` file with the ngrok URL:
```
VITE_CONTACT_WEBHOOK_URL=https://abc123.ngrok.io/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://abc123.ngrok.io/webhook/chatbot
```

## Design System

### Colors
- **Charcoal**: `#1A1A1A` - Borders and text
- **Warm Beige**: `#E8DFD0` - Headers and accents
- **Soft Sage**: `#C5D8CC` - Secondary sections
- **Terracotta**: `#D97757` - CTA buttons
- **Off-White**: `#FAF8F5` - Backgrounds

### Typography
- System font stack (Apple system fonts, Segoe UI, Arial)
- Font weights: 400 (normal), 700 (bold), 900 (black)
- Uppercase for headings and buttons

### Components
- **Buttons**: 3px borders, hard shadows, hover effects
- **Cards**: 3px borders, 6px shadows, optional hover animations
- **Icons**: Geometric squares with single letters (no emojis)

## Chatbot Behavior

- Auto-opens after 5 seconds on first visit
- Stores session in localStorage
- Shows typing indicator during API calls
- Graceful error handling with fallback messages
- Mobile: Full-screen modal on small devices

## Pages

1. **Home** (`/` or `#/`): Hero, services, problems, how it works, industries, CTA
2. **Pricing** (`#/pricing`): Three pricing tiers, features, FAQs
3. **Contact** (`#/contact`): Contact form with webhook integration

## Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette.

### Chatbot Customization
- Edit `src/components/ChatbotWidget.tsx` to change appearance
- Modify welcome message, timing, and behavior
- Adjust modal dimensions and mobile responsiveness

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Antek Automation © 2025
