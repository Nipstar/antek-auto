import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './Button';

const navigate = (path: string) => {
  window.history.pushState(null, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/', onClick: () => navigate('/') },
    { label: 'Industries', href: '/', onClick: () => { navigate('/'); setTimeout(() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
    { label: 'Contact', href: '/contact', onClick: () => navigate('/contact') },
  ];

  const serviceLinks = [
    { label: 'AI Chatbots', href: '/services/ai-chatbots' },
    { label: 'AI Voice Assistants', href: '/services/ai-voice-assistants' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-off-white border-b-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="Antek Automation Logo" className="w-14 h-14" />
            <span className="font-black text-2xl uppercase text-charcoal">
              Antek Automation
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => link.onClick?.()}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsServicesOpen(false)}
                  />
                  <div
                    className="absolute top-full left-0 mt-2 bg-off-white border-3 border-charcoal shadow-brutal min-w-[260px] z-20"
                  >
                    {serviceLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => { navigate(link.href); setIsServicesOpen(false); }}
                        className="block w-full text-left px-6 py-4 font-bold uppercase text-sm text-charcoal hover:bg-warm-beige transition-colors border-b-3 border-charcoal last:border-b-0 bg-transparent border-none cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <Button variant="primary" onClick={() => navigate('/contact')}>Get Started</Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t-3 border-charcoal bg-warm-beige">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { link.onClick?.(); setIsOpen(false); }}
                  className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors text-left bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t-3 border-charcoal pt-4">
                <p className="font-black uppercase text-xs text-charcoal mb-3">Services</p>
                {serviceLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => { navigate(link.href); setIsOpen(false); }}
                    className="block font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors mb-3 text-left w-full bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <Button variant="primary" className="w-full" onClick={() => { navigate('/contact'); setIsOpen(false); }}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
