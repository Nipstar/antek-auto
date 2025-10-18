# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a production-ready marketing website for Antek Automation, a UK-based AI automation company. The site features a neo-brutalist design with an earth-tone color palette and includes an integrated AI chatbot widget that connects to n8n webhooks.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (Vite dev server on http://localhost:5173)
npm run dev

# Type checking (run before committing)
npm run typecheck

# Linting
npm run lint

# Production build
npm run build

# Preview production build
npm run preview
```

## Architecture

### Routing
The app uses **hash-based routing** (not React Router). Routes are handled in `src/App.tsx`:
- `/` or `#/` → HomePage
- `#/contact` → ContactPage
- `#/services/ai-chatbots` → AIChatbotsPage
- `#/services/ai-voice-assistants` → AIVoiceAssistantsPage
- `#/services/workflow-automation` → WorkflowAutomationPage
- `#/locations/:citySlug` → LocationPage (dynamic route for location-specific pages)

The current route is determined by `window.location.hash`. Navigation automatically scrolls to top on route change. Note: There is no dedicated Pricing page - pricing information is included on the service-specific pages.

**Dynamic Location Routes:**
Location pages use a slug-based pattern (e.g., `#/locations/london-ai-automation`). The `LocationPage` component receives the `citySlug` prop extracted from the route.

### Component Structure
- **Pages** (`src/pages/`): Top-level page components
  - `HomePage.tsx`: Landing page with hero, services overview, industries
  - `ContactPage.tsx`: Contact form with webhook integration
  - `AIChatbotsPage.tsx`: Dedicated service page for AI chatbot solutions
  - `AIVoiceAssistantsPage.tsx`: Dedicated service page for voice AI
  - `WorkflowAutomationPage.tsx`: Dedicated service page for automation
  - `LocationPage.tsx`: Dynamic location-specific landing pages (receives citySlug prop)
- **Components** (`src/components/`): Reusable UI components
  - `ChatbotWidget.tsx`: Persistent chatbot that appears on all pages
  - `Navigation.tsx` & `Footer.tsx`: Global layout components
  - `Button.tsx`, `Card.tsx`, `Icon.tsx`: Design system primitives

### Type Definitions
All TypeScript types are centralized in `src/types/index.ts`:
- `ContactFormData`: Contact form submission payload
- `ChatMessage`: Individual chat message structure
- `ChatState`: Chatbot widget state management

### Design System (Neo-Brutalist)

**Core Principles:**
- 3px borders (`border-3`)
- Hard box shadows (`shadow-brutal`, `shadow-brutal-sm`, etc.)
- Hover effects: translate + shadow increase
- Uppercase text for headings/buttons
- Geometric icon squares (no emoji icons)

**Custom Tailwind Classes** (defined in `tailwind.config.js`):
```
Colors: charcoal, warm-beige, soft-sage, muted-taupe, terracotta, off-white,
        success-green, peach, mid-gray
Shadows: shadow-brutal, shadow-brutal-sm, shadow-brutal-lg, shadow-brutal-xs,
         shadow-brutal-chat, shadow-brutal-msg
Letter Spacing: tight-xl (-2px), tight-lg (-1px)
```

## Webhook Integration

The site integrates with n8n webhooks via environment variables:

**Environment Variables** (create `.env` from `.env.example`):
```
VITE_CONTACT_WEBHOOK_URL - Contact form submissions
VITE_CHATBOT_WEBHOOK_URL - Chatbot messages
VITE_SUPABASE_URL - Supabase project URL (if using Supabase)
VITE_SUPABASE_ANON_KEY - Supabase anonymous key (if using Supabase)
```

**Chatbot Behavior:**
- Auto-opens after 5 seconds on first visit (tracked via `localStorage`)
- Session ID generated: `session_${timestamp}_${random}`
- Sends POST to `VITE_CHATBOT_WEBHOOK_URL` with: `{ sessionId, message, timestamp, pageUrl, source }`
- Expected response: `{ reply: "string" }`
- Fallback message shown if webhook unavailable or fails

**Contact Form:**
- Sends POST to `VITE_CONTACT_WEBHOOK_URL`
- Payload structure defined in `ContactFormData` type
- Includes fields: name, businessName, phone, email, serviceType, budget, interests[], message, preferredContact

## Working with the Codebase

**When modifying design:**
- Maintain 3px borders and brutal shadows
- Use uppercase for headings/buttons (`uppercase` class)
- Stick to the earth-tone palette (avoid introducing new colors)
- Test hover states (translate + shadow increase)

**When adding new pages:**
1. Create page component in `src/pages/`
2. Add route case in `src/App.tsx` switch statement (or dynamic route logic if using slugs)
3. Update `src/components/Navigation.tsx` with new link (if it should appear in navigation)

**When adding location pages:**
- Location pages are automatically routed via the dynamic `/locations/:citySlug` pattern
- Add location data to `src/data/locations.ts` (if such a data file exists)
- No changes to `src/App.tsx` routing needed for new location pages

**When modifying webhooks:**
- Environment variables use `VITE_` prefix (Vite convention)
- Update types in `src/types/index.ts` if payload structure changes
- Both webhooks include error handling with fallback messages

## Local Testing with n8n

Use ngrok to expose local n8n instance:
```bash
ngrok http 5678
```

Then set environment variables to ngrok URLs:
```
VITE_CONTACT_WEBHOOK_URL=https://abc123.ngrok.io/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://abc123.ngrok.io/webhook/chatbot
```

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json`: Root config that references app and node configs
- `tsconfig.app.json`: App-specific TypeScript configuration
- `tsconfig.node.json`: Node/Vite configuration

Run `npm run typecheck` before committing to catch type errors.

## Linting

ESLint is configured using the v9 flat config format (`eslint.config.js`):
- TypeScript ESLint with recommended rules
- React Hooks rules enforced (must follow hooks rules)
- React Refresh plugin (warns if non-component exports in component files)
- Run `npm run lint` to check for issues
