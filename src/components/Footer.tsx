import { getAllCities } from '../data/cities';
import { CONSTANTS } from '../constants';

export function Footer() {
  const cities = getAllCities();

  return (
    <footer className="bg-mid-gray border-t-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Antek Automation Logo" className="w-12 h-12" />
              <span className="font-black text-lg uppercase tracking-tight-lg text-off-white">
                Antek Automation
              </span>
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              AI automation solutions for UK service businesses. Save time, increase revenue, and delight customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="/services/ai-chatbots" className="text-gray-300 hover:text-terracotta transition-colors text-sm">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/services/ai-voice-assistants" className="text-gray-300 hover:text-terracotta transition-colors text-sm">
                  Voice AI
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="text-gray-300 hover:text-terracotta transition-colors text-sm">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Grid */}
          <div>
            <h4 className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Locations</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="text-gray-300 hover:text-terracotta transition-colors text-sm"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-gray-300">Email:</span>
                <br />
                <a href={`mailto:${CONSTANTS.CONTACT_EMAIL}`} className="text-gray-300 hover:text-terracotta transition-colors">
                  {CONSTANTS.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-gray-300">Phone:</span>
                <br />
                <a href="tel:03330389960" className="text-gray-300 hover:text-terracotta transition-colors">
                  03330 389960
                </a>
              </li>
              <li>
                <span className="text-gray-300">Address:</span>
                <br />
                <a href="https://maps.google.com/?q=Chantry+House,+38+Chantry+Way,+Andover,+SP10+1LZ" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-terracotta transition-colors">
                  Chantry House<br />38 Chantry Way<br />Andover, SP10 1LZ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <a href="/terms-of-business" className="text-gray-300 hover:text-terracotta transition-colors text-sm">
                  Terms of Business
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-terracotta transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-3 border-charcoal mt-16 pt-10">
          <p className="text-center text-gray-400 text-xs">
            © {new Date().getFullYear()} Antek Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
