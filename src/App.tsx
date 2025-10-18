import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { AIChatbotsPage } from './pages/AIChatbotsPage';
import { AIVoiceAssistantsPage } from './pages/AIVoiceAssistantsPage';
import { WorkflowAutomationPage } from './pages/WorkflowAutomationPage';
import { LocationPage } from './pages/LocationPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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
      <main>{renderPage()}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}

export default App;
