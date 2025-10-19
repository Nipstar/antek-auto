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

## Technology Stack

**Core Framework:**
- React 18.3.1 - UI framework
- TypeScript 5.5.3 - Type-safe JavaScript
- Vite 5.4.2 - Build tool and dev server (HMR for fast development)
- Tailwind CSS 3.4.1 - Utility-first styling

**Key Libraries:**
- lucide-react (0.344.0) - Icon library (geometric SVG icons, no emojis)
- @elevenlabs/react (0.8.0) - ElevenLabs voice chat integration
- @supabase/supabase-js (2.57.4) - Optional Supabase backend

**Development Tools:**
- ESLint 9.9.1 - Linting with v9 flat config format
- TypeScript ESLint - Strict TypeScript linting rules
- Autoprefixer, PostCSS - CSS processing and vendor prefixes

## Key Architectural Decisions

1. **Hash-Based Routing** - Simple manual routing via `window.location.hash`. No server config needed. Simpler than React Router for this app size.

2. **No Backend API** - All webhook communication goes directly to n8n. Enables serverless architecture.

3. **Centralized Types** (`src/types/index.ts`) - Single source of truth for all interfaces. Easier to maintain and refactor.

4. **Design System Primitives** - Button and Card components enforce brutalist consistency across all pages.

5. **ElevenLabs Voice Chat** - Pre-built voice agent integration using `@elevenlabs/react`. Configured via agent ID in VoiceChat component.

6. **LocalStorage for Session Tracking** - Chatbot tracks first visit to avoid repeated auto-opens. Uses key: `chatbot_visited`.

7. **Vite Over Create React App** - Modern tooling, faster HMR, smaller bundle, better ES module support.

8. **TypeScript Strict Mode** - All strict checks enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`). Errors on unused variables/parameters.

## Common Patterns & State Management

### Navigation & Routing
- Use `window.location.hash = '/path'` for navigation (not HTML anchor tags unless external)
- Hash routing automatically scrolls to top on route change (handled in `App.tsx`)
- For programmatic navigation: `window.location.hash = '/contact'`
- For event-driven navigation: dispatch custom events like `new Event('openChatbot')`

### Component Communication
- **Custom Events**: Used for global UI triggers (e.g., `openChatbot` event from buttons)
- **localStorage**: Tracks session state (e.g., `chatbot_visited` to prevent duplicate auto-opens)
- **Props**: Primary method for component data flow (pages pass `citySlug` to LocationPage, etc.)

### SEO & Meta Tags
- All pages use `SEOHead` component to set page title, description, and JSON-LD schema
- Organization schema defined at page level (see `HomePage.tsx` for example)
- Schema markup includes context data relevant to each page

### Webhook Communication
- All webhook calls use `fetch()` with POST requests
- Requests include `timestamp: new Date().toISOString()`
- Include `source` field to identify request origin (e.g., `"website_chatbot"`)
- Handle errors gracefully with fallback messages shown to users
- Session tracking: Generate unique `sessionId` format: `session_${timestamp}_${randomId}`

## File Reference

### Pages
- `src/pages/HomePage.tsx` - Landing page with hero, services overview, industries, organization schema
- `src/pages/ContactPage.tsx` - Contact form for lead capture, sends to contact webhook
- `src/pages/AIChatbotsPage.tsx` - Service detail page: AI chatbots, features, benefits
- `src/pages/AIVoiceAssistantsPage.tsx` - Service detail page: Voice AI with ElevenLabs demo integration
- `src/pages/WorkflowAutomationPage.tsx` - Service detail page: Workflow automation solutions
- `src/pages/LocationPage.tsx` - Dynamic location pages (receives `citySlug` prop from route)

### Components
- `src/components/Navigation.tsx` - Global header with logo, nav links, services dropdown, responsive menu
- `src/components/Footer.tsx` - Global footer with links, copyright info
- `src/components/ChatbotWidget.tsx` - AI chatbot widget (persistent, all pages, webhook-driven, auto-opens first visit)
- `src/components/VoiceChat.tsx` - Voice chat modal with ElevenLabs agent integration
- `src/components/Button.tsx` - Button primitive: `variant="primary"` or `variant="secondary"`, brutalist styling
- `src/components/Card.tsx` - Card primitive: `hover` prop enables translate + shadow effect on hover
- `src/components/Icon.tsx` - Icon wrapper component using lucide-react
- `src/components/SEOHead.tsx` - Sets meta tags, title, description, JSON-LD schema markup

### Data & Types
- `src/data/cities.ts` - City data for location pages (name, slug, description, testimonials, service offerings)
- `src/types/index.ts` - All TypeScript interfaces: `ContactFormData`, `ChatMessage`, `ChatState`

### Configuration
- `vite.config.ts` - Vite build config (React plugin, lucide-react HMR optimization)
- `tailwind.config.js` - Tailwind theme (colors, shadows, custom utilities)
- `postcss.config.js` - PostCSS config (Tailwind and Autoprefixer)
- `eslint.config.js` - ESLint config (v9 flat format, React Hooks rules enforced)
- `tsconfig.json` - Root TypeScript config (project references)
- `tsconfig.app.json` - App TypeScript config (strict mode enabled)

## Working with the Codebase

### Design Changes
- Maintain 3px borders (`border-3`) and hard box shadows (`shadow-brutal*`)
- Use `uppercase` class for headings and buttons
- Stick to earth-tone palette: charcoal, warm-beige, soft-sage, muted-taupe, terracotta, off-white
- Test hover states (translate -2px + shadow increase)
- Active states: translate +2px + shadow decrease
- No rounded corners - use hard edges for brutalist aesthetic

### Adding New Pages
1. Create page component in `src/pages/NewPage.tsx`
2. Import component in `src/App.tsx`
3. Add route case in the switch statement in `App.tsx` (inside `renderPage()` function)
4. Update `src/components/Navigation.tsx` if link should appear in nav menu
5. Add `SEOHead` component with appropriate title, description, and schema

### Adding Location Pages
- Add city data to `src/data/cities.ts` with unique slug
- Route automatically works: `#/locations/city-slug` maps to LocationPage with `citySlug` prop
- No changes to `src/App.tsx` needed - uses dynamic route matching
- LocationPage component extracts `citySlug` from route and looks up data

### Webhook Modifications
- Environment variables use `VITE_` prefix (Vite convention)
- Update type interfaces in `src/types/index.ts` if payload schema changes
- Update webhook sender implementation (ChatbotWidget.tsx or ContactPage.tsx)
- Include proper error handling with try/catch and fallback messages
- Test webhooks using ngrok for local development

### SEO Implementation
- All pages must use `SEOHead` component (sets title, description, canonical, schema)
- Define JSON-LD schema at page level (Organization, LocalBusiness, etc.)
- Update page meta when content changes to maintain search visibility
- Include relevant keywords in title and description

### ElevenLabs Voice Integration
- Voice chat component located in `src/components/VoiceChat.tsx`
- Requires ElevenLabs agent ID configured in component props
- Sends session context including `sessionId`, `userId`, page URL to ElevenLabs
- Modal opens via custom event: `window.dispatchEvent(new Event('openVoiceChat'))`
- Voice integration available on `AIVoiceAssistantsPage` as demo

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

## Common Development Tasks

### Hot Module Reload (HMR) Not Working
- Vite should auto-reload components on save. If not working, try `npm run dev` again
- Check that lucide-react is not being dependency-optimized (it's excluded in vite.config.ts)
- Hard refresh browser (Cmd+Shift+R on Mac)

### Type Errors After Code Changes
- Run `npm run typecheck` to catch all type errors before committing
- Common issues: unused imports, missing types, prop mismatches
- Check `tsconfig.app.json` for strict mode settings

### Styling Issues with Tailwind
- After adding new custom colors/shadows to `tailwind.config.js`, restart dev server
- Verify class names follow Tailwind syntax (no spaces in compound classes)
- Check that CSS layers are imported in `src/index.css` in correct order

### Webhook Testing
- Use `curl` or Postman to test webhook URLs locally
- Check browser DevTools Network tab to see actual request/response
- Verify environment variables are loaded: `VITE_*` vars are read at build time
- For local testing, use ngrok and restart dev server after updating URLs

### Linting Issues
- Run `npm run lint` to see all ESLint violations
- React Hooks rules are enforced - ensure hooks called at top level in components
- Unused imports/variables will cause errors in strict mode

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

## CSS & Styling

**Global Styles** (`src/index.css`):
- Tailwind CSS layers imported: `@tailwind base`, `@tailwind components`, `@tailwind utilities`
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`
- Custom utilities: `.w-15` and `.h-15` (3.75rem)

**Tailwind Custom Tokens** (`tailwind.config.js`):
- Extended theme with custom colors (charcoal, warm-beige, soft-sage, muted-taupe, terracotta, off-white, success-green, peach, mid-gray)
- Custom shadows: `shadow-brutal`, `shadow-brutal-sm`, `shadow-brutal-lg`, `shadow-brutal-xs`, `shadow-brutal-chat`, `shadow-brutal-msg`
- Custom letter spacing: `tracking-tight-xl` (-2px), `tracking-tight-lg` (-1px)
- Custom border width: `border-3` (3px)
- No rounded corners by default (brutalist design aesthetic)

## Build & Deployment

**Vite Configuration** (`vite.config.ts`):
- React plugin enabled for automatic JSX transform
- Lucide-react library excluded from dependency optimization (faster HMR during development)

**Build Process:**
```bash
npm run build      # Creates optimized production build in dist/
npm run preview    # Preview production build locally
```

**Output:**
- Production build: `dist/` directory (minified, optimized)
- Includes all assets, CSS, JavaScript bundles

**Deployment Ready:**
- Static site - can be deployed to any static hosting (Vercel, Netlify, AWS S3, etc.)
- No server-side rendering needed
- All routing is client-side (hash-based)
- Environment variables must be set at build time or runtime via `.env` file

## TypeScript Strictness

**Strict Mode Enabled** (`tsconfig.app.json`):
- `strict: true` - All strict type checking rules enabled
- `noUnusedLocals: true` - Error on unused variables
- `noUnusedParameters: true` - Error on unused function parameters
- `noFallthroughCasesInSwitch: true` - Error on switch statement fallthrough
- `jsx: react-jsx` - Automatic JSX transform (no React import needed)

**Important:** All code must pass strict TypeScript checks. Run `npm run typecheck` before committing.
