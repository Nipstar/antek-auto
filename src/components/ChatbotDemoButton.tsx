import { MessageSquare } from 'lucide-react';

interface ChatbotDemoButtonProps {
  onClick: () => void;
}

export function ChatbotDemoButton({ onClick }: ChatbotDemoButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative group"
      aria-label="Try live chatbot demo"
    >
      {/* Animated background glow */}
      <div className="absolute -inset-1 bg-soft-sage blur-sm group-hover:opacity-40 transition-opacity duration-300 rounded-sm animate-pulse opacity-10"></div>

      {/* Main button */}
      <div className="relative px-6 md:px-8 py-3 md:py-4 bg-soft-sage border-3 border-charcoal shadow-brutal-sm hover:shadow-brutal-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-brutal-xs">
        {/* Live badge */}
        <div className="absolute -top-3 -right-3 flex items-center space-x-1 bg-soft-sage border-2 border-charcoal px-2 py-1 rounded-full">
          <span className="w-2 h-2 bg-off-white rounded-full animate-pulse"></span>
          <span className="text-xs font-black uppercase text-charcoal">Live</span>
        </div>

        {/* Button content */}
        <div className="flex items-center justify-center space-x-2">
          {/* Animated chatbot icon */}
          <div className="relative">
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-charcoal" />
            {/* Animated pulse around icon */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 border-2 border-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-150"></div>
            </div>
          </div>

          {/* Button text - solid, always readable */}
          <div className="text-center">
            <div className="font-black uppercase text-sm md:text-base text-charcoal tracking-tight-lg">
              🤖 Try Live Chatbot
            </div>
            <div className="hidden md:block text-xs text-charcoal">
              No signup required • 30 seconds
            </div>
          </div>
        </div>
      </div>

      {/* Supporting text for mobile */}
      <div className="md:hidden text-center text-xs text-charcoal font-bold mt-2">
        No signup • 30 sec
      </div>
    </button>
  );
}
