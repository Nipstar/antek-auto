import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';

function App() {
  const currentPath = window.location.hash.slice(1) || '/';

  const renderPage = () => {
    switch (currentPath) {
      case '/contact':
        return <ContactPage />;
      case '/pricing':
        return <PricingPage />;
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
