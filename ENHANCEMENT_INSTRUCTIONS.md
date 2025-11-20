# Antek Website Enhancement Instructions - Session 5

**Purpose:** Step-by-step guide to apply demo button enhancements and voice agent integration to the alternate site version (aiautomationagencyuk.com).

**Estimated Time:** 30-45 minutes
**Difficulty Level:** Intermediate

---

## Overview of Changes

This session adds:
1. **Voice Agent Demo Integration** on LocationPage
2. **Three-Button Hero CTA System** on WorkflowAutomationPage with scroll-to-section functionality
3. **Enhanced Header CTA Button** with improved styling and "Book Free Call" copy
4. Comprehensive styling with brutalist design patterns and smooth animations

---

## Prerequisites

- Node.js and npm installed
- Your alternate site project open (aiautomationagencyuk.com)
- Access to the git repository
- All pre-commit checks passing (typecheck, lint, build)

---

## Step-by-Step Implementation

### PART 1: LocationPage.tsx - Voice Agent Demo Integration

**File Location:** `src/pages/LocationPage.tsx`

#### Step 1.1: Update Imports

Find this line (currently line 1):
```typescript
import { useState, lazy, Suspense } from 'react';
```

**Verify it matches.** If your file still has the old import (missing lazy, Suspense):
```typescript
// OLD - Replace this:
import { useState } from 'react';

// NEW - With this:
import { useState, lazy, Suspense } from 'react';
```

#### Step 1.2: Add VoiceChat Lazy Import

After the imports section (after line 7), add this:
```typescript
// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));
```

**Location:** Should be right before the `const navigate = (path: string) => {` function.

#### Step 1.3: Add VoiceAgentDemoButton & ChatbotDemoButton Imports

Verify these imports exist (should be around line 6-7):
```typescript
import { ChatbotDemoButton } from '../components/ChatbotDemoButton';
import { VoiceAgentDemoButton } from '../components/VoiceAgentDemoButton';
```

If missing, add them after the other component imports.

#### Step 1.4: Add State Management

Inside the `LocationPage` component function, add this as the first line (before any other code):
```typescript
const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);
```

**Location:** Right after `export function LocationPage({ citySlug }: LocationPageProps) {`

#### Step 1.5: Update Hero Section Buttons

Find the hero section that starts with `{/* Hero Section */}`. Look for the button container (should be around line 105-110).

**Find this:**
```typescript
<div className="flex flex-col md:flex-row gap-4 md:gap-6">
  <VoiceAgentDemoButton onClick={() => setIsVoiceChatOpen(true)} />
  <ChatbotDemoButton onClick={() => window.dispatchEvent(new Event('openChatbot'))} />
</div>
```

**If your version has different buttons, replace the entire container with the above code.**

#### Step 1.6: Add VoiceChat Modal Rendering

Find the very end of the LocationPage component (before the final `</div>` that closes the main return JSX).

**Add this before the final `</div>`:**
```typescript
      {/* Voice Chat Modal */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
```

**Verify placement:** This should be inside the outer `<div className="bg-off-white">` but outside all section elements.

#### Verification Step 1
```bash
npm run typecheck
npm run lint
```

Should have no errors. Continue only if both pass.

---

### PART 2: WorkflowAutomationPage.tsx - Three-Button Hero CTA System

**File Location:** `src/pages/WorkflowAutomationPage.tsx`

#### Step 2.1: Update Imports

Find line 1:
```typescript
import { Button } from '../components/Button';
```

**Replace with:**
```typescript
import { useState, lazy, Suspense } from 'react';
import { Button } from '../components/Button';
```

#### Step 2.2: Add VoiceChat Lazy Import

After the imports section (after line 5), add:
```typescript
// Lazy load voice chat component (only needed when user clicks demo)
const VoiceChat = lazy(() => import('../components/VoiceChat').then(m => ({ default: m.VoiceChat })));
```

**Location:** Before the `const navigate = (path: string) => {` function.

#### Step 2.3: Add State Management

Inside the `WorkflowAutomationPage` component function, add this as the first line:
```typescript
const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);
```

**Location:** Right after `export function WorkflowAutomationPage() {`

#### Step 2.4: Replace Hero Button Section

Find the hero section buttons (around line 39-44). This section starts with something like:
```typescript
<div className="flex flex-wrap gap-4">
  <Button variant="primary" onClick={() => navigate('/contact')}>
    Get Started
  </Button>
  <Button variant="secondary" onClick={() => ...}>
    See Examples
  </Button>
</div>
```

**Replace the entire button container with:**
```typescript
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-wrap">
              <button
                onClick={() => document.getElementById('popular-workflows')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group text-left"
              >
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-terracotta blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

                {/* Main button */}
                <div className="relative px-6 md:px-8 py-3 md:py-4 bg-terracotta border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
                  <div className="font-black uppercase text-sm md:text-base text-off-white tracking-tight-lg">
                    See What We Automate
                  </div>
                  <div className="text-xs text-off-white mt-1">
                    Common workflows for UK trades
                  </div>
                </div>
              </button>

              <button
                onClick={() => setIsVoiceChatOpen(true)}
                className="relative group text-left"
              >
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-soft-sage blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

                {/* Main button */}
                <div className="relative px-6 md:px-8 py-3 md:py-4 bg-soft-sage border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
                  {/* Live badge */}
                  <div className="absolute -top-3 -right-3 flex items-center space-x-1 bg-soft-sage border-2 border-charcoal px-2 py-1 rounded-full">
                    <span className="w-2 h-2 bg-charcoal rounded-full animate-pulse"></span>
                    <span className="text-xs font-black uppercase text-charcoal">Live</span>
                  </div>

                  <div className="font-black uppercase text-sm md:text-base text-charcoal tracking-tight-lg">
                    🎙️ Try Our Voice AI Agent Live
                  </div>
                  <div className="text-xs text-charcoal mt-1">
                    Hear the quality of AI we build • No signup • 🟢 Available 24/7
                  </div>
                </div>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="relative group text-left"
              >
                {/* Animated background glow */}
                <div className="absolute -inset-1 bg-mid-gray blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

                {/* Main button */}
                <div className="relative px-6 md:px-8 py-3 md:py-4 bg-off-white border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
                  <div className="font-black uppercase text-sm md:text-base text-charcoal tracking-tight-lg">
                    Get Custom Quote
                  </div>
                  <div className="text-xs text-charcoal mt-1">
                    Discuss your needs
                  </div>
                </div>
              </button>
            </div>
```

#### Step 2.5: Add ID to Popular Workflows Section

Find the "Popular Workflows" section (should have text "Popular Workflows" in an h2). The section tag should look like:
```typescript
<section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
```

**Update to:**
```typescript
<section id="popular-workflows" className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
```

#### Step 2.6: Add VoiceChat Modal Rendering

Find the very end of the WorkflowAutomationPage component (before the final `</div>`).

**Add this before the final `</div>`:**
```typescript
      {/* Voice Chat Modal */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
```

#### Verification Step 2
```bash
npm run typecheck
npm run lint
```

Should have no errors. Continue only if both pass.

---

### PART 3: Navigation.tsx - Enhanced Header CTA Button

**File Location:** `src/components/Navigation.tsx`

#### Step 3.1: Update Imports

Find the imports at the top. Currently should look like:
```typescript
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';
```

**Replace with:**
```typescript
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
```

(Remove the Button import since we're not using it anymore)

#### Step 3.2: Replace Desktop Header Button

Find the desktop navigation buttons section (around line 37-79). Look for:
```typescript
<Button variant="primary" onClick={() => navigate('/contact')}>Get Started</Button>
```

**Replace with:**
```typescript
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-terracotta border-3 border-charcoal ring-1 ring-white ring-inset shadow-brutal font-black uppercase text-off-white text-sm hover:shadow-brutal-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Book Free Call →
            </button>
```

**Location:** Inside the `<div className="hidden md:flex items-center space-x-8">` section.

#### Step 3.3: Replace Mobile Header Button

Find the mobile navigation section (around line 95-124). Look for:
```typescript
<Button variant="primary" className="w-full" onClick={() => { navigate('/contact'); setIsOpen(false); }}>
  Get Started
</Button>
```

**Replace with:**
```typescript
              <button
                onClick={() => { navigate('/contact'); setIsOpen(false); }}
                className="w-full px-6 py-3 bg-terracotta border-3 border-charcoal ring-1 ring-white ring-inset shadow-brutal font-black uppercase text-off-white text-sm hover:shadow-brutal-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Book Free Call →
              </button>
```

**Location:** Inside the `{isOpen && (...)}` section, near the bottom.

#### Verification Step 3
```bash
npm run typecheck
npm run lint
```

Should have no errors. Continue only if both pass.

---

### PART 4: Final Testing & Build

#### Step 4.1: Full Type Check
```bash
npm run typecheck
```
Expected output: No errors

#### Step 4.2: Full Lint Check
```bash
npm run lint
```
Expected output: No errors

#### Step 4.3: Production Build
```bash
npm run build
```
Expected output:
- ✓ Build successful
- dist/ folder created with all chunks
- No warnings or errors

#### Step 4.4: Manual Testing

Open the dev server:
```bash
npm run dev
```

**Test checklist:**

1. **LocationPage Tests:**
   - Navigate to `/locations/[any-location]`
   - Verify "Call Our AI Agent" button is visible
   - Click it → Voice chat modal should appear
   - Verify "Try Live Chatbot" button launches chatbot
   - Verify both buttons have distinct styling

2. **WorkflowAutomationPage Tests:**
   - Navigate to `/services/workflow-automation`
   - Verify three buttons in hero: Orange | Green | White
   - Click "See What We Automate" → Should scroll to "Popular Workflows" section
   - Click "Try Our Voice AI Agent Live" → Voice modal should appear
   - Click "Get Custom Quote" → Should navigate to contact page
   - Verify LIVE badge with pulsing dot on green button
   - Test hover states: buttons should scale and shadow increase

3. **Navigation Tests:**
   - Check header button says "Book Free Call →"
   - Hover over button → should scale 1.05x and shadow should increase
   - Click button → should navigate to contact page
   - Test on mobile → button should be visible and functional
   - Test on desktop → button should have same styling and behavior

4. **Responsive Tests:**
   - Resize browser to mobile (320px width)
   - Verify all buttons stack vertically
   - Verify text is readable
   - Resize to tablet (768px width)
   - Verify buttons align horizontally
   - Verify spacing looks correct

---

## Deployment Checklist

Before pushing to production:

- [ ] All tests pass locally
- [ ] No console errors in DevTools
- [ ] All three demo buttons functional
- [ ] Voice agent demo launches correctly
- [ ] Header button styling visible and hover works
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] Production build completes successfully

---

## Git Commit

When ready to commit to your repository:

```bash
git add -A
git commit -m "Enhance demo buttons and improve header CTA

- LocationPage: Add VoiceChat integration for voice agent demo
- WorkflowAutomationPage: Redesign hero with three distinct CTAs
  - Orange button: See What We Automate (scroll to workflows)
  - Green button: Try Voice AI Agent Live with LIVE badge
  - White button: Get Custom Quote (contact)
- Navigation: Update header 'Book Free Call' with scale hover effect
- Verify: TypeScript, ESLint, and production build all pass"
git push origin main
```

---

## Troubleshooting

### Issue: "Cannot find module VoiceChat"
**Solution:** Verify `src/components/VoiceChat.tsx` exists. If missing, copy from the primary site version.

### Issue: "isVoiceChatOpen is undefined"
**Solution:** Verify Step 1.4 and Step 2.3 - the state must be declared inside the component function before any JSX.

### Issue: "Button still says 'Get Started'"
**Solution:** Verify you replaced the entire button JSX in Step 3.2 and 3.3, not just the text content.

### Issue: "Scroll to section doesn't work"
**Solution:** Verify Step 2.5 - the `id="popular-workflows"` was added to the section tag, not inside it.

### Issue: "Build fails with CSS errors"
**Solution:** Verify all Tailwind class names are correct (check spelling of `soft-sage`, `shadow-brutal-lg`, `ring-white`, etc.). Restart dev server if classes aren't recognized.

### Issue: "TypeScript errors with lazy/Suspense"
**Solution:** Verify Step 1.1 and Step 2.1 - ensure imports include both `lazy` and `Suspense` from React.

---

## File Summary

| File | Changes | Complexity |
|------|---------|------------|
| LocationPage.tsx | 4 modifications (import, state, buttons, modal) | Medium |
| WorkflowAutomationPage.tsx | 6 modifications (imports, state, buttons, ID, modal) | High |
| Navigation.tsx | 3 modifications (remove import, 2 button replacements) | Low |
| **Total** | **13 modifications** | **~30-45 min** |

---

## Notes

- All styling uses existing Tailwind utilities from your project
- No new packages or dependencies required
- Changes are backward compatible
- Voice agent requires ElevenLabs API configured (should already be in your .env)
- All changes follow the brutalist design system already in use

---

## Success Criteria

You'll know the implementation is successful when:

✅ All npm checks pass (typecheck, lint, build)
✅ Production build completes in <10 seconds
✅ All three buttons on WorkflowAutomationPage are functional
✅ Voice agent demo launches on LocationPage
✅ Header "Book Free Call" button has smooth hover animation
✅ Responsive layout works on all screen sizes
✅ No console errors in DevTools

---

**Need Help?** Compare your changes with the primary site version or refer to the CHANGES_SUMMARY.md file for detailed code examples.
