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
- **Failing these checks will block your commits** if you have pre-commit hooks configured

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

The current route is determined by `window.location.pathname`. Navigation automatically scrolls to top on route change. Use the global `window.navigate(path)` function for programmatic navigation (e.g., `window.navigate('/contact')`). Note: There is no dedicated Pricing page - pricing information is included on the service-specific pages.

**URL Format:**
- **Development & Preview**: URLs appear as `http://localhost:5173/` or `http://localhost:4173/` (clean paths)
- **Production**: Deployed sites may use `https://antekautomation.com/` or `https://antekautomation.com/#/` depending on server config
- The browser address bar always shows the actual path (no hash needed for routing to work)

**Dynamic Location Routes:**
Location pages use a slug-based pattern (e.g., `/locations/london-ai-automation`). The `LocationPage` component receives the `citySlug` prop extracted from the route.

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
- Canonical URL (prevents duplicate content issues)
- JSON-LD schema markup (helps search engines understand page content)

**Usage Example:**
```typescript
import { SEOHead } from '../components/SEOHead';

export const MyPage = () => {
  return (
    <>
      <SEOHead
        title="Page Title | Antek Automation"
        description="Meta description that appears in search results (150-160 chars ideal)"
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
- Use LocalBusiness schema for location pages, Organization for general pages
- Organization schema defined at page level (see `HomePage.tsx` for example)
- Schema markup should include context data relevant to each page (services, location, testimonials, etc.)

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
- `vite.config.ts` - Vite build config (React plugin, lucide-react HMR optimisation)
- `tailwind.config.js` - Tailwind theme (colors, shadows, custom utilities)
- `postcss.config.js` - PostCSS config (Tailwind and Autoprefixer)
- `eslint.config.js` - ESLint config (v9 flat format, React Hooks rules enforced)
- `tsconfig.json` - Root TypeScript config (project references)
- `tsconfig.app.json` - App TypeScript config (strict mode enabled)

## Working with the Codebase

### Understanding Code Splitting & Lazy Loading

**Important Pattern**: Pages are lazy-loaded to keep the initial bundle small (~60KB gzipped). This affects how components are imported:

```typescript
// ✅ Pages are lazy-loaded (only imported when route is visited)
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AIChatbotsPage = lazy(() => import('./pages/AIChatbotsPage'));

// ✅ Utilities are eagerly imported (available everywhere)
import { SEOHead } from './components/SEOHead';
import { Navigation } from './components/Navigation';
```

**When adding a new page:**
1. Create component in `src/pages/NewPage.tsx`
2. In `App.tsx`, use lazy loading: `const NewPage = lazy(() => import('./pages/NewPage'));`
3. Add route case and wrap in `<Suspense>` with fallback (see HomePage pattern)
4. Do NOT convert existing lazy-loaded pages to synchronous imports

**Performance Impact:**
- First page load (~5 seconds): Only HomePage, Navigation, Footer load
- Route change: Relevant page chunk downloads and renders (might have brief loading state)
- This trade-off improves First Contentful Paint (FCP) for initial page load

### Git & Commit Workflow

This project may have pre-commit hooks that enforce quality checks. When committing:

```bash
# 1. Make your changes
git add src/...

# 2. Run checks (these must pass before committing)
npm run typecheck
npm run lint
npm run build

# 3. If checks fail, fix issues and try again
# 4. Commit when all checks pass
git commit -m "Description of changes"
```

If you encounter git errors after running checks:
- Pre-commit hooks might modify files (don't worry, this is normal)
- Re-run `git status` and verify changes are correct
- Re-add modified files and commit again

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

## TypeScript Configuration

The project uses TypeScript project references:
- `tsconfig.json`: Root config that references app and node configs
- `tsconfig.app.json`: App-specific TypeScript configuration
- `tsconfig.node.json`: Node/Vite configuration

Run `npm run typecheck` before committing to catch type errors.

## Performance Considerations

### Code Splitting & Lazy Loading
- **Initial Load**: Only HomePage, Navigation, Footer, and necessary vendor libraries load on first visit (~60KB gzipped)
- **Lazy Loaded**: Service pages and ChatbotWidget load on-demand via `React.lazy()` when needed
- **React.lazy() + Suspense**: Pages wrapped with lazy loading have a Suspense fallback (blank container) while chunks download. This is intentional to keep initial bundle small.
- **ChatbotWidget**: Lazy-loads after 5 seconds via separate chunk, doesn't block initial render. Improves First Contentful Paint (FCP).
- **Chunk Names**: App.tsx uses `.then(m => ({ default: m.ComponentName }))` pattern to extract named exports from dynamic imports

**Important:** When modifying App.tsx, maintain the current lazy-loading pattern. Do not convert lazy-loaded pages to synchronous imports unless performance testing shows it's beneficial.

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

## TypeScript Strictness

**Strict Mode Enabled** (`tsconfig.app.json`):
- `strict: true` - All strict type checking rules enabled
- `noUnusedLocals: true` - Error on unused variables
- `noUnusedParameters: true` - Error on unused function parameters
- `noFallthroughCasesInSwitch: true` - Error on switch statement fallthrough
- `jsx: react-jsx` - Automatic JSX transform (no React import needed)

**Important:** All code must pass strict TypeScript checks. Run `npm run typecheck` before committing.
