import { getAllCities } from '../data/cities';

export function Footer() {
  const cities = getAllCities();

  return (
    <footer className="bg-mid-gray border-t-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div>
            <a href="/" className="flex items-center space-x-3 mb-6 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Antek Automation Logo" className="w-12 h-12" />
              <span className="font-black text-xl uppercase text-off-white">
                Antek Automation
              </span>
            </a>
            <p className="text-off-white leading-normal">
              AI automation solutions for UK service businesses. Save time, increase revenue, and delight customers.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/ai-chatbots" className="text-off-white hover:text-terracotta transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/services/ai-voice-assistants" className="text-off-white hover:text-terracotta transition-colors">
                  Voice AI
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="text-off-white hover:text-terracotta transition-colors">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">Locations</h4>
            <ul className="space-y-3">
              {cities.slice(0, 4).map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/locations/${city.slug}`}
                    className="text-off-white hover:text-terracotta transition-colors"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">More Locations</h4>
            <ul className="space-y-3">
              {cities.slice(4).map((city) => (
                <li key={city.slug}>
                  <a
                    href={`/locations/${city.slug}`}
                    className="text-off-white hover:text-terracotta transition-colors"
                  >
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase text-off-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-off-white">
                Email: hello@antekautomation.com
              </li>
              <li className="text-off-white">
                Phone: 0333 335 7920
              </li>
              <li className="text-off-white">
                Hampshire, United Kingdom
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
