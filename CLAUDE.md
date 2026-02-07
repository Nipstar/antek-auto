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

### Environment Setup

Before running the development server, create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Then update the webhook URLs:
```
VITE_CONTACT_WEBHOOK_URL=https://your-n8n-url.com/webhook/contact
VITE_CHATBOT_WEBHOOK_URL=https://your-n8n-url.com/webhook/chatbot
```

For local development with n8n, use ngrok to expose your local instance (see "Local Testing with n8n" section).

**Important:** Vite env vars with `VITE_` prefix are read at **build time**, not runtime. Restart `npm run dev` after changing `.env`.

### Pre-Commit Checklist

Before committing code, always run these commands in order:

```bash
# 1. Run type checker (catches TypeScript errors)
npm run typecheck

# 2. Run linter (catches style issues and React hook violations)
npm run lint

# 3. Build to verify production bundling works
npm run build
```

**Why This Matters:**
- TypeScript strict mode (`noUnusedLocals: true`, `noUnusedParameters: true`) enforces clean code
- React Hooks rules catch common bugs (hooks only at top level, dependency arrays, etc.)
- Linting ensures code consistency across the team
- Build verification catches tree-shaking and bundling issues early
- Failing these checks means broken code could enter the repository

### Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Check types | `npm run typecheck` |
| Fix lint issues | `npm run lint` |
| Build production | `npm run build` |
| Preview build | `npm run preview` |

## Architecture

### Routing

The app uses **client-side routing** via `window.location.pathname` (not React Router). Routes are handled in `src/App.tsx`:
- `/` → HomePage
- `/contact` → ContactPage
- `/services/ai-chatbots` → AIChatbotsPage
- `/services/ai-voice-assistants` → AIVoiceAssistantsPage
- `/services/workflow-automation` → WorkflowAutomationPage
- `/locations/:citySlug` → LocationPage (dynamic route for location-specific pages)
- `/terms-of-business` → TermsOfBusinessPage
- `/privacy-policy` → PrivacyPolicyPage

The current route is determined by `window.location.pathname`. Navigation automatically scrolls to top on route change. Use the global `window.navigate(path)` function for programmatic navigation (e.g., `window.navigate('/contact')`). Note: There is no dedicated Pricing page - pricing information is included on the service-specific pages.

**URL Format:**
- **Development & Preview**: URLs appear as `http://localhost:5173/` or `http://localhost:4173/` (clean paths)
- **Production**: Deployed sites may use `https://antekautomation.com/` or `https://antekautomation.com/#/` depending on server config
- The browser address bar always shows the actual path (no hash needed for routing to work)

**Dynamic Location Routes:**
Location pages use a slug-based pattern (e.g., `/locations/london`, `/locations/birmingham`). Slugs are simple city names defined in `src/data/cities.ts`. The `LocationPage` component receives the `citySlug` prop extracted from the route.

### Component Structure
- **Pages** (`src/pages/`): Top-level page components
  - `HomePage.tsx`: Landing page with hero, services overview, industries
  - `ContactPage.tsx`: Contact form with webhook integration
  - `AIChatbotsPage.tsx`: Dedicated service page for AI chatbot solutions
  - `AIVoiceAssistantsPage.tsx`: Dedicated service page for voice AI
  - `WorkflowAutomationPage.tsx`: Dedicated service page for automation
  - `LocationPage.tsx`: Dynamic location-specific landing pages (receives citySlug prop)
  - `TermsOfBusinessPage.tsx`: Terms of business/service legal page
  - `PrivacyPolicyPage.tsx`: Privacy policy and data handling page
- **Components** (`src/components/`): Reusable UI components
  - `ChatbotWidget.tsx`: Persistent chatbot that appears on all pages
  - `Navigation.tsx` & `Footer.tsx`: Global layout components
  - `Button.tsx`, `Card.tsx`, `Icon.tsx`: Design system primitives
  - `CaseStudyCard.tsx`: Renders case study cards with metrics
  - `ChatbotDemoButton.tsx`: CTA button to launch chatbot demo
  - `VoiceAgentDemoButton.tsx`: CTA button to launch voice agent demo
  - `VoiceDemoButton.tsx`: Alternative voice demo button variant

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

**Critical:** Vite environment variables with `VITE_` prefix are **read at build time**, not runtime. This means:
- For local development: Update `.env` and restart `npm run dev`
- For production builds: Set env vars before running `npm run build` (Vercel/Netlify handle this automatically)
- Variables are inlined into the bundle during build, making them visible in production code (safe for public URLs like webhooks)
- Do NOT store secrets like API keys that should remain private in `VITE_*` variables

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

### Google Analytics Integration

**Environment Variable** (add to `.env`):
```
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

**Setup:**
- Analytics tracking is configured in the app initialization
- Tracks page views automatically on route changes via `src/utils/analytics.ts`
- `trackPageView(path)` function is called in `App.tsx` on initial load and route changes
- Sent through the `VITE_GOOGLE_ANALYTICS_ID` environment variable
- Important: Environment variable must be set before build time (Vite bakes it into the bundle)
- For development, update `.env` and restart dev server
- For production, set environment variable before running `npm run build`

**Tracking Points:**
- Page navigation (automatically tracked on route changes via `trackPageView()` in App.tsx)
- Form submissions (contact form)
- Chatbot interactions (message sends)
- Button clicks (CTA buttons, service links)

**Implementation:**
The `src/utils/analytics.ts` utility provides a `trackPageView(path: string)` function that sends page view events to Google Analytics. This is automatically called in `App.tsx` during initial render and whenever the route changes via the popstate event listener.

### Meta Pixel (Facebook Pixel)

Meta Pixel tracking is configured directly in `index.html` (not via environment variables). Pixel ID: `1430686008694674`. Tracks PageView on initial load with a noscript fallback in the body tag. When modifying `index.html`, preserve both the header script and the noscript img tag in the body.

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

1. **Path-Based Routing** - Manual routing via `window.location.pathname` using `window.history.pushState()`. No server config needed (relies on SPA fallback). Simpler than React Router for this app size.

2. **No Backend API** - All webhook communication goes directly to n8n. Enables serverless architecture.

3. **Centralized Types** (`src/types/index.ts`) - Single source of truth for all interfaces. Easier to maintain and refactor.

4. **Design System Primitives** - Button and Card components enforce brutalist consistency across all pages.

5. **ElevenLabs Voice Chat** - Pre-built voice agent integration using `@elevenlabs/react`. Configured via agent ID in VoiceChat component.

6. **LocalStorage for Session Tracking** - Chatbot tracks first visit to avoid repeated auto-opens. Uses key: `chatbot_visited`.

7. **Vite Over Create React App** - Modern tooling, faster HMR, smaller bundle, better ES module support.

8. **TypeScript Strict Mode** - All strict checks enabled (`strict: true`, `noUnusedLocals`, `noUnusedParameters`). Errors on unused variables/parameters.

9. **Code Splitting & Lazy Loading** - Pages and ChatbotWidget are lazy-loaded via React.lazy(). Reduces initial bundle size and speeds up first page load.

10. **Vendor Chunk Splitting** - Separate chunks for React, icons, and voice libraries allow better caching and parallel downloads.

## Common Patterns & State Management

### Navigation & Routing
- Use `window.navigate('/path')` for programmatic navigation (function defined in App.tsx)
- Routing automatically scrolls to top on route change (handled in `App.tsx` via popstate listener)
- Example: `window.navigate('/contact')` or `window.navigate('/services/ai-chatbots')`
- For event-driven navigation: dispatch custom events like `new Event('openChatbot')`

### Global API Functions
The following functions are attached to `window` for global access:
- **`window.navigate(path: string)`** - Programmatic navigation using `history.pushState()`. Use this instead of direct href changes to ensure proper routing state management and scroll-to-top behavior.
  - Example: `window.navigate('/services/ai-chatbots')`
  - Called from: Button click handlers, form submissions, navigation menu items
  - Internally triggers `popstate` event which updates component state and scrolls to top

### Component Communication
- **Custom Events**: Used for global UI triggers (e.g., `openChatbot` event from buttons)
- **localStorage**: Tracks session state (e.g., `chatbot_visited` to prevent duplicate auto-opens)
- **Props**: Primary method for component data flow (pages pass `citySlug` to LocationPage, etc.)

### SEO & Meta Tags

**SEOHead Component** (`src/components/SEOHead.tsx`):
All pages must use the `SEOHead` component to set metadata. It handles:
- Page title (appears in browser tab and search results)
- Meta description (preview text in search results)
- Canonical URL (automatically set to `https://www.antekautomation.com${path}`, prevents duplicate content issues)
- Open Graph tags (og:title, og:description, og:url, og:type)
- Twitter Card tags (twitter:card, twitter:title, twitter:description)
- JSON-LD schema markup (helps search engines understand page content)
- Breadcrumb schema (optional, for hierarchical page relationships)

**Usage Example:**
```typescript
import { SEOHead } from '../components/SEOHead';

export const MyPage = () => {
  return (
    <>
      <SEOHead
        title="Page Title | Antek Automation"
        description="Meta description that appears in search results (150-160 chars ideal)"
        path="/services/ai-chatbots"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'AI Chatbots', url: '/services/ai-chatbots' }
        ]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Antek Automation',
          url: 'https://antekautomation.com'
        }}
      />
      {/* Page content */}
    </>
  );
};
```

**Important Notes:**
- Always include brand name in title (e.g., "Page Title | Antek Automation")
- Keep descriptions 150-160 characters for optimal search result display
- The `path` prop is used to generate canonical URL and should match the route
- Breadcrumbs are optional but recommended for service/location pages (improves SEO)
- Use LocalBusiness schema for location pages, Organization for general pages
- Organization schema defined at page level (see `HomePage.tsx` for example)
- Schema markup should include context data relevant to each page (services, location, testimonials, etc.)
- Open Graph and Twitter Card tags are automatically generated from title, description, and URL

**SEO Assets** (in `public/`):
- `sitemap.xml` - Complete site structure with lastmod dates (update when adding new pages/locations)
- `robots.txt` - Search engine crawler permissions
- `llms.txt` - AI crawler context file

### Webhook Communication & Error Handling
- All webhook calls use `fetch()` with POST requests
- Requests include `timestamp: new Date().toISOString()`
- Include `source` field to identify request origin (e.g., `"website_chatbot"`)
- Session tracking: Generate unique `sessionId` format: `session_${timestamp}_${randomId}`

**Error Handling Pattern** (used in ChatbotWidget.tsx and ContactPage.tsx):
```typescript
try {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, message, timestamp, pageUrl, source })
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  // Use data from webhook
} catch (error) {
  console.error('Webhook error:', error);
  // Show fallback UI message to user, don't expose error details
  // Example: "Sorry, I'm having trouble connecting. Please try again."
}
```

**Key Principles:**
- Always wrap webhook calls in try/catch
- Check `response.ok` for HTTP errors
- Show user-friendly fallback messages on failure (don't expose raw errors)
- Log errors to console for debugging, but never show to users
- Webhook failures should never block UI or prevent form submission

## File Reference

### Pages
- `src/pages/HomePage.tsx` - Landing page with hero, services overview, industries, organization schema
- `src/pages/ContactPage.tsx` - Contact form for lead capture, sends to contact webhook
- `src/pages/AIChatbotsPage.tsx` - Service detail page: AI chatbots, features, benefits
- `src/pages/AIVoiceAssistantsPage.tsx` - Service detail page: Voice AI with ElevenLabs demo integration
- `src/pages/WorkflowAutomationPage.tsx` - Service detail page: Workflow automation solutions
- `src/pages/LocationPage.tsx` - Dynamic location pages (receives `citySlug` prop from route)
- `src/pages/TermsOfBusinessPage.tsx` - Legal terms of service and business conditions
- `src/pages/PrivacyPolicyPage.tsx` - Privacy policy, cookie policy, data protection details

### Components
- `src/components/Navigation.tsx` - Global header with logo, nav links, services dropdown, responsive menu
- `src/components/Footer.tsx` - Global footer with links, copyright info, uses SocialLinks component
- `src/components/ChatbotWidget.tsx` - AI chatbot widget (persistent, all pages, webhook-driven, auto-opens first visit)
- `src/components/VoiceChat.tsx` - Voice chat modal with ElevenLabs agent integration
- `src/components/Button.tsx` - Button primitive: `variant="primary"` or `variant="secondary"`, brutalist styling
- `src/components/Card.tsx` - Card primitive: `hover` prop enables translate + shadow effect on hover
- `src/components/Icon.tsx` - Icon wrapper component using lucide-react
- `src/components/SEOHead.tsx` - Sets meta tags, title, description, JSON-LD schema markup
- `src/components/SocialLinks.tsx` - Social media links component (Twitter, YouTube, LinkedIn, Google Business)
- `src/components/ChatbotDemoButton.tsx` - Reusable CTA button to trigger chatbot widget demo
- `src/components/VoiceAgentDemoButton.tsx` - Reusable CTA button to launch voice agent modal
- `src/components/VoiceDemoButton.tsx` - Alternative variant of voice demo button

### Data & Types
- `src/data/cities.ts` - City data for location pages (name, slug, PAS framework content, case studies, testimonials)
- `src/data/caseStudies.ts` - Case study data (restaurant, financial services, cleaning services) with metrics
- `src/types/index.ts` - All TypeScript interfaces: `ContactFormData`, `ChatMessage`, `ChatState`
- `src/constants/index.ts` - Application constants (ElevenLabs agent ID, chatbot config, webhook sources, company info)

### Utilities
- `src/utils/analytics.ts` - Google Analytics tracking helper (trackPageView function for route changes)

### Configuration
- `vite.config.ts` - Vite build config (React plugin, lucide-react HMR optimisation)
- `tailwind.config.js` - Tailwind theme (colors, shadows, custom utilities)
- `postcss.config.js` - PostCSS config (Tailwind and Autoprefixer)
- `eslint.config.js` - ESLint config (v9 flat format, React Hooks rules enforced)
- `tsconfig.json` - Root TypeScript config (project references)
- `tsconfig.app.json` - App TypeScript config (strict mode enabled)

## Working with the Codebase

### Understanding Code Splitting & Lazy Loading

**Important Pattern**: Most pages are lazy-loaded to keep the initial bundle small (~60KB gzipped). This affects how components are imported:

```typescript
// ✅ HomePage is eagerly loaded (always available, shown on initial route)
import { HomePage } from './pages/HomePage';

// ✅ Other pages are lazy-loaded (only imported when route is visited)
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AIChatbotsPage = lazy(() => import('./pages/AIChatbotsPage'));
const AIVoiceAssistantsPage = lazy(() => import('./pages/AIVoiceAssistantsPage'));

// ✅ Utilities and layout components are eagerly imported (available everywhere)
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
```

**Why HomePage is NOT lazy-loaded:**
- HomePage is the landing page and needs to render immediately on first visit
- Lazy loading HomePage would add unnecessary delay to the initial page load
- Other pages (Contact, Services) are lazy-loaded since they're accessed via navigation

**When adding a new page:**
1. Create component in `src/pages/NewPage.tsx`
2. In `App.tsx`, use lazy loading: `const NewPage = lazy(() => import('./pages/NewPage').then(m => ({ default: m.NewPage })));`
3. Add route case and wrap in `<Suspense>` with fallback (see existing pattern in renderPage())
4. Do NOT convert existing lazy-loaded pages to synchronous imports unless it's a landing page

**Performance Impact:**
- First page load: HomePage, Navigation, Footer, and vendor libraries load immediately
- Route change: Relevant page chunk downloads and renders (might have brief loading state with Suspense fallback)
- This trade-off improves First Contentful Paint (FCP) for initial page load while keeping bundle small

### Git & Commit Workflow

No pre-commit hooks are currently installed (no Husky). Run checks manually before committing:

```bash
# 1. Run type checker (catches TypeScript errors)
npm run typecheck

# 2. Run linter (catches style issues and React hook violations)
npm run lint

# 3. Build to verify production bundling works
npm run build

# Commit only after all checks pass
git commit -m "Description of changes"
```

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
- Add city data to `src/data/cities.ts` with unique slug (e.g., `'bristol'`)
- Route automatically works: `/locations/bristol` maps to LocationPage with `citySlug` prop
- No changes to `src/App.tsx` needed - uses dynamic route matching
- LocationPage component extracts `citySlug` from route and looks up data
- Update `public/sitemap.xml` to include the new location URL

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
- Agent ID is centralized in `src/constants/index.ts` as `CONSTANTS.ELEVENLABS_AGENT_ID`
- Sends session context including `sessionId`, `userId`, page URL to ElevenLabs
- Modal opens via custom event: `window.dispatchEvent(new Event('openVoiceChat'))`
- Voice integration available on `AIVoiceAssistantsPage` as demo

### Application Constants
The `src/constants/index.ts` file centralizes all application-wide constants:
- **ElevenLabs Configuration**: `ELEVENLABS_AGENT_ID` for voice agent integration
- **Chatbot Settings**: Auto-open delay (5000ms), localStorage key (`chatbot_visited`), welcome message
- **Webhook Sources**: `WEBHOOK_SOURCE_CHATBOT` and `WEBHOOK_SOURCE_CONTACT_FORM` constants for tracking
- **Company Info**: Company name, domain, contact email

**Usage Pattern:**
```typescript
import { CONSTANTS } from '../constants';

// Example: Using chatbot constants
const autoOpenDelay = CONSTANTS.CHATBOT_AUTO_OPEN_DELAY_MS;
const visitedKey = CONSTANTS.CHATBOT_VISITED_KEY;

// Example: Using webhook source constants
const payload = { source: CONSTANTS.WEBHOOK_SOURCE_CHATBOT, ... };
```

**Why Centralized Constants:**
- Single source of truth for configuration values
- Easier to update values across the entire app
- Type-safe access to constants (no magic strings)
- Improves maintainability and reduces errors from typos

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

## Debugging & Troubleshooting

### Hot Module Reload (HMR) Not Working
- Vite should auto-reload components on save. If not working, try `npm run dev` again
- Check that lucide-react is not being dependency-optimised (it's excluded in vite.config.ts)
- Hard refresh browser (Cmd+Shift+R on Mac)
- Check console for errors that might block HMR (TypeScript errors, import failures)

### Type Errors After Code Changes
- Run `npm run typecheck` to catch all type errors before committing
- Common issues: unused imports, missing types, prop mismatches
- Check `tsconfig.app.json` for strict mode settings
- Unused variables/parameters are errors, not warnings - remove or prefix with `_` (e.g., `_unused`)

### Styling Issues with Tailwind
- After adding new custom colors/shadows to `tailwind.config.js`, restart dev server
- Verify class names follow Tailwind syntax (no spaces in compound classes)
- Check that CSS layers are imported in `src/index.css` in correct order
- Use browser DevTools to inspect computed styles - Tailwind classes should appear in `<style>` tags

### Webhook Testing
- Use `curl` or Postman to test webhook URLs locally
- Check browser DevTools Network tab to see actual request/response
- Verify environment variables are loaded: `VITE_*` vars are read at build time
- For local testing, use ngrok and **restart dev server** after updating URLs (env vars are baked in at startup)
- Common webhook errors:
  - `CORS` - webhook URL is cross-origin (n8n should have CORS enabled)
  - `TypeError: fetch failed` - webhook URL unreachable (verify ngrok tunnel is running)
  - `HTTP 404` - webhook path doesn't exist on n8n instance

### Linting Issues
- Run `npm run lint` to see all ESLint violations
- React Hooks rules are enforced - ensure hooks called at top level in components
- Unused imports/variables will cause errors in strict mode
- Fix most issues automatically: `npx eslint . --fix`

### Router Issues
- **Route not working**: Check `src/App.tsx` for the route case in the switch statement
- **Page not rendering**: Ensure page component is imported (or lazy-loaded) and routes are in correct path format
- **Scroll to top not working**: Verify popstate listener is attached in App.tsx
- **Old route still showing**: Hard refresh (Cmd+Shift+R) to clear browser cache

### Component State Issues
- **Props not updating**: Check that props are declared in component signature (not destructured from `children`)
- **Hooks running multiple times**: Verify dependency arrays are correct (`useEffect`, `useCallback`, etc.)
- **localStorage not working**: Check browser privacy settings (might be blocked in incognito mode)

### Build Issues
- **Build fails**: Check console output for specific errors (often missing types, import errors)
- **Bundle too large**: Check `dist/` for `.map` files (source maps are normal in production for debugging)
- **Assets missing**: Verify all imports use correct relative paths (e.g., `../components/Button`)
- **Code splitting not working**: Check Vite config - manual chunks might be conflicting with lazy loading

### Common Patterns in Console

```typescript
// Debugging the current route
console.log(window.location.pathname);

// Testing navigation
window.navigate('/contact');

// Checking if localStorage is available
console.log(localStorage.getItem('chatbot_visited'));

// Inspecting webhook response
const response = await fetch(url, { method: 'POST', body: JSON.stringify(data) });
console.log(await response.json());

// Check what environment variables are available
console.log({ VITE_CONTACT_WEBHOOK_URL: import.meta.env.VITE_CONTACT_WEBHOOK_URL });
```

### Performance Debugging
- **Slow page load**: Check Network tab in DevTools for large files or slow requests
- **Runtime lag**: Use React DevTools Profiler to find slow components
- **High CPU usage**: Check for infinite loops or excessive re-renders (look for `useEffect` without proper dependencies)
- **Memory leaks**: Ensure event listeners are cleaned up in `useEffect` return functions

## Documentation Files

### CLAUDE.md (This File)
Guidance for Claude Code and other AI assistants working with this codebase. Contains architecture, patterns, and troubleshooting.

### llms.txt
Context file for Large Language Models (AI training and inference). Contains comprehensive project overview, technology stack, performance metrics, and implementation patterns. Used to provide AI assistants with accurate codebase context for code analysis and generation.

**Location:** `llms.txt` (root directory)

**When to Update:**
- When major architectural changes are made
- When adding new services or significant features
- When updating technology dependencies
- When improving performance significantly
- Keep sync with CLAUDE.md for consistency

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json`: Root config that references app and node configs
- `tsconfig.app.json`: App-specific TypeScript configuration
- `tsconfig.node.json`: Node/Vite configuration

Run `npm run typecheck` before committing to catch type errors.

## Performance Considerations

### Code Splitting & Lazy Loading
- **Initial Load**: HomePage (eager), Navigation, Footer, and necessary vendor libraries load on first visit (~60KB gzipped)
- **Lazy Loaded**: Service pages (Contact, AI Chatbots, AI Voice, Workflow Automation, Location pages) and ChatbotWidget load on-demand via `React.lazy()` when needed
- **React.lazy() + Suspense**: Pages wrapped with lazy loading have a Suspense fallback (blank container with `min-h-screen` styling) while chunks download. This is intentional to keep initial bundle small.
- **ChatbotWidget**: Lazy-loads separately and auto-opens after 5 seconds on first visit (doesn't block initial render). Improves First Contentful Paint (FCP).
- **Chunk Names**: App.tsx uses `.then(m => ({ default: m.ComponentName }))` pattern to extract named exports from dynamic imports (ensures correct component name appears in build output)

**Important:** When modifying App.tsx, maintain the current lazy-loading pattern. HomePage should remain eagerly loaded (it's the landing page). Do not convert other lazy-loaded pages to synchronous imports unless they become landing pages.

### Bundle Optimisation
- Lucide-react icons excluded from dependency pre-optimisation (uses native ES modules)
- Manual vendor chunks prevent duplication and improve browser caching
- Source maps enabled in production for debugging without exposing source

### When to Optimise Further
- Monitor Core Web Vitals using PageSpeed Insights
- If LCP is slow, consider inlining critical CSS or preloading fonts
- If FID/INP is high, check for long tasks in event handlers (use `setTimeout` to defer work)
- If CLS is high, ensure images have fixed dimensions and avoid layout shifts

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
- Lucide-react library excluded from dependency optimisation (faster HMR during development)
- Manual chunk splitting configured for optimised bundle:
  - `vendor-react`: React and React DOM
  - `vendor-icons`: lucide-react
  - `vendor-elevenlabs`: @elevenlabs/react
  - Lazy-loaded pages split into separate chunks
- Source maps enabled for production debugging

**Build Process:**
```bash
npm run build      # Creates optimised production build in dist/
npm run preview    # Preview production build locally
```

**Output:**
- Production build: `dist/` directory (minified, optimised, with source maps)
- Includes all assets, CSS, JavaScript chunks split by vendor/page

**Deployment Ready:**
- Static site - can be deployed to any static hosting (Vercel, Netlify, AWS S3, etc.)
- No server-side rendering needed
- All routing is client-side via `window.location.pathname`
- **Critical**: Server must serve `index.html` for all routes (SPA fallback). This allows direct deep linking to routes like `/services/ai-chatbots`
  - Vercel and Netlify auto-configure this for SPAs
  - For other hosts, configure 404 → index.html rewrite or enable trailing slash rewrites
- Environment variables must be set at build time or runtime via `.env` file

**Vercel Configuration** (`vercel.json`):
- SPA fallback: All routes rewrite to `/index.html`
- Caching headers:
  - Assets (`/assets/*`, SVG, PNG): 1 year immutable cache
  - `index.html`: 1 hour cache with revalidation
- Security headers: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy
- Optimized for performance and security out of the box

**AI Crawler Support:**
- Site allows AI crawlers (`robots.txt` permits `User-agent: *` for LLM training crawlers)
- `llms.txt` file provides structured context for AI systems
- Enables AI assistants to understand codebase structure and contribute more effectively

## TypeScript Strictness

**Strict Mode Enabled** (`tsconfig.app.json`):
- `strict: true` - All strict type checking rules enabled
- `noUnusedLocals: true` - Error on unused variables
- `noUnusedParameters: true` - Error on unused function parameters
- `noFallthroughCasesInSwitch: true` - Error on switch statement fallthrough
- `jsx: react-jsx` - Automatic JSX transform (no React import needed)

**Important:** All code must pass strict TypeScript checks. Run `npm run typecheck` before committing.
