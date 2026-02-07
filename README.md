# Antek Automation Website

A production-ready marketing website for Antek Automation — a UK-based AI automation company serving service businesses. Built with React, TypeScript, Tailwind CSS, and featuring a neo-brutalist design with an earth-tone palette.

## Features

- **Neo-Brutalist Design**: 3px borders, hard shadows, geometric layouts, no rounded corners
- **Earth-Tone Palette**: Warm beige, soft sage, terracotta, charcoal, off-white
- **AI Chatbot Widget**: Persistent chat widget with n8n webhook integration (auto-opens on first visit)
- **ElevenLabs Voice Agent**: Voice AI demo integration on the Voice Assistants service page
- **Contact Form**: Lead capture form with n8n webhook
- **Location Pages**: Dynamic city-specific landing pages (London, Birmingham, Manchester, etc.)
- **SEO Optimised**: JSON-LD schema, Open Graph tags, sitemap, meta descriptions per page
- **Code Splitting**: Lazy-loaded pages via React.lazy() for fast initial load
- **Analytics**: Google Analytics + Meta Pixel tracking

## Tech Stack

- React 18 + TypeScript
- Vite (build tool & dev server)
- Tailwind CSS
- Lucide React (icons)
- @elevenlabs/react (voice chat)
- @supabase/supabase-js (optional backend)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Then update `.env` with your webhook URLs and analytics IDs.

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Pages

- `/` — Home (hero, services overview, industries, CTAs)
- `/services/ai-chatbots` — AI Chatbots service page
- `/services/ai-voice-assistants` — AI Voice Assistants service page (with ElevenLabs demo)
- `/services/workflow-automation` — Workflow Automation service page
- `/contact` — Contact form with webhook integration
- `/locations/:slug` — Dynamic location pages (e.g., `/locations/london`)
- `/terms-of-business` — Terms of business
- `/privacy-policy` — Privacy policy

## Webhook Integration

The site communicates with n8n webhooks via two environment variables:

- `VITE_CONTACT_WEBHOOK_URL` — Contact form submissions
- `VITE_CHATBOT_WEBHOOK_URL` — Chatbot messages

See `CLAUDE.md` for detailed payload formats and error handling patterns.

### Testing Webhooks Locally

Use ngrok to expose your local n8n instance:
```bash
ngrok http 5678
```
Then update `.env` with the ngrok URLs and restart the dev server.

## Design System

| Token | Value |
|-------|-------|
| Charcoal | `#1A1A1A` — Borders and text |
| Warm Beige | `#E8DFD0` — Headers and accents |
| Soft Sage | `#C5D8CC` — Secondary sections |
| Terracotta | `#D97757` — CTA buttons |
| Off-White | `#FAF8F5` — Backgrounds |
| Borders | 3px solid (`border-3`) |
| Shadows | Hard box shadows (`shadow-brutal`, `shadow-brutal-sm`, etc.) |
| Typography | System font stack, uppercase headings/buttons |

## Development

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Type check | `npm run typecheck` |
| Lint | `npm run lint` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

Run `npm run typecheck && npm run lint && npm run build` before committing.

## License

All rights reserved — Antek Automation © 2026
