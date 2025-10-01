import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#/' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#/pricing' },
    { label: 'Contact', href: '#/contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-off-white border-b-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-charcoal text-off-white flex items-center justify-center font-black text-2xl border-3 border-charcoal">
              A
            </div>
            <span className="font-black text-2xl uppercase text-charcoal">
              Antek Automation
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary">Get Started</Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
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
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold uppercase text-sm text-charcoal hover:text-terracotta transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
