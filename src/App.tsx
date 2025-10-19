import { useState, useEffect, Suspense, lazy } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

// Lazy load chatbot widget (non-critical for initial load, loads after 5s anyway)
const ChatbotWidget = lazy(() => import('./components/ChatbotWidget').then(m => ({ default: m.ChatbotWidget })));

// Lazy load service pages (non-critical for initial load)
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AIChatbotsPage = lazy(() => import('./pages/AIChatbotsPage').then(m => ({ default: m.AIChatbotsPage })));
const AIVoiceAssistantsPage = lazy(() => import('./pages/AIVoiceAssistantsPage').then(m => ({ default: m.AIVoiceAssistantsPage })));
const WorkflowAutomationPage = lazy(() => import('./pages/WorkflowAutomationPage').then(m => ({ default: m.WorkflowAutomationPage })));
const LocationPage = lazy(() => import('./pages/LocationPage').then(m => ({ default: m.LocationPage })));

// Global navigate function for easy access in onClick handlers
const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};
declare global {
  interface Window {
    navigate: (path: string) => void;
  }
}
window.navigate = navigate;

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    // Handle location routes
    if (currentPath.startsWith('/locations/')) {
      const citySlug = currentPath.replace('/locations/', '');
      return <LocationPage citySlug={citySlug} />;
    }

    switch (currentPath) {
      case '/contact':
        return <ContactPage />;
      case '/services/ai-chatbots':
        return <AIChatbotsPage />;
      case '/services/ai-voice-assistants':
        return <AIVoiceAssistantsPage />;
      case '/services/workflow-automation':
        return <WorkflowAutomationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />
      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-off-white" />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatbotWidget />
      </Suspense>
    </div>
  );
}

export default App;
