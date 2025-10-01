import React from 'react';
import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="bg-mid-gray border-t-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Icon letter="A" size="sm" />
              <span className="font-black text-xl uppercase text-off-white">
                Antek
              </span>
            </div>
            <p className="text-off-white leading-normal">
              AI automation solutions for UK service businesses. Save time, increase revenue, and delight customers.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#chatbots" className="text-off-white hover:text-terracotta transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#voice" className="text-off-white hover:text-terracotta transition-colors">
                  Voice AI
                </a>
              </li>
              <li>
                <a href="#automation" className="text-off-white hover:text-terracotta transition-colors">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">Industries</h4>
            <ul className="space-y-3">
              <li>
                <a href="#industries" className="text-off-white hover:text-terracotta transition-colors">
                  Tradespeople
                </a>
              </li>
              <li>
                <a href="#industries" className="text-off-white hover:text-terracotta transition-colors">
                  Cleaning Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-off-white hover:text-terracotta transition-colors">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="#industries" className="text-off-white hover:text-terracotta transition-colors">
                  Beauty & Wellness
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-off-white">
                Email: hello@antekautomation.co.uk
              </li>
              <li className="text-off-white">
                Phone: +44 20 1234 5678
              </li>
              <li className="text-off-white">
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-3 border-charcoal mt-12 pt-8">
          <p className="text-center text-off-white text-sm">
            © {new Date().getFullYear()} Antek Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
